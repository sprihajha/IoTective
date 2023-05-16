import json
from fastapi import FastAPI, Depends
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import os
import sqlite3
import pinecone
import time
from datetime import timedelta

from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.chat_models import ChatOpenAI
from langchain.chains.qa_with_sources import load_qa_with_sources_chain
from langchain.callbacks import get_openai_callback

from pathlib import Path

# Update with your API keys
PINECONE_API_KEY = "API_KEY"
PINECONE_API_ENV = "API_ENV"

os.environ["OPENAI_API_KEY"] = "API_KEY"

app = FastAPI()


class QueryInput(BaseModel):
    device_name: str


def recreate_table():
    with sqlite3.connect("responses.db") as conn:
        c = conn.cursor()

        # Drop the 'responses' table if it exists
        c.execute("DROP TABLE IF EXISTS responses")

        # Create the table
        columns = ", ".join(f"{key} TEXT" for key in query_dict.keys())
        c.execute(
            f"""CREATE TABLE responses
                    (device_name TEXT PRIMARY KEY, image TEXT, brand TEXT, category TEXT, {columns})"""
        )

        conn.commit()


def create_table():
    with sqlite3.connect("responses.db") as conn:
        c = conn.cursor()

        # Create the table if it doesn't exist
        columns = ", ".join(f"{key} TEXT" for key in query_dict.keys())
        c.execute(
            f"""CREATE TABLE IF NOT EXISTS responses
                    (device_name TEXT PRIMARY KEY, image TEXT, brand TEXT, category TEXT, {columns})"""
        )

        conn.commit()


def insert_response(
    device_name, image, brand, category, query, query_key, response, sources
):
    with sqlite3.connect("responses.db") as conn:
        c = conn.cursor()

        data = {"query": query, "query_response": response, "sources": sources}
        json_data = json.dumps(data)

        c.execute(
            f"INSERT OR IGNORE INTO responses (device_name, image, brand, category, {query_key}) VALUES (?, ?, ?, ?, ?)",
            (device_name, image, brand, category, json_data),
        )

        c.execute(
            f"UPDATE responses SET image = ?, brand = ?, category = ?, {query_key} = ? WHERE device_name = ?",
            (image, brand, category, json_data, device_name),
        )

        conn.commit()


def get_all_responses(device_name: str):
    conn = sqlite3.connect("responses.db")
    cursor = conn.cursor()
    cursor.execute(
        "SELECT * FROM responses WHERE device_name=?", (device_name,))
    result = cursor.fetchall()
    conn.close()

    if not result:
        return None
    response_dict = dict(zip(query_dict.keys(), result[0][4:]))
    response_dict["device_name"] = result[0][0]
    response_dict["image"] = result[0][1]
    response_dict["brand"] = result[0][2]
    response_dict["category"] = result[0][3]
    return response_dict


def extract_text_sources(input_string):
    if input_string is None:
        return []

    sources_label = "\nSOURCES: "

    # Find the index of the sources label
    start_index = input_string.find(sources_label)

    if start_index == -1:
        return input_string, []

    # Extract the text before the sources label
    text = input_string[:start_index]

    # Extract the substring after the sources label
    substring = input_string[start_index + len(sources_label):]

    return text, substring.split(", ")


def append_page_numbers(sources, docs):
    source_pages = {source: set() for source in sources}

    for document in docs:
        source = document.metadata["source"]
        if source in source_pages:
            page = document.metadata["page"]

            source_pages[source].add(page)

    return [
        f'{source} [Page: {",".join(map(str, sorted(pages)))}]'
        for source, pages in source_pages.items()
    ]


def get_openai_embeddings() -> OpenAIEmbeddings:
    return OpenAIEmbeddings(openai_api_key=os.environ["OPENAI_API_KEY"])


def get_chat_openai() -> ChatOpenAI:
    return ChatOpenAI(
        temperature=0.2,
        openai_api_key=os.environ["OPENAI_API_KEY"],
        model_name="gpt-3.5-turbo",
    )


device_names = {
    "Roomba": {
        "image": "https://example.com/path/to/roomba/image.jpg",
        "brand": "iRobot",
        "category": "Vacuum Cleaner",
    },
    "Echo-dot": {
        "image": "https://example.com/path/to/roomba/image.jpg",
        "brand": "Amazon",
        "category": "Vacuum Cleaner",
    },
    "Hue": {
        "image": "https://example.com/path/to/roomba/image.jpg",
        "brand": "Philips",
        "category": "Light Bulb",
    },
    "Nest-thermostat": {
        "image": "https://example.com/path/to/roomba/image.jpg",
        "brand": "Google",
        "category": "Thermostat",
    },
    "Ring-camera": {
        "image": "https://example.com/path/to/roomba/image.jpg",
        "brand": "Amazon",
        "category": "Camera",
    },
    "Roku": {
        "image": "https://example.com/path/to/roomba/image.jpg",
        "brand": "Roku",
        "category": "Streaming Device",
    },
}

query_dict = {
    "faq": "Create a list of 5 frequently asked questions about the devices. Also provide responses to these questions.",
    "pii": "Does the device collect personally identifiable information?",
    "camera": "Does the device have a camera?",
    "microphone": "Do any of the devices have a microphone? If yes then list these devices and what they use the microphone for.",
    "name": "Does the device collect user name?",
    "email": "Does the device require the user to provide an email to create and account or register the device online? If yes then what is the email used for?",
    "age": "Does the device collect user age?",
    "phone": "Does the device require the user to provide a phone number to create and account or register the device online? If yes then what is the phone number used for?",
    "geolocation": "Does the device collect geolocation data?",
    "biometric": "Do any of the devices collect any form of biometric data like face recognition scans, fingerprints, etc? If yes then specify which device does it and what does it use the biometric data for.",
    "ipAddress": "Does any of the device collect user ipAddress?",
    "socialAccounts": "Do any of the devices or their companion apps allow you to connect to social media accounts? If yes then list the social media accounts that can be connected.",
    "thirdPartyAccounts": "Do any of the devices or their companion apps allow you to connect to any other third part accounts? If yes then list the third party accounts that can be connected.",
    "voiceRecordings": "Do any of the devices collect voice recordings? If yes then list the devices that collect voice recordings and what they use the voice recordings for.",
    "videoRecordings": "Do any of the devices collect video recordings? If yes then list the devices that collect video recordings and what they use the video recordings for.",
    "roomMapping": "Do any of the devices create a map of the room? If yes then list the devices that create a map of the room and what they use the map for.",
    "interactions": "Do any of the devices collect user interactions with the device? If yes then list the devices that collect user interactions and what they use the interactions for.",
    "behaviors": "Do any of the device collect the users behavioral patterns? If yes then list the devices that collect behavioral patterns and what they use the patterns for.",
    "analytics": "Do any of the devices collect analytics data? If yes then list the devices that collect analytics data and what they use the data for.",
    "contactSync": "Do any of the devices or their companion apps allow you to sync your contacts? If yes then list the devices that allow you to sync your contacts and what they use the contacts for.",
    "cellular": "Do any of the devices support/require cellular connectivity?",
    "wifi": "Do any of the devices support/require Wi-Fi connectivity?",
    "bluetooth": "Do any of the devices support/require Bluetooth connectivity?",
    "thirdParty": "Do any of the devices share/rent data with third parties? If yes then list the third parties that the devices share/rent data with and what kind of data do they share/rent.",
    "categories": "What type of information shared with third parties? List the categories of information shared with third parties.",
    "purpose": "What is the purpose of data sharing? Eg: research and/or product improvement",
    "anonymized": "Is the shared data anonymized?",
    "samePrivacy": "Do third parties follow the same privacy practices?",
    "contractLimits": "Are there contractual limits on data usage by third parties?",
    "notification": "Is the user notified in any form if their data is shared with third parties be it manually or automatically?",
    "reidentifying": "Does the company actively take steps to prevent the identifying a specific user from the data they provide to third parties?",
    "transfer": "Would the user information be transferred to another company in merger, acquisition, or bankruptcy?",
    "verifiedUsers": "Does the device support verified user accounts?",
    "publicDisplay": "Is the user's collected data publicly displayed in any form?",
    "moderated": "Are user interactions with the device moderated in any form? Eg: content moderation",
    "externalLinks": "Do any of the devices display links to external websites or services either in their user interface or companion app?",
    "deleteFromThirdParty": "Does the company allow for data which is collected by or shared with third parties to be deleted from the third parties?",
    "targetAds": "Does the device track the users for targeted ads?",
    "profiles": "Do any of the devices or their companion app maintain a profile of the user which includes all the data collected about the user?",
    "filtered": "Can ads be filtered?",
    "doNotTrack": "Can users opt-out of ads? Eg: Do not Track mechanism",
    "createContent": "Do any of the devices allow users to use it as a medium for content creation? If yes then list the devices that allow users to create content and what kind of content can be created using them.",
    "ownership": "Do users retain ownership of their content they create using the device?",
    "access": "Can users access their data which the device has collected from them?",
    "dataModify": "Can users modify their data which the device has collected from them?",
    "retention": "What is the data retention policy for the data collected by the device from the user?",
    "dataDelete": "Can users delete the data which the device has collected from them if they want to?",
    "termination": "Is user data deleted upon account cancellation or termination of their account?",
    "restrictAccess": "Can users restrict access to their data?",
    "download": "Can users download the data which the device has collected from them?",
    "privacySettings": "Are there privacy settings available? If yes then list what kind of privacy settings are available and their purpose",
    "limitedUse": "Can users limit the use of their data?",
    "combineThirdParty": "Is data combined with data from other third-parties? This may be done for purposes such as analytics, advertising, etc.",
    "combinedPii": "Is personally identifiable information combined with other data? If yes then how is this combined data used and treated?",
    "change": "Can users change their consent?",
    "grievance": "Is there a grievance redressal mechanism?",
    "legalRequest": "Does the company have a procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity?",
    "optIn": "Can users opt-in to sharing their data with the company and/or third parties?",
    "optOut": "Can users opt-out of sharing their data with the company and/or third parties?",
    "copyright": "How are copyright claims to user data handled?",
    "legacy": "Can users assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death?",
    "parental": "Is parental consent required before children's data is collected or disclosed?",
    "identity": "Does the device or company verify the identity of their using using official documents?",
    "accountCreation": "Does the user need to create an account with the company in order to use the device? If any device can be used without creating an account then list them.",
    "managedAccounts": "Does the company or device support managed accounts i.e. accounts which are managed by a parent or guardian?",
    "multiFactor": "Does the accoiunt created by the user with the company to use the device support multi-factor authentication?",
    "employeeAccess": "Do the company employees have access to the data collected by the device from the user? If yes then what kind of access do they have?",
    "dataTransit": "Is data encrypted in transit?",
    "dataStorage": "Is data encrypted when stored?",
    "breachNotice": "Is there a notice provided to the user if any of the data collected from them is exposed in a data breach?",
    "storageLocation": "Where is data stored?",
    "storageDuration": "How long is data stored?",
    "vulnerabilities": "Are there any known vulneranbilites associated with any of the devices listed in the CVE database? If yes then list the devices and their vulnerabilities.",
    "securityUpdates": "How long are security updates provided for the devices?",
    "passwordComplexity": "Are their any password complexity requirements for the account used to use the device? If yes then what are they?",
    "complianceAudits": "Do the devices and their parent company undergo regular industry standard compliance audits with respect to privacy and security?",
    "defaultPrivacy": "What are the default privacy controls for data collected by the device? Does it have data collection enabled by default?",
    "calOPPA": "Do any of the devices comply with the California Online Privacy Protection Act (CalOPPA)?",
    "coppa": "Do any of the devices comply with the Children's Online Privacy Protection Act (COPPA)?",
    "ferpa": "Do any of the devices comply with the Family Educational Rights and Privacy Act (FERPA)?",
    "hipaa": "Do any of the devices comply with the Health Insurance Portability and Accountability Act (HIPAA)?",
    "gdpr": "Do any of the devices comply with the General Data Protection Regulation (GDPR)?",
    "policyVersion": "What is the version or effective date of the privacy policy?",
    "policyChangeLog": "Do privacy policies indicate a change log?",
    "policyUpdateNotification": "Are users notified when the privacy policies are updated?",
    "policyCoverage": "Do privacy policies indicate which products are covered?",
    "policyContact": "How can users contact the company about privacy policy questions, complaints, or material changes?",
    "policyPrinciples": "Do privacy policies indicate privacy principles?",
    "policyLanguages": "Are privacy policies available in multiple languages? List the languages the privacy policy is available in",
    "prohibitedActivities": "Are there any prohibited activities that may lead to account termination?",
    "classActionWaiver": "Are users required to waive the right to join a class-action lawsuit?",
    "internationalData": "Are user data subject to international data transfer or jurisdiction laws?",
    "children": "Is the device intended for use by children under 13?",
    "teens": "Is the device intended for use by teens?",
    "adults": "Is the device intended for use by adults over 18?",
    "parents": "Is the device intended for use under parent or guardian supervision?",
}

create_table()


@app.post("/run/")
async def run(
    embeddings: OpenAIEmbeddings = Depends(get_openai_embeddings),
    llm: ChatOpenAI = Depends(get_chat_openai),
):
    recreate_table()

    text_splitter = CharacterTextSplitter(
        separator=" ",
        chunk_size=2500,
        chunk_overlap=200,
        length_function=len,
    )
    pinecone.init(
        api_key=PINECONE_API_KEY,
        environment=PINECONE_API_ENV,
    )
    index_name = "INDEX_NAME"
    pinecone.create_index(
        name=index_name,
        dimension=1536,
        metric="cosine",
        pods=1,
        replicas=1,
        pod_type="s1.x1",
    )

    for device_name, device_info in device_names.items():
        start_time = time.time()
        with get_openai_callback() as cb:
            image_url = device_info["image"]
            brand = device_info["brand"]
            category = device_info["category"]
            # Update with the path to folder with PDFs
            pdf_files = list(
                Path(f"./path-to-folder/{device_name}").rglob("*.pdf"))
            documents = []
            start_time_text_split = time.time()
            for pdf_file in pdf_files:
                document = PyPDFLoader(str(pdf_file)).load()
                documents.extend(document)
            texts = text_splitter.split_documents(documents)
            formatted_text_split = str(
                timedelta(seconds=(time.time() - start_time_text_split))
            )
            start_time_vectorizer = time.time()
            docsearch = Pinecone.from_texts(
                texts=[t.page_content for t in texts],
                embedding=embeddings,
                metadatas=[t.metadata for t in texts],
                index_name=index_name,
                namespace=device_name,
            )
            formatted_vectorizer = str(
                timedelta(seconds=(time.time() - start_time_vectorizer))
            )
            start_time_query = time.time()
            for query_key, query in query_dict.items():
                docs = docsearch.similarity_search(
                    query, namespace=device_name)
                chain = load_qa_with_sources_chain(llm, chain_type="stuff")
                response = chain.run(input_documents=docs, question=query)
                query_response, sources = extract_text_sources(response)
                updated_sources = append_page_numbers(sources, docs)
                sources_string = ", ".join(updated_sources)

                insert_response(
                    device_name,
                    image_url,
                    brand,
                    category,
                    query,
                    query_key,
                    query_response,
                    sources_string,
                )
            formatted_query = str(
                timedelta(seconds=(time.time() - start_time_query)))
        print(f"Total Cost (USD) for {device_name}: {cb.total_cost}")
        print(f"Total Tokens for {device_name}: {cb.total_tokens}")
        formatted_time = str(timedelta(seconds=(time.time() - start_time)))
        print(
            f"Total Time for text split {device_name}: {formatted_text_split}")
        print(
            f"Total Time fo vectorizing {device_name}: {formatted_vectorizer}")
        print(
            f"Total Time for running queries {device_name}: {formatted_query}")
        print(f"Total Time for {device_name}: {formatted_time}")
    pinecone.delete_index(index_name)

    return JSONResponse(content={"status": "success"})


@app.post("/process_query/")
async def process_query(query_input: QueryInput):
    device_name = query_input.device_name

    if not (responses := get_all_responses(device_name)):
        return JSONResponse(
            content={"error": "No responses found for the given device_name"}
        )

    # Reformat the responses
    formatted_responses = {
        "name": responses.pop("device_name"),
        "brand": responses.pop("brand"),
        "category": responses.pop("category"),
        "image": responses.pop("image"),
        "usage": {},
        "connectivity": {},
        "sharing": {},
        "social": {},
        "tracking": {},
        "controls": {},
        "consent": {},
        "security": {},
        "privacyCompliance": {},
        "intendedUsers": {},
    }

    usage = [
        "faq",
        "pii",
        "camera",
        "microphone",
        "name",
        "email",
        "age",
        "phone",
        "geolocation",
        "biometric",
        "ipAddress",
        "socialAccounts",
        "thirdPartyAccounts",
        "voiceRecordings",
        "videoRecordings",
        "roomMapping",
        "interactions",
        "behaviors",
        "analytics",
        "contactSync",
    ]
    connectivity = [
        "cellular",
        "wifi",
        "bluetooth",
    ]
    sharing = [
        "thirdParty",
        "categories",
        "purpose",
        "anonymized",
        "samePrivacy",
        "contractLimits",
        "notification",
        "reidentifying",
        "transfer",
    ]
    social = [
        "verifiedUsers",
        "publicDisplay",
        "moderated",
        "externalLinks",
        "deleteFromThirdParty",
    ]
    tracking = [
        "targetAds",
        "profiles",
        "filtered",
        "doNotTrack",
    ]
    controls = [
        "createContent",
        "ownership",
        "access",
        "dataModify",
        "retention",
        "dataDelete",
        "termination",
        "restrictAccess",
        "download",
        "privacySettings",
        "limitedUse",
        "combineThirdParty",
        "combinedPii",
    ]
    consent = [
        "change",
        "grievance",
        "legalRequest",
        "optIn",
        "optOut",
        "copyright",
        "legacy",
        "parental",
    ]
    security = [
        "identity",
        "accountCreation",
        "managedAccounts",
        "multiFactor",
        "employeeAccess",
        "dataTransit",
        "dataStorage",
        "breachNotice",
        "storageLocation",
        "storageDuration",
        "vulnerabilities",
        "securityUpdates",
        "passwordComplexity",
    ]
    privacyCompliance = [
        "complianceAudits",
        "defaultPrivacy",
        "calOPPA",
        "coppa",
        "ferpa",
        "sopipa",
        "gdpr",
        "policyVersion",
        "policyChangeLog",
        "policyUpdateNotification",
        "policyCoverage",
        "policyContact",
        "policyPrinciples",
        "policyLanguages",
        "prohibitedActivities",
        "classActionWaiver",
        "internationalData",
    ]
    intendedUsers = [
        "children",
        "teens",
        "adults",
        "parents",
    ]

    for key, response in responses.items():
        formatted_response = json.loads(response)
        if key in usage:
            formatted_responses["usage"][key] = formatted_response
        elif key in connectivity:
            formatted_responses["connectivity"][key] = formatted_response
        elif key in sharing:
            formatted_responses["sharing"][key] = formatted_response
        elif key in social:
            formatted_responses["social"][key] = formatted_response
        elif key in tracking:
            formatted_responses["tracking"][key] = formatted_response
        elif key in controls:
            formatted_responses["controls"][key] = formatted_response
        elif key in consent:
            formatted_responses["consent"][key] = formatted_response
        elif key in security:
            formatted_responses["security"][key] = formatted_response
        elif key in privacyCompliance:
            formatted_responses["privacyCompliance"][key] = formatted_response
        elif key in intendedUsers:
            formatted_responses["intendedUsers"][key] = formatted_response

    return JSONResponse(content=formatted_responses)
