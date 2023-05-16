import { Device } from "../types/device";

export const devices: Device[] = [
  {
    name: "Roomba",
    brand: "iRobot",
    category: "Vacuum Cleaner",
    image: "https://example.com/path/to/roomba/image.jpg",
    usage: {
      faq: {
        query:
          "Create a list of 5 frequently asked questions about the devices. Also provide responses to these questions.",
        query_response:
          "1. How do I activate the battery of my Roomba® robot vacuum?\nA: Place the robot on the Home Base to activate the battery. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n2. How can I pair my Roomba® robot vacuum with other smart devices?\nA: You can find tricks and answers to commonly asked questions, including how to pair your Roomba® robot vacuum with other smart devices in the owner's guide. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n3. Where can I find information about scheduling Roomba?\nA: You can find information about scheduling Roomba in the owner's manual. (IoT-Project/Roomba/500 Owner's Manual.pdf)\n\n4. How does Braava clean?\nA: You can find information about how Braava cleans in the owner's manual. (IoT-Project/Roomba/300 Series Owner’s Manual.pdf)\n\n5. Where can I find a quick start guide for the 300 Series Roomba?\nA: You can find a quick start guide for the 300 Series Roomba on global.irobot.com. (IoT-Project/Roomba/300 Series Quick Start Guide.pdf)",
        sources:
          "IoT-Project/Roomba/e6 Owner’s Guide.pdf [Page: 5.0], IoT-Project/Roomba/500 Owner's Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Owner’s Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Quick Start Guide.pdf [Page: 0.0]",
      },
      pii: {
        query: "Does the device collect personally identifiable information?",
        query_response:
          "The device collects personal information, including information about the Robot and/or App usage, device data, and Robot customization settings and preferences. However, some personal information is stored separately from deidentified Robot data, and users can control the collection of usage data by disconnecting their Robot from Wi-Fi or Bluetooth via the App. The specific mention of personally identifiable information is not found in the given content. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      camera: {
        query: "Does the device have a camera?",
        query_response:
          "Some robot vacuums have front-facing cameras for navigation and object recognition, as well as home monitoring. iRobot, Ecovacs, and Roborock are among the companies that have incorporated cameras into their devices. However, it is unclear if the specific device in question has a camera as it is not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], WebAPI- Privacy Policy | iRobot.pdf [Page: ]",
      },
      microphone: {
        query:
          "Do any of the devices have a microphone? If yes then list these devices and what they use the microphone for.",
        query_response:
          "The Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops create home mapping data and capture mapping and navigation information via VSLAM, which stays on the robot. Some usage data is sent to the Cloud, but the robot does not send images used for navigation to the Cloud. If a user agrees to have their map data viewable on their mobile device, then the map that the robot creates during a cleaning job is sent to the Cloud, where it is processed and simplified to produce a user-friendly map that ultimately appears in the iRobot HOME App. iRobot will not sell customer data and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. In the short term, the Roomba is already linked to both Google Assistant and Amazon Alexa, so that customers can control their robot with voice commands. iRobot believes robots and the mapping capabilities they provide will be vital in enabling the smart home. SOURCE: IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf, IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf",
        sources: "",
      },
      name: {
        query: "Does the device collect user name?",
        query_response:
          "It is unclear whether the device collects user name. No information was found in the provided content that directly answers the question.",
        sources: "N/A [Page: ]",
      },
      email: {
        query:
          "Does the device require the user to provide an email to create and account or register the device online? If yes then what is the email used for?",
        query_response:
          "Yes, the device requires the user to provide an email to create an account or register the device online. The email is used for account verification, to communicate directly with the user, to send information about orders, product sales, special offers, and new site features, and to send service-related emails or notifications. The email is also necessary for the performance of a contract between the user and iRobot. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Email account verification update | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      age: {
        query: "Does the device collect user age?",
        query_response:
          "It is unclear whether the device collects user age as there is no mention of age in the provided content. ",
        sources: "N/A [Page: ]",
      },
      phone: {
        query:
          "Does the device require the user to provide a phone number to create and account or register the device online? If yes then what is the phone number used for?",
        query_response:
          "The documents do not provide a clear answer to whether the device requires the user to provide a phone number to create an account or register the device online. There is no information about what the phone number would be used for. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0]",
      },
      geolocation: {
        query: "Does the device collect geolocation data?",
        query_response:
          "The device may collect geolocation data if the user agrees to have their map data viewable on their mobile device and if they connect to WiFi, Bluetooth, or the internet. However, the location mapping data is considered sensitive and confidential information and is not shared with third parties for marketing purposes. The data collected is encrypted and stored securely, and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. The iRobot Home app may collect approximate location data, app interactions, personal information such as name and email address, and app info and performance data such as crash logs and diagnostics. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      biometric: {
        query:
          "Do any of the devices collect any form of biometric data like face recognition scans, fingerprints, etc? If yes then specify which device does it and what does it use the biometric data for.",
        query_response:
          "None of the devices collect biometric data like face recognition scans or fingerprints. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ipAddress: {
        query: "Does any of the device collect user ipAddress?",
        query_response: "Yes, the device collects user ipAddress. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      socialAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to social media accounts? If yes then list the social media accounts that can be connected.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow you to connect to social media accounts. The privacy policies mention receiving personal information if users interact with their accounts on social networks, but do not specify which social media accounts can be connected. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      thirdPartyAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to any other third part accounts? If yes then list the third party accounts that can be connected.",
        query_response:
          "Yes, some third party services can collect information from the iRobot devices and companion apps, such as Amazon Alexa and Google Assistant. Other third parties that may receive personal information include social networks and third party vendors/service providers. However, the specific third party accounts that can be connected are not listed in the extracted content. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      voiceRecordings: {
        query:
          "Do any of the devices collect voice recordings? If yes then list the devices that collect voice recordings and what they use the voice recordings for.",
        query_response:
          'Yes, some of the devices collect voice recordings. The Samsung Jet Bot AI+ Robot Vacuum and Powerbot R7070 collect "recordings of your voice when you use voice commands to control a Service" (MIT Technology Review). The iRobot Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops also collect voice recordings when users share images via the mobile app (iRobot). It is unclear what these companies use the voice recordings for. ',
        sources: "MIT Technology Review [Page: ], iRobot [Page: ]",
      },
      videoRecordings: {
        query:
          "Do any of the devices collect video recordings? If yes then list the devices that collect video recordings and what they use the video recordings for.",
        query_response:
          "Yes, some of the devices collect video recordings. The iRobot Roomba J7 series and some models from LG and Samsung have cameras that collect video recordings for the purpose of training algorithms to recognize patterns and improve the robot's cleaning performance. The collected data is also used to build smarter robots whose purpose may go beyond vacuuming in the future. The iRobot Beta Program also collects and processes video recordings for testing new features and functionalities of the service. Consent is required for the collection of video recordings, and users have the option to opt-in or opt-out. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      roomMapping: {
        query:
          "Do any of the devices create a map of the room? If yes then list the devices that create a map of the room and what they use the map for.",
        query_response:
          'Yes, some of the devices create a map of the room. The devices that create a map of the room are Roomba e5, e6, 89x, 69x, 67x, 96x, i3/i1, i6, i7, i8, and s9. The map is used to determine the best way to clean based on the orientation of each room, furniture placement, etc. The Imprint Smart Maps also enable the user to clean or select a single room, multiple rooms, or an entire level of the floor all from the iRobot Home App. The user can also set up specific zones to clean. The technology which allows iRobot products to create a map is called vSLAM (visual Simultaneous Localization and Mapping). The robot looks for unique "landmarks" in the home and remembers where those landmarks are. Landmarks may be corners of a picture frame or window, a ceiling fan or recessed light, or similar feature on the wall or ceiling.',
        sources: "",
      },
      interactions: {
        query:
          "Do any of the devices collect user interactions with the device? If yes then list the devices that collect user interactions and what they use the interactions for.",
        query_response:
          "Yes, some of the devices collect user interactions with the device. The Roomba Robots equipped with smart technology collect information about the Robot and/or App usage, feature usage, in-App transactions, technical specifications, crashes, and other information about how you use your Robot and the product App. Additionally, the Robot collects information about its movement throughout the environment to create a location ‘map’ of the space accessible to the Robot. However, it is not specified what they use the interactions for.",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      behaviors: {
        query:
          "Do any of the device collect the users behavioral patterns? If yes then list the devices that collect behavioral patterns and what they use the patterns for.",
        query_response:
          "Yes, some of the devices collect users' behavioral patterns. The devices that collect behavioral patterns include iRobot Roomba and the information collected is used for enhancing and personalizing the user experience, carrying out interest-based advertising and marketing, monitoring and improving the website and service, and for other internal purposes. The specific types of information collected and the purposes for which they are used vary depending on the device and the features used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      analytics: {
        query:
          "Do any of the devices collect analytics data? If yes then list the devices that collect analytics data and what they use the data for.",
        query_response:
          "The iRobot Roomba devices and their associated apps collect usage and device information, including analytics data, which is used for various purposes such as improving the service and personalizing advertising. The iRobot SDK also collects data on which tools and services are being used and how they are being used, but this data is examined in the aggregate to improve the SDK and is maintained in accordance with Google's Privacy Policy. The iRobot Privacy Policy and Android App Copyright Licenses provide more details on the types of information collected and how it is used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      contactSync: {
        query:
          "Do any of the devices or their companion apps allow you to sync your contacts? If yes then list the devices that allow you to sync your contacts and what they use the contacts for.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow syncing of contacts and what they use the contacts for. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
    },
    connectivity: {
      cellular: {
        query: "Do any of the devices support/require cellular connectivity?",
        query_response:
          "The Roomba and Braava models listed in the document support/require Wi-Fi connectivity, but there is no mention of cellular connectivity. ",
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home on the App Store.pdf [Page: ]",
      },
      wifi: {
        query: "Do any of the devices support/require Wi-Fi connectivity?",
        query_response:
          'Some of the devices support/require Wi-Fi connectivity, while others do not. Please refer to the compatibility chart provided in the "Setting up your Wi-Fi Connected Robot with the iRobot HOME App" document to determine if your device supports Wi-Fi connectivity. ',
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0]",
      },
      bluetooth: {
        query: "Do any of the devices support/require Bluetooth connectivity?",
        query_response:
          "Yes, some of the devices support/require Bluetooth connectivity. The iRobot® HOME App uses Bluetooth to set up and connect the robot to the device, and the Braava jet™ 240 mopping robot uses Bluetooth Low Energy (BLE) built into most common mobile devices. ",
        sources:
          "IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0]",
      },
    },
    sharing: {
      thirdParty: {
        query:
          "Do any of the devices share/rent data with third parties? If yes then list the third parties that the devices share/rent data with and what kind of data do they share/rent.",
        query_response:
          "Yes, some of the devices share/rent data with third parties. The third parties that the devices share/rent data with include other companies owned by or under common ownership as iRobot, third party vendors, affiliates, and other service providers that perform services on iRobot's behalf, selected third parties who iRobot thinks may offer customers products or services they may enjoy, and third parties in connection with any company transaction. The kind of data that is shared/rented includes personal information, Wi-Fi connected robot performance data, and aggregated performance data about iRobot's robots. iRobot is committed to safeguarding the privacy of customer-related information and does not sell information about its customers to third parties. However, customers can choose to share data with third parties for their benefit if they so choose. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      categories: {
        query:
          "What type of information shared with third parties? List the categories of information shared with third parties.",
        query_response:
          "The categories of information shared with third parties include personal information for business purposes, aggregated and anonymous information, and information shared with third parties at the request of the user. Specific categories of personal information shared with third parties include information for targeted advertising, e-commerce services, content or service fulfillment, billing, website operation, payment processing and authorization, customer service, fraud prevention, web hosting, data storage, analytics services, and third-party app or service integration. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      purpose: {
        query:
          "What is the purpose of data sharing? Eg: research and/or product improvement",
        query_response:
          "The purpose of data sharing varies depending on the context. iRobot is committed to the absolute privacy of customer-related data, including data collected by their connected products, and will not sell customer data or share it with third parties without the customer's knowledge or control. Google supports data portability and prohibits certain actions with content returned from their APIs, including scraping, modifying, selling, and sublicensing to third parties. The terms of data sharing are dependent on the specific agreement or policy in place. ",
        sources:
          "IoT-Project/Roomba/Software Licenses | iRobot.pdf [Page: 528.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0]",
      },
      anonymized: {
        query: "Is the shared data anonymized?",
        query_response:
          "The data collected by iRobot's connected products is not anonymized, but it is encrypted and stored securely. However, customers can choose to share limited data to enable voice control of the robot using Amazon Alexa or Google Assistant. Customers can also decline to have their data shared, and iRobot will delete the data from their servers at the request of a customer. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      samePrivacy: {
        query: "Do third parties follow the same privacy practices?",
        query_response:
          "It depends on the specific third party and their relationship with iRobot. Some third parties may follow the same privacy practices, while others may have different practices. iRobot shares personal information with third parties in various instances, including for business purposes and to serve targeted advertisements based on online browsing history and interests. However, iRobot allows California residents to exercise certain rights, such as the right to know what personal information has been collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales. The lack of a comprehensive data privacy law in the United States means that privacy policies shape companies' legal responsibilities, and some policies may reserve the right to share data with select partners or service providers. The legal barriers for companies to collect data directly from consumers are fairly low, and most privacy policies do not even mention the audiovisual data being captured. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      contractLimits: {
        query: "Are there contractual limits on data usage by third parties?",
        query_response:
          'There are contractual limits on data usage by third parties, but the specifics depend on the individual agreements and policies of each company. Google\'s Privacy Policy states that data collected by their SDK is examined in the aggregate to improve the SDK and is maintained in accordance with their policy. The iRobot Privacy Policy states that they allow certain third-party advertising partners to collect information about users of their service for the purposes of serving more relevant ads, but all cookies that are not strictly necessary require prior opt-in consent from California consumers and do not involve "sales" of personal information. The iRobot Terms of Use Agreement also includes provisions for indemnification and limitations of liability for misuse of their APIs. However, the specifics of any contractual limits on data usage by third parties may vary depending on the company and the agreements in place. ',
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0,100.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      notification: {
        query:
          "Is the user notified in any form if their data is shared with third parties be it manually or automatically?",
        query_response:
          'Yes, the user is notified in some form if their data is shared with third parties, either manually or automatically. The Privacy Policy states that "No data will be shared with third parties without the customer\'s knowledge or control" and "All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers." Additionally, the policy outlines the right to know about personal information collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales to third parties. However, the policy also states that aggregated and anonymous information may be shared with others in a form that does not reasonably identify the user directly as an individual. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      reidentifying: {
        query:
          "Does the company actively take steps to prevent the identifying a specific user from the data they provide to third parties?",
        query_response:
          "The company does not sell customer data and takes steps to protect user information collected by API clients, including personally identifiable information, from unauthorized access or use. The company allows certain third-party advertising partners to collect information about users of the service for the purposes of serving ads that are more relevant, for ad campaign measurement and analytics, and for fraud detection and reporting. All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers, are loaded per the consumer’s instructions and preferences, and do not involve “sales” of personal information. The company complies with all applicable privacy laws and regulations including those applying to PII and provides and adheres to a privacy policy for API clients that clearly and accurately describes to users of the API client what user information is collected and how it is used and shared with Google and third parties. The company will not share data with third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties. If a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. Deleting the data is retroactive. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 94.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      transfer: {
        query:
          "Would the user information be transferred to another company in merger, acquisition, or bankruptcy?",
        query_response:
          "User information may be transferred to another company in a merger, acquisition, or bankruptcy, as well as in connection with any company transaction, such as a sale of all or a portion of company assets or shares, reorganization, financing, change of control or acquisition of all or a portion of the business by another company or third party, or in the event of bankruptcy or related or similar proceedings. User information may also be shared with third parties as required by law or to protect against harm to the rights, property, or safety of iRobot, its users, or the public. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    social: {
      verifiedUsers: {
        query: "Does the device support verified user accounts?",
        query_response:
          "There is no information provided about whether the device supports verified user accounts. ",
        sources: "N/A [Page: ]",
      },
      publicDisplay: {
        query: "Is the user's collected data publicly displayed in any form?",
        query_response:
          "The user's collected data may be publicly displayed on their mobile device if they agree to it, but it is not sold to third parties and cannot be shared without the customer's knowledge or control. Clean Map Reports are not shared with third parties. The data collected via the robot is not anonymized, but it is encrypted and stored securely. iRobot will delete the data from their servers at the request of a customer. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      moderated: {
        query:
          "Are user interactions with the device moderated in any form? Eg: content moderation",
        query_response:
          "For the first question, the contract is governed by English law. For the second question, there is no information provided about user interactions with the device being moderated or content moderation. For the third question, the president did not mention Michael Jackson. ",
        sources:
          "28-pl [Page: ], 0-pl [Page: ], 24-pl [Page: ], IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0]",
      },
      externalLinks: {
        query:
          "Do any of the devices display links to external websites or services either in their user interface or companion app?",
        query_response:
          "It is unclear whether any of the devices display links to external websites or services either in their user interface or companion app. The first source mentions links to third party websites, but it is not specified whether they are displayed in the user interface or companion app. The second source does not mention anything about links. The third source discusses data collection and usage from registered devices equipped with smart technology, but does not mention links. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      deleteFromThirdParty: {
        query:
          "Does the company allow for data which is collected by or shared with third parties to be deleted from the third parties?",
        query_response:
          "It is unclear whether the company allows for data which is collected by or shared with third parties to be deleted from the third parties. However, iRobot is committed to the absolute privacy of customer-related data, and no data is sold to third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties, and if a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. The company also allows California residents to exercise their rights to know, request deletion, and opt-out of personal information sales to third parties. iRobot does share personal information with third parties in certain instances, such as with other companies owned by or under common ownership as iRobot, third-party vendors and service providers, and at the request of the customer. The company may also share information with others in an aggregated and anonymous form that cannot reasonably identify the individual. However, the company may share personal information with law enforcement, regulators, and other parties for legal reasons. It is important to note that iRobot does not control the data collection and use practices of third-party apps and services that interact with their robots. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    tracking: {
      targetAds: {
        query: "Does the device track the users for targeted ads?",
        query_response:
          "The device tracks users for targeted ads using cookies and other tracking technologies, but users can control their advertising preferences or opt-out of certain advertising products. The use of cookies and tracking technologies may negatively impact the user's experience on the service. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      profiles: {
        query:
          "Do any of the devices or their companion app maintain a profile of the user which includes all the data collected about the user?",
        query_response:
          "Based on the extracted parts of the documents, it appears that some of the devices and their companion app collect personal information about the user, including data about their device usage, location, and preferences. However, it is unclear whether any of these devices or apps maintain a profile of the user which includes all the data collected about them. It is recommended to review the privacy policies and terms of service for each specific device and app to determine how user data is handled and stored. ",
        sources:
          "IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      filtered: {
        query: "Can ads be filtered?",
        query_response:
          "Yes, ads can be filtered and users have control over their advertising preferences and can opt-out of certain advertising products. Users can also manage their cookie settings to control the collection of information. However, some features and services on the website may not work properly if cookies are disabled. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      doNotTrack: {
        query: "Can users opt-out of ads? Eg: Do not Track mechanism",
        query_response:
          "Users can opt-out of ads through various mechanisms such as the Digital Advertising Alliance (DAA)’s self-regulatory opt-out page, European Interactive Digital Advertising Alliance (EDAA)’s consumer opt-out page, and Network Advertising Initiative (NAI)’s self-regulatory opt-out page. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The iRobot website also allows users to manage their advertising preferences and opt-out of certain Google advertising products. Additionally, users can limit certain interest-based mobile advertising through the settings on their mobile device. The iRobot website also provides information on how to manage and delete cookies. However, the website is unable to respond to Do Not Track signals set by the user's browser at this time. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    controls: {
      createContent: {
        query:
          "Do any of the devices allow users to use it as a medium for content creation? If yes then list the devices that allow users to create content and what kind of content can be created using them.",
        query_response:
          "The documents do not provide information about devices that allow users to create content. ",
        sources:
          "IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ownership: {
        query:
          "Do users retain ownership of their content they create using the device?",
        query_response:
          "The answer cannot be determined from the given content. There is no clear mention of a device or ownership of content created using a device. ",
        sources: "N/A [Page: ]",
      },
      access: {
        query:
          "Can users access their data which the device has collected from them?",
        query_response:
          "Users can choose to share their data with third-parties for their benefit, but no data is sold to third-parties without the customer's knowledge or control. iRobot will delete the data from their servers at the request of a customer. Roomba consumers can decline to have their data shared and can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via the robot is not anonymized, but it is encrypted and stored securely. However, the content does not provide a clear answer to whether users can access their data which the device has collected from them. The other content pieces are not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      dataModify: {
        query:
          "Can users modify their data which the device has collected from them?",
        query_response:
          "Users can decline to have their data shared with their mobile device, and they can also opt-out of sending map data to the Cloud through a switch in the mobile app. However, the content does not provide information on whether users can modify their data which the device has collected from them. The other content is not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      retention: {
        query:
          "What is the data retention policy for the data collected by the device from the user?",
        query_response:
          "There is no clear answer about the data retention policy for the data collected by the device from the user. The available information only mentions data collection and sharing practices, as well as security measures. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      dataDelete: {
        query:
          "Can users delete the data which the device has collected from them if they want to?",
        query_response:
          "Yes, Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app, and iRobot® will delete the data from their servers at the request of a customer. Clean Map™ Reports are not shared with third parties. No data is sold to third parties, and no data will be shared with third parties without the customer's knowledge or control. However, the content does not mention whether users can delete the data which the device has collected from them if they want to. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], and A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: ]",
      },
      termination: {
        query:
          "Is user data deleted upon account cancellation or termination of their account?",
        query_response:
          "The documents do not provide a clear answer to whether user data is deleted upon account cancellation or termination of their account. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 33.0,99.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      restrictAccess: {
        query: "Can users restrict access to their data?",
        query_response:
          "Users must protect the privacy and legal rights of those users and provide legally adequate privacy notice and protection for those users. If an application stores personal or sensitive information provided by users, it must do so securely. Users must comply with all applicable privacy laws and regulations including those applying to personally identifiable information (PII) and provide and adhere to a privacy policy for their API Client that clearly and accurately describes to users of their API Client what user information they collect and how they use and share such information (including for advertising) with Google and third parties. Users may not sublicense an API for use by a third party or create an API Client that functions substantially the same as the APIs and offer it for use by third parties. Users may not perform an action with the intent of introducing to Google products and must ensure that they have the necessary rights (including the necessary rights from their end users) to grant Google the license. When a user's non-public content is obtained through the APIs, users may not retrieve it. Companies must implement privacy- and security-protecting measures in their customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that they collect. However, there is a wide gap between the way companies talk about privacy and the way consumers understand it. It is easy to conflate privacy with security, but data security refers to a product’s physical and cyber security, or how vulnerable it is to a hack or intrusion, while data privacy is about transparency—knowing and being able to control the data that companies have, how it is used, why it is shared, whether and for how long it’s retained, and how much a company is collecting to start with. Company representatives sometimes use subtle differences, like the distinction between “sharing” data and selling it, that make how they handle privacy particularly hard for non-experts to parse. When a company says it will never sell a user's data, that does not mean it will not use it or share it with others for analysis. Developers are not traditionally very good at security and privacy, and their attitude becomes \"Try to get the functionality, and if the functionality is working, ship the product. And then the scandals come out.\" ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,94.0,96.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      download: {
        query:
          "Can users download the data which the device has collected from them?",
        query_response:
          "Roomba® consumers can decline to have their data shared. Customers need not connect a Wi-Fi connected Roomba® to the internet for it to work - it can work in offline mode with no internet or Cloud connectivity. Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via my robot is not anonymized, but it is encrypted and stored securely. iRobot® will delete the data from their servers at the request of a customer. However, there is no information about whether users can download the data which the device has collected from them. The Android App Copyright Licenses state that if you use any API to retrieve data from Google, you acknowledge that the data may be protected by intellectual property rights which are owned by Google or those parties that provide the data (or by other persons or companies on their behalf). Your use of any such API may be subject to additional Terms of Service. You may not modify, rent, lease, loan, sell, distribute or create derivative works based on this data (either in whole or in part) unless allowed by the Terms of Service. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      privacySettings: {
        query:
          "Are there privacy settings available? If yes then list what kind of privacy settings are available and their purpose",
        query_response:
          "Yes, there are privacy settings available. Users can set their email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether the user has accessed their email and performed certain functions with it. Users can also opt-out of interest-based advertising by participating companies through various consumer choice mechanisms. The company honors the privacy preferences of its users but is unable to respond to Do Not Track signals set by the user's browser at this time. The company collects various types of personal information, and users can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes. The company's privacy policy also includes information on data collection, sharing, and security practices. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      limitedUse: {
        query: "Can users limit the use of their data?",
        query_response:
          "Users can limit the use of their data by withholding consent for data collection or opting out of sharing data with their mobile device. They can also set email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether they have accessed the email and performed certain functions with it. Additionally, users can opt-out of interest-based advertising through various consumer choice mechanisms. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The company is unable to respond to Do Not Track signals set by the browser at this time. For mobile users, there are controls in the device Operating System that enable them to choose whether to allow cookies or share their advertising ID with companies like iRobot or their advertising service providers. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,32.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combineThirdParty: {
        query:
          "Is data combined with data from other third-parties? This may be done for purposes such as analytics, advertising, etc.",
        query_response:
          "Yes, data may be combined with data from other third-parties for purposes such as analytics and advertising. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combinedPii: {
        query:
          "Is personally identifiable information combined with other data? If yes then how is this combined data used and treated?",
        query_response:
          "Yes, personally identifiable information may be combined with other data. If combined, the information will be treated as personal information. The combined data is used for various purposes such as enhancing and personalizing user experience, interest-based advertising and marketing, monitoring and improving the website and service, and developing new products and features. The specific use and treatment of combined data may vary depending on the type of information being combined. ",
        sources: "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    consent: {
      change: {
        query: "Can users change their consent?",
        query_response:
          "It is unclear whether users can change their consent based on the given content. ",
        sources: "N/A [Page: ]",
      },
      grievance: {
        query: "Is there a grievance redressal mechanism?",
        query_response:
          "There is a grievance redressal mechanism through arbitration. ",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      legalRequest: {
        query:
          "Does the company have a procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity?",
        query_response:
          "It is unclear whether the company has a specific procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity as the provided content does not directly address this question. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 1.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      optIn: {
        query:
          "Can users opt-in to sharing their data with the company and/or third parties?",
        query_response:
          "It depends on the specific context and service. In general, users may be able to opt-in to sharing their data with the company and/or third parties, but this may require prior, opt-in consent and may vary depending on the specific service and location of the user. iRobot states that they do not sell customer data and are committed to the privacy of their customer-related data, but they may share personal information with other companies owned by or under common ownership as iRobot, third party vendors and service providers, and selected third parties who may offer products or services that users may enjoy. Users may also have the right to request deletion of personal information and opt-out of personal information sales to third parties. However, iRobot is unable to respond to Do Not Track signals set by users' browsers at this time. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      optOut: {
        query:
          "Can users opt-out of sharing their data with the company and/or third parties?",
        query_response:
          'Yes, users can opt-out of sharing their data with the company and/or third parties. Users can disable cookies or set their browser to automatically reject cookies, and can control their communication preferences through the "My Account" page on the website or app. Additionally, iRobot does not sell personal information. For California residents, they have the right to know what personal information has been collected and disclosed, request deletion of personal information, and opt-out of personal information sales to third parties. Sources: IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf, IoT-Project/Roomba/Privacy Policy | iRobot.pdf.',
        sources: "",
      },
      copyright: {
        query: "How are copyright claims to user data handled?",
        query_response:
          "The handling of copyright claims to user data is addressed in the terms and conditions of the APIs and software licenses, including provisions for data portability, prohibitions on certain uses of content, and liability limitations. The specific handling of copyright claims may vary depending on the applicable laws and agreements. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 77.0,96.0,97.0], IoT-Project/Roomba/Copyright Licenses | iRobot.pdf [Page: 570.0]",
      },
      legacy: {
        query:
          "Can users assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death?",
        query_response:
          "There is no information provided about whether users can assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death.",
        sources: "N/A [Page: ]",
      },
      parental: {
        query:
          "Is parental consent required before children's data is collected or disclosed?",
        query_response:
          "Yes, parental consent is required before children's data is collected or disclosed. The Services are not directed to persons under 13 and iRobot does not intentionally collect or maintain information from persons under 13. If personal information about a person under 16 has been provided to iRobot, they request immediate contact. Source: IoT-Project/Roomba/Privacy Policy | iRobot.pdf",
        sources: "",
      },
    },
    security: {
      identity: {
        query:
          "Does the device or company verify the identity of their using using official documents?",
        query_response:
          "There is no clear answer to the question of whether the device or company verifies the identity of their users using official documents. The provided content discusses topics such as software security, registration, compliance with laws and regulations, and privacy protection, but does not directly address the verification of identity using official documents. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,86.0,92.0]",
      },
      accountCreation: {
        query:
          "Does the user need to create an account with the company in order to use the device? If any device can be used without creating an account then list them.",
        query_response:
          "It is unclear whether the user needs to create an account with the company in order to use the device. No information is provided about devices that can be used without creating an account.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      managedAccounts: {
        query:
          "Does the company or device support managed accounts i.e. accounts which are managed by a parent or guardian?",
        query_response:
          "The provided documents do not contain information about whether the company or device supports managed accounts. ",
        sources: "N/A [Page: ]",
      },
      multiFactor: {
        query:
          "Does the accoiunt created by the user with the company to use the device support multi-factor authentication?",
        query_response:
          "The provided documents do not contain information about whether the account created by the user with the company to use the device supports multi-factor authentication.",
        sources: "N/A [Page: ]",
      },
      employeeAccess: {
        query:
          "Do the company employees have access to the data collected by the device from the user? If yes then what kind of access do they have?",
        query_response:
          "It is unclear from the given content whether or not company employees have access to the data collected by the device from the user and what kind of access they have. However, iRobot has implemented privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. Customers can also choose to opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected by robot vacuums can be particularly invasive, and companies often use vague language in their privacy policies that give them broad discretion in how they disseminate and analyze consumer information. It is important for consumers to understand the distinction between data security and data privacy and to be aware of the data that companies are collecting and how it is being used. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      dataTransit: {
        query: "Is data encrypted in transit?",
        query_response:
          "Yes, data is encrypted both in transit and at rest for iRobot connected products. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      dataStorage: {
        query: "Is data encrypted when stored?",
        query_response:
          "Yes, data is encrypted both in transit and at rest. iRobot takes a defense-in-depth approach to security, adding multiple layers of protection around their robots, cloud, and apps from start to finish. They ensure that the development of their products follows industry-standard security best practices, and they are using technology-leading tools to assist their development and security teams during this process. When deployed to market, they work with their suppliers and partners to ensure that their products and their suppliers' and partners' supporting infrastructure (including physical infrastructure, cloud, and mobile apps) are properly configured, monitored, and continuous security improvement processes are in place. Within iRobot’s cloud (built on top of AWS), customer data is stored encrypted. Customer data has multiple encryption keys which are rotated on a regular basis to reduce the risk of the data being compromised even in the event of a key exposure. Within the mobile application, data storage follows the platform’s standards for application-secure data; any sensitive data that is used by the application is not stored on the mobile device, but is instead securely transported to iRobot’s cloud for storage. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      breachNotice: {
        query:
          "Is there a notice provided to the user if any of the data collected from them is exposed in a data breach?",
        query_response:
          "There is no clear mention of whether a notice is provided to the user if any of the data collected from them is exposed in a data breach.",
        sources: "None provided. [Page: ]",
      },
      storageLocation: {
        query: "Where is data stored?",
        query_response:
          "For the first question, the state/country's law that governs the interpretation of the contract is English law (SOURCE: 28-pl). For the second question, there is no mention of Michael Jackson in the given content (SOURCE: N/A). For the third question, data is stored securely in iRobot's cloud for storage and is not stored on the mobile device (SOURCE: IoT-Project/Roomba/Data Security | iRobot.pdf).",
        sources: "",
      },
      storageDuration: {
        query: "How long is data stored?",
        query_response:
          "The length of time that personal information is stored varies based on the purposes set out in Annex 2 and in accordance with legal obligations and legitimate business interests. Data held by iRobot will only be used consistent with the relevant and applicable legal requirements of the country in which the personal information is collected. The data collected from iRobot products is encrypted both in transit and at rest, and data access is controlled strictly and limited only to authorized personnel to do their job and help improve product experiences. The Roomba 900 Series, i Series, j series, s Series Robot Vacuums and the Braava jet m Series Robot Mop build a map of a home as they clean, and Clean Map reports make these maps visible to customers in the iRobot HOME App after a cleaning job is complete, showing total area and duration a Roomba 900 Series, i Series, j series, or s Series vacuum cleaned—for up to 30 cleaning jobs. If a customer chooses to send map data to the Cloud, Dirt Detect events are stored in the Cloud and sent to the App when the Clean Map is rendered. Customers with Wi-Fi connected Robot Vacuums and Robot Mops are not required to connect to the Cloud to use their robot. The robot can be used in offline mode with no connection to the internet or Cloud. Customers with Wi-Fi connected Robot vacuums and Robot Mops who do not connect them to the internet will not be able to access certain features, like scheduled cleanings, customized cleaning features, Clean Map reports, and connections to voice control systems like Amazon Alexa and Google Assistant. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      vulnerabilities: {
        query:
          "Are there any known vulneranbilites associated with any of the devices listed in the CVE database? If yes then list the devices and their vulnerabilities.",
        query_response:
          "There is no information provided in the given content about any known vulnerabilities associated with the devices listed in the CVE database.",
        sources: "N/A [Page: ]",
      },
      securityUpdates: {
        query: "How long are security updates provided for the devices?",
        query_response:
          "The document does not provide a clear answer to the question of how long security updates are provided for the devices. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      passwordComplexity: {
        query:
          "Are their any password complexity requirements for the account used to use the device? If yes then what are they?",
        query_response:
          "There is no information provided about password complexity requirements for the account used to use the device.",
        sources: "N/A [Page: ]",
      },
    },
    privacyCompliance: {
      complianceAudits: {
        query:
          "Do the devices and their parent company undergo regular industry standard compliance audits with respect to privacy and security?",
        query_response:
          'iRobot has implemented many privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. They also have a Data Privacy Policy and a Data Security Policy. However, the article also highlights the gap between how companies talk about privacy and how consumers understand it, and the vague language in privacy policies that permit companies to use data for the purposes of "improving products and services." It is unclear if iRobot undergoes regular industry standard compliance audits with respect to privacy and security. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      defaultPrivacy: {
        query:
          "What are the default privacy controls for data collected by the device? Does it have data collection enabled by default?",
        query_response:
          "For the iRobot Roomba, the privacy policy states that data collection is enabled by default, but users can opt-out of specific features that require opt-in. iRobot does not sell customer data and has implemented privacy and security measures in its devices, including encryption, regular security vulnerability patching, and limiting employee access to information. The Roomba collects mapping and navigation information via VSLAM, and usage data can be sent to the cloud to be shown on the customer's mobile device. Images used for navigation are not sent to the cloud. However, there is a gap between how companies talk about privacy and how consumers understand it, and privacy policies often contain broad language permitting the use of data for improving products and services. It is also important to note that manufacturers recognize the privacy risks presented by on-device cameras and must prioritize privacy and security. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      calOPPA: {
        query:
          "Do any of the devices comply with the California Online Privacy Protection Act (CalOPPA)?",
        query_response:
          "Based on the information provided, it is unclear whether any of the devices comply with the California Online Privacy Protection Act (CalOPPA). The privacy policies mention compliance with the California Consumer Privacy Act (CCPA) but do not specifically mention CalOPPA. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      coppa: {
        query:
          "Do any of the devices comply with the Children's Online Privacy Protection Act (COPPA)?",
        query_response:
          "It is unclear whether any of the devices comply with the Children's Online Privacy Protection Act (COPPA) based on the provided content. ",
        sources: "None provided. [Page: ]",
      },
      ferpa: {
        query:
          "Do any of the devices comply with the Family Educational Rights and Privacy Act (FERPA)?",
        query_response:
          "There is no clear information provided about whether any of the devices comply with the Family Educational Rights and Privacy Act (FERPA).",
        sources: "N/A [Page: ]",
      },
      gdpr: {
        query:
          "Do any of the devices comply with the General Data Protection Regulation (GDPR)?",
        query_response:
          "It is unclear whether any of the devices comply with the General Data Protection Regulation (GDPR) as there is no mention of GDPR compliance in the provided content. ",
        sources: "None provided. [Page: ]",
      },
      policyVersion: {
        query: "What is the version or effective date of the privacy policy?",
        query_response:
          "The version or effective date of the privacy policy is May 25, 2018.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0,1.0]",
      },
      policyChangeLog: {
        query: "Do privacy policies indicate a change log?",
        query_response:
          "It is possible for privacy policies to indicate a change log, but it is not a requirement. The reviewed privacy policies did not mention a change log. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyUpdateNotification: {
        query: "Are users notified when the privacy policies are updated?",
        query_response:
          "It depends on the company. Some companies, such as iRobot, mention updates to their privacy policy in their policy document, but it is not a requirement. It is important for users to regularly check the privacy policies of the companies they interact with to stay informed of any changes. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyCoverage: {
        query: "Do privacy policies indicate which products are covered?",
        query_response:
          "The privacy policies do not explicitly indicate which products are covered, but they do outline the company's approach to data privacy and security. The iRobot privacy policy specifically mentions their commitment to safeguarding the privacy of customer-related information, including data collected by their connected products. They also state that they do not sell information about their customers to third parties and have implemented privacy- and security-protecting measures in their customer devices. The HR privacy policy outlines how iRobot collects, stores, processes, transfers, shares, and uses personal information of their employees, but does not mention specific products. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyContact: {
        query:
          "How can users contact the company about privacy policy questions, complaints, or material changes?",
        query_response:
          'Users can contact the company about privacy policy questions, complaints, or material changes by contacting them at global.irobot.com or by writing to them at iRobot Corporation 8 Crosby Drive Bedford, MA 01730. They can also contact the company if they have an unresolved privacy or data use concern that has not been addressed satisfactorily by using the U.S.-based third party dispute resolution provider at https://feedback-form.truste.com/watchdog/request. California residents can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes by writing to iRobot Corporation 8 Crosby Drive Bedford, MA 01730 or by sending an email to global.irobot.com with the words "California Privacy Rights" in the subject line. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      policyPrinciples: {
        query: "Do privacy policies indicate privacy principles?",
        query_response:
          'Privacy policies may contain information about how companies collect, store, process, transfer, share, and use personal information, but they may not necessarily indicate privacy principles. Privacy policies shape companies\' legal responsibilities, but there is a wide gap between the way companies talk about privacy and the way consumers understand it. Privacy policies often contain language permitting the use of data for the purposes of "improving products and services," which is broad enough to permit basically anything. Companies may use subtle differences, like the distinction between "sharing" data and selling it, that make how they handle privacy particularly hard for non-experts to parse. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyLanguages: {
        query:
          "Are privacy policies available in multiple languages? List the languages the privacy policy is available in",
        query_response:
          "It is not specified in the provided content whether the privacy policy is available in multiple languages.",
        sources: "N/A [Page: ]",
      },
      prohibitedActivities: {
        query:
          "Are there any prohibited activities that may lead to account termination?",
        query_response:
          "Yes, there are prohibited activities that may lead to account termination, including but not limited to defaming, abusing, harassing, stalking, or threatening others, promoting or facilitating unlawful online gambling or disruptive commercial messages or advertisements, and using the APIs for activities where the use or failure of the APIs could lead to death, personal injury, or environmental damage. The Terms also state that Google reserves the right to terminate the Terms with the user or discontinue the APIs or any portion or feature or the user's access thereto for any reason and at any time without liability or other obligation to the user. ",
        sources:
          "IoT-Project/Roomba/Code of Business Conduct and Ethics (2021).pdf [Page: 12.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0,95.0,99.0]",
      },
      classActionWaiver: {
        query:
          "Are users required to waive the right to join a class-action lawsuit?",
        query_response:
          "Yes, users are required to waive the right to join a class-action lawsuit.",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      internationalData: {
        query:
          "Are user data subject to international data transfer or jurisdiction laws?",
        query_response:
          "User data may be subject to international data transfer or jurisdiction laws, and may be accessible to law enforcement and regulatory authorities in accordance with the laws of other jurisdictions. The specific laws governing international data transfer or jurisdiction are not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    intendedUsers: {
      children: {
        query: "Is the device intended for use by children under 13?",
        query_response:
          "The device can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      teens: {
        query: "Is the device intended for use by teens?",
        query_response:
          "The device is intended for use by children aged from 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/H1 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      adults: {
        query: "Is the device intended for use by adults over 18?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. However, it is not specified whether the devices are intended for use by adults over 18.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      parents: {
        query:
          "Is the device intended for use under parent or guardian supervision?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory, or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0]",
      },
    },
  },
  {
    name: "Echo-dot",
    brand: "iRobot",
    category: "Vacuum Cleaner",
    image: "https://example.com/path/to/roomba/image.jpg",
    usage: {
      faq: {
        query:
          "Create a list of 5 frequently asked questions about the devices. Also provide responses to these questions.",
        query_response:
          "1. How do I activate the battery of my Roomba® robot vacuum?\nA: Place the robot on the Home Base to activate the battery. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n2. How can I pair my Roomba® robot vacuum with other smart devices?\nA: You can find tricks and answers to commonly asked questions, including how to pair your Roomba® robot vacuum with other smart devices in the owner's guide. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n3. Where can I find information about scheduling Roomba?\nA: You can find information about scheduling Roomba in the owner's manual. (IoT-Project/Roomba/500 Owner's Manual.pdf)\n\n4. How does Braava clean?\nA: You can find information about how Braava cleans in the owner's manual. (IoT-Project/Roomba/300 Series Owner’s Manual.pdf)\n\n5. Where can I find a quick start guide for the 300 Series Roomba?\nA: You can find a quick start guide for the 300 Series Roomba on global.irobot.com. (IoT-Project/Roomba/300 Series Quick Start Guide.pdf)",
        sources:
          "IoT-Project/Roomba/e6 Owner’s Guide.pdf [Page: 5.0], IoT-Project/Roomba/500 Owner's Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Owner’s Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Quick Start Guide.pdf [Page: 0.0]",
      },
      pii: {
        query: "Does the device collect personally identifiable information?",
        query_response:
          "The device collects personal information, including information about the Robot and/or App usage, device data, and Robot customization settings and preferences. However, some personal information is stored separately from deidentified Robot data, and users can control the collection of usage data by disconnecting their Robot from Wi-Fi or Bluetooth via the App. The specific mention of personally identifiable information is not found in the given content. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      camera: {
        query: "Does the device have a camera?",
        query_response:
          "Some robot vacuums have front-facing cameras for navigation and object recognition, as well as home monitoring. iRobot, Ecovacs, and Roborock are among the companies that have incorporated cameras into their devices. However, it is unclear if the specific device in question has a camera as it is not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], WebAPI- Privacy Policy | iRobot.pdf [Page: ]",
      },
      microphone: {
        query:
          "Do any of the devices have a microphone? If yes then list these devices and what they use the microphone for.",
        query_response:
          "The Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops create home mapping data and capture mapping and navigation information via VSLAM, which stays on the robot. Some usage data is sent to the Cloud, but the robot does not send images used for navigation to the Cloud. If a user agrees to have their map data viewable on their mobile device, then the map that the robot creates during a cleaning job is sent to the Cloud, where it is processed and simplified to produce a user-friendly map that ultimately appears in the iRobot HOME App. iRobot will not sell customer data and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. In the short term, the Roomba is already linked to both Google Assistant and Amazon Alexa, so that customers can control their robot with voice commands. iRobot believes robots and the mapping capabilities they provide will be vital in enabling the smart home. SOURCE: IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf, IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf",
        sources: "",
      },
      name: {
        query: "Does the device collect user name?",
        query_response:
          "It is unclear whether the device collects user name. No information was found in the provided content that directly answers the question.",
        sources: "N/A [Page: ]",
      },
      email: {
        query:
          "Does the device require the user to provide an email to create and account or register the device online? If yes then what is the email used for?",
        query_response:
          "Yes, the device requires the user to provide an email to create an account or register the device online. The email is used for account verification, to communicate directly with the user, to send information about orders, product sales, special offers, and new site features, and to send service-related emails or notifications. The email is also necessary for the performance of a contract between the user and iRobot. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Email account verification update | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      age: {
        query: "Does the device collect user age?",
        query_response:
          "It is unclear whether the device collects user age as there is no mention of age in the provided content. ",
        sources: "N/A [Page: ]",
      },
      phone: {
        query:
          "Does the device require the user to provide a phone number to create and account or register the device online? If yes then what is the phone number used for?",
        query_response:
          "The documents do not provide a clear answer to whether the device requires the user to provide a phone number to create an account or register the device online. There is no information about what the phone number would be used for. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0]",
      },
      geolocation: {
        query: "Does the device collect geolocation data?",
        query_response:
          "The device may collect geolocation data if the user agrees to have their map data viewable on their mobile device and if they connect to WiFi, Bluetooth, or the internet. However, the location mapping data is considered sensitive and confidential information and is not shared with third parties for marketing purposes. The data collected is encrypted and stored securely, and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. The iRobot Home app may collect approximate location data, app interactions, personal information such as name and email address, and app info and performance data such as crash logs and diagnostics. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      biometric: {
        query:
          "Do any of the devices collect any form of biometric data like face recognition scans, fingerprints, etc? If yes then specify which device does it and what does it use the biometric data for.",
        query_response:
          "None of the devices collect biometric data like face recognition scans or fingerprints. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ipAddress: {
        query: "Does any of the device collect user ipAddress?",
        query_response: "Yes, the device collects user ipAddress. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      socialAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to social media accounts? If yes then list the social media accounts that can be connected.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow you to connect to social media accounts. The privacy policies mention receiving personal information if users interact with their accounts on social networks, but do not specify which social media accounts can be connected. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      thirdPartyAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to any other third part accounts? If yes then list the third party accounts that can be connected.",
        query_response:
          "Yes, some third party services can collect information from the iRobot devices and companion apps, such as Amazon Alexa and Google Assistant. Other third parties that may receive personal information include social networks and third party vendors/service providers. However, the specific third party accounts that can be connected are not listed in the extracted content. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      voiceRecordings: {
        query:
          "Do any of the devices collect voice recordings? If yes then list the devices that collect voice recordings and what they use the voice recordings for.",
        query_response:
          'Yes, some of the devices collect voice recordings. The Samsung Jet Bot AI+ Robot Vacuum and Powerbot R7070 collect "recordings of your voice when you use voice commands to control a Service" (MIT Technology Review). The iRobot Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops also collect voice recordings when users share images via the mobile app (iRobot). It is unclear what these companies use the voice recordings for. ',
        sources: "MIT Technology Review [Page: ], iRobot [Page: ]",
      },
      videoRecordings: {
        query:
          "Do any of the devices collect video recordings? If yes then list the devices that collect video recordings and what they use the video recordings for.",
        query_response:
          "Yes, some of the devices collect video recordings. The iRobot Roomba J7 series and some models from LG and Samsung have cameras that collect video recordings for the purpose of training algorithms to recognize patterns and improve the robot's cleaning performance. The collected data is also used to build smarter robots whose purpose may go beyond vacuuming in the future. The iRobot Beta Program also collects and processes video recordings for testing new features and functionalities of the service. Consent is required for the collection of video recordings, and users have the option to opt-in or opt-out. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      roomMapping: {
        query:
          "Do any of the devices create a map of the room? If yes then list the devices that create a map of the room and what they use the map for.",
        query_response:
          'Yes, some of the devices create a map of the room. The devices that create a map of the room are Roomba e5, e6, 89x, 69x, 67x, 96x, i3/i1, i6, i7, i8, and s9. The map is used to determine the best way to clean based on the orientation of each room, furniture placement, etc. The Imprint Smart Maps also enable the user to clean or select a single room, multiple rooms, or an entire level of the floor all from the iRobot Home App. The user can also set up specific zones to clean. The technology which allows iRobot products to create a map is called vSLAM (visual Simultaneous Localization and Mapping). The robot looks for unique "landmarks" in the home and remembers where those landmarks are. Landmarks may be corners of a picture frame or window, a ceiling fan or recessed light, or similar feature on the wall or ceiling.',
        sources: "",
      },
      interactions: {
        query:
          "Do any of the devices collect user interactions with the device? If yes then list the devices that collect user interactions and what they use the interactions for.",
        query_response:
          "Yes, some of the devices collect user interactions with the device. The Roomba Robots equipped with smart technology collect information about the Robot and/or App usage, feature usage, in-App transactions, technical specifications, crashes, and other information about how you use your Robot and the product App. Additionally, the Robot collects information about its movement throughout the environment to create a location ‘map’ of the space accessible to the Robot. However, it is not specified what they use the interactions for.",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      behaviors: {
        query:
          "Do any of the device collect the users behavioral patterns? If yes then list the devices that collect behavioral patterns and what they use the patterns for.",
        query_response:
          "Yes, some of the devices collect users' behavioral patterns. The devices that collect behavioral patterns include iRobot Roomba and the information collected is used for enhancing and personalizing the user experience, carrying out interest-based advertising and marketing, monitoring and improving the website and service, and for other internal purposes. The specific types of information collected and the purposes for which they are used vary depending on the device and the features used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      analytics: {
        query:
          "Do any of the devices collect analytics data? If yes then list the devices that collect analytics data and what they use the data for.",
        query_response:
          "The iRobot Roomba devices and their associated apps collect usage and device information, including analytics data, which is used for various purposes such as improving the service and personalizing advertising. The iRobot SDK also collects data on which tools and services are being used and how they are being used, but this data is examined in the aggregate to improve the SDK and is maintained in accordance with Google's Privacy Policy. The iRobot Privacy Policy and Android App Copyright Licenses provide more details on the types of information collected and how it is used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      contactSync: {
        query:
          "Do any of the devices or their companion apps allow you to sync your contacts? If yes then list the devices that allow you to sync your contacts and what they use the contacts for.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow syncing of contacts and what they use the contacts for. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
    },
    connectivity: {
      cellular: {
        query: "Do any of the devices support/require cellular connectivity?",
        query_response:
          "The Roomba and Braava models listed in the document support/require Wi-Fi connectivity, but there is no mention of cellular connectivity. ",
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home on the App Store.pdf [Page: ]",
      },
      wifi: {
        query: "Do any of the devices support/require Wi-Fi connectivity?",
        query_response:
          'Some of the devices support/require Wi-Fi connectivity, while others do not. Please refer to the compatibility chart provided in the "Setting up your Wi-Fi Connected Robot with the iRobot HOME App" document to determine if your device supports Wi-Fi connectivity. ',
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0]",
      },
      bluetooth: {
        query: "Do any of the devices support/require Bluetooth connectivity?",
        query_response:
          "Yes, some of the devices support/require Bluetooth connectivity. The iRobot® HOME App uses Bluetooth to set up and connect the robot to the device, and the Braava jet™ 240 mopping robot uses Bluetooth Low Energy (BLE) built into most common mobile devices. ",
        sources:
          "IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0]",
      },
    },
    sharing: {
      thirdParty: {
        query:
          "Do any of the devices share/rent data with third parties? If yes then list the third parties that the devices share/rent data with and what kind of data do they share/rent.",
        query_response:
          "Yes, some of the devices share/rent data with third parties. The third parties that the devices share/rent data with include other companies owned by or under common ownership as iRobot, third party vendors, affiliates, and other service providers that perform services on iRobot's behalf, selected third parties who iRobot thinks may offer customers products or services they may enjoy, and third parties in connection with any company transaction. The kind of data that is shared/rented includes personal information, Wi-Fi connected robot performance data, and aggregated performance data about iRobot's robots. iRobot is committed to safeguarding the privacy of customer-related information and does not sell information about its customers to third parties. However, customers can choose to share data with third parties for their benefit if they so choose. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      categories: {
        query:
          "What type of information shared with third parties? List the categories of information shared with third parties.",
        query_response:
          "The categories of information shared with third parties include personal information for business purposes, aggregated and anonymous information, and information shared with third parties at the request of the user. Specific categories of personal information shared with third parties include information for targeted advertising, e-commerce services, content or service fulfillment, billing, website operation, payment processing and authorization, customer service, fraud prevention, web hosting, data storage, analytics services, and third-party app or service integration. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      purpose: {
        query:
          "What is the purpose of data sharing? Eg: research and/or product improvement",
        query_response:
          "The purpose of data sharing varies depending on the context. iRobot is committed to the absolute privacy of customer-related data, including data collected by their connected products, and will not sell customer data or share it with third parties without the customer's knowledge or control. Google supports data portability and prohibits certain actions with content returned from their APIs, including scraping, modifying, selling, and sublicensing to third parties. The terms of data sharing are dependent on the specific agreement or policy in place. ",
        sources:
          "IoT-Project/Roomba/Software Licenses | iRobot.pdf [Page: 528.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0]",
      },
      anonymized: {
        query: "Is the shared data anonymized?",
        query_response:
          "The data collected by iRobot's connected products is not anonymized, but it is encrypted and stored securely. However, customers can choose to share limited data to enable voice control of the robot using Amazon Alexa or Google Assistant. Customers can also decline to have their data shared, and iRobot will delete the data from their servers at the request of a customer. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      samePrivacy: {
        query: "Do third parties follow the same privacy practices?",
        query_response:
          "It depends on the specific third party and their relationship with iRobot. Some third parties may follow the same privacy practices, while others may have different practices. iRobot shares personal information with third parties in various instances, including for business purposes and to serve targeted advertisements based on online browsing history and interests. However, iRobot allows California residents to exercise certain rights, such as the right to know what personal information has been collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales. The lack of a comprehensive data privacy law in the United States means that privacy policies shape companies' legal responsibilities, and some policies may reserve the right to share data with select partners or service providers. The legal barriers for companies to collect data directly from consumers are fairly low, and most privacy policies do not even mention the audiovisual data being captured. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      contractLimits: {
        query: "Are there contractual limits on data usage by third parties?",
        query_response:
          'There are contractual limits on data usage by third parties, but the specifics depend on the individual agreements and policies of each company. Google\'s Privacy Policy states that data collected by their SDK is examined in the aggregate to improve the SDK and is maintained in accordance with their policy. The iRobot Privacy Policy states that they allow certain third-party advertising partners to collect information about users of their service for the purposes of serving more relevant ads, but all cookies that are not strictly necessary require prior opt-in consent from California consumers and do not involve "sales" of personal information. The iRobot Terms of Use Agreement also includes provisions for indemnification and limitations of liability for misuse of their APIs. However, the specifics of any contractual limits on data usage by third parties may vary depending on the company and the agreements in place. ',
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0,100.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      notification: {
        query:
          "Is the user notified in any form if their data is shared with third parties be it manually or automatically?",
        query_response:
          'Yes, the user is notified in some form if their data is shared with third parties, either manually or automatically. The Privacy Policy states that "No data will be shared with third parties without the customer\'s knowledge or control" and "All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers." Additionally, the policy outlines the right to know about personal information collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales to third parties. However, the policy also states that aggregated and anonymous information may be shared with others in a form that does not reasonably identify the user directly as an individual. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      reidentifying: {
        query:
          "Does the company actively take steps to prevent the identifying a specific user from the data they provide to third parties?",
        query_response:
          "The company does not sell customer data and takes steps to protect user information collected by API clients, including personally identifiable information, from unauthorized access or use. The company allows certain third-party advertising partners to collect information about users of the service for the purposes of serving ads that are more relevant, for ad campaign measurement and analytics, and for fraud detection and reporting. All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers, are loaded per the consumer’s instructions and preferences, and do not involve “sales” of personal information. The company complies with all applicable privacy laws and regulations including those applying to PII and provides and adheres to a privacy policy for API clients that clearly and accurately describes to users of the API client what user information is collected and how it is used and shared with Google and third parties. The company will not share data with third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties. If a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. Deleting the data is retroactive. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 94.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      transfer: {
        query:
          "Would the user information be transferred to another company in merger, acquisition, or bankruptcy?",
        query_response:
          "User information may be transferred to another company in a merger, acquisition, or bankruptcy, as well as in connection with any company transaction, such as a sale of all or a portion of company assets or shares, reorganization, financing, change of control or acquisition of all or a portion of the business by another company or third party, or in the event of bankruptcy or related or similar proceedings. User information may also be shared with third parties as required by law or to protect against harm to the rights, property, or safety of iRobot, its users, or the public. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    social: {
      verifiedUsers: {
        query: "Does the device support verified user accounts?",
        query_response:
          "There is no information provided about whether the device supports verified user accounts. ",
        sources: "N/A [Page: ]",
      },
      publicDisplay: {
        query: "Is the user's collected data publicly displayed in any form?",
        query_response:
          "The user's collected data may be publicly displayed on their mobile device if they agree to it, but it is not sold to third parties and cannot be shared without the customer's knowledge or control. Clean Map Reports are not shared with third parties. The data collected via the robot is not anonymized, but it is encrypted and stored securely. iRobot will delete the data from their servers at the request of a customer. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      moderated: {
        query:
          "Are user interactions with the device moderated in any form? Eg: content moderation",
        query_response:
          "For the first question, the contract is governed by English law. For the second question, there is no information provided about user interactions with the device being moderated or content moderation. For the third question, the president did not mention Michael Jackson. ",
        sources:
          "28-pl [Page: ], 0-pl [Page: ], 24-pl [Page: ], IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0]",
      },
      externalLinks: {
        query:
          "Do any of the devices display links to external websites or services either in their user interface or companion app?",
        query_response:
          "It is unclear whether any of the devices display links to external websites or services either in their user interface or companion app. The first source mentions links to third party websites, but it is not specified whether they are displayed in the user interface or companion app. The second source does not mention anything about links. The third source discusses data collection and usage from registered devices equipped with smart technology, but does not mention links. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      deleteFromThirdParty: {
        query:
          "Does the company allow for data which is collected by or shared with third parties to be deleted from the third parties?",
        query_response:
          "It is unclear whether the company allows for data which is collected by or shared with third parties to be deleted from the third parties. However, iRobot is committed to the absolute privacy of customer-related data, and no data is sold to third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties, and if a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. The company also allows California residents to exercise their rights to know, request deletion, and opt-out of personal information sales to third parties. iRobot does share personal information with third parties in certain instances, such as with other companies owned by or under common ownership as iRobot, third-party vendors and service providers, and at the request of the customer. The company may also share information with others in an aggregated and anonymous form that cannot reasonably identify the individual. However, the company may share personal information with law enforcement, regulators, and other parties for legal reasons. It is important to note that iRobot does not control the data collection and use practices of third-party apps and services that interact with their robots. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    tracking: {
      targetAds: {
        query: "Does the device track the users for targeted ads?",
        query_response:
          "The device tracks users for targeted ads using cookies and other tracking technologies, but users can control their advertising preferences or opt-out of certain advertising products. The use of cookies and tracking technologies may negatively impact the user's experience on the service. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      profiles: {
        query:
          "Do any of the devices or their companion app maintain a profile of the user which includes all the data collected about the user?",
        query_response:
          "Based on the extracted parts of the documents, it appears that some of the devices and their companion app collect personal information about the user, including data about their device usage, location, and preferences. However, it is unclear whether any of these devices or apps maintain a profile of the user which includes all the data collected about them. It is recommended to review the privacy policies and terms of service for each specific device and app to determine how user data is handled and stored. ",
        sources:
          "IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      filtered: {
        query: "Can ads be filtered?",
        query_response:
          "Yes, ads can be filtered and users have control over their advertising preferences and can opt-out of certain advertising products. Users can also manage their cookie settings to control the collection of information. However, some features and services on the website may not work properly if cookies are disabled. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      doNotTrack: {
        query: "Can users opt-out of ads? Eg: Do not Track mechanism",
        query_response:
          "Users can opt-out of ads through various mechanisms such as the Digital Advertising Alliance (DAA)’s self-regulatory opt-out page, European Interactive Digital Advertising Alliance (EDAA)’s consumer opt-out page, and Network Advertising Initiative (NAI)’s self-regulatory opt-out page. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The iRobot website also allows users to manage their advertising preferences and opt-out of certain Google advertising products. Additionally, users can limit certain interest-based mobile advertising through the settings on their mobile device. The iRobot website also provides information on how to manage and delete cookies. However, the website is unable to respond to Do Not Track signals set by the user's browser at this time. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    controls: {
      createContent: {
        query:
          "Do any of the devices allow users to use it as a medium for content creation? If yes then list the devices that allow users to create content and what kind of content can be created using them.",
        query_response:
          "The documents do not provide information about devices that allow users to create content. ",
        sources:
          "IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ownership: {
        query:
          "Do users retain ownership of their content they create using the device?",
        query_response:
          "The answer cannot be determined from the given content. There is no clear mention of a device or ownership of content created using a device. ",
        sources: "N/A [Page: ]",
      },
      access: {
        query:
          "Can users access their data which the device has collected from them?",
        query_response:
          "Users can choose to share their data with third-parties for their benefit, but no data is sold to third-parties without the customer's knowledge or control. iRobot will delete the data from their servers at the request of a customer. Roomba consumers can decline to have their data shared and can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via the robot is not anonymized, but it is encrypted and stored securely. However, the content does not provide a clear answer to whether users can access their data which the device has collected from them. The other content pieces are not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      dataModify: {
        query:
          "Can users modify their data which the device has collected from them?",
        query_response:
          "Users can decline to have their data shared with their mobile device, and they can also opt-out of sending map data to the Cloud through a switch in the mobile app. However, the content does not provide information on whether users can modify their data which the device has collected from them. The other content is not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      retention: {
        query:
          "What is the data retention policy for the data collected by the device from the user?",
        query_response:
          "There is no clear answer about the data retention policy for the data collected by the device from the user. The available information only mentions data collection and sharing practices, as well as security measures. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      dataDelete: {
        query:
          "Can users delete the data which the device has collected from them if they want to?",
        query_response:
          "Yes, Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app, and iRobot® will delete the data from their servers at the request of a customer. Clean Map™ Reports are not shared with third parties. No data is sold to third parties, and no data will be shared with third parties without the customer's knowledge or control. However, the content does not mention whether users can delete the data which the device has collected from them if they want to. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], and A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: ]",
      },
      termination: {
        query:
          "Is user data deleted upon account cancellation or termination of their account?",
        query_response:
          "The documents do not provide a clear answer to whether user data is deleted upon account cancellation or termination of their account. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 33.0,99.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      restrictAccess: {
        query: "Can users restrict access to their data?",
        query_response:
          "Users must protect the privacy and legal rights of those users and provide legally adequate privacy notice and protection for those users. If an application stores personal or sensitive information provided by users, it must do so securely. Users must comply with all applicable privacy laws and regulations including those applying to personally identifiable information (PII) and provide and adhere to a privacy policy for their API Client that clearly and accurately describes to users of their API Client what user information they collect and how they use and share such information (including for advertising) with Google and third parties. Users may not sublicense an API for use by a third party or create an API Client that functions substantially the same as the APIs and offer it for use by third parties. Users may not perform an action with the intent of introducing to Google products and must ensure that they have the necessary rights (including the necessary rights from their end users) to grant Google the license. When a user's non-public content is obtained through the APIs, users may not retrieve it. Companies must implement privacy- and security-protecting measures in their customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that they collect. However, there is a wide gap between the way companies talk about privacy and the way consumers understand it. It is easy to conflate privacy with security, but data security refers to a product’s physical and cyber security, or how vulnerable it is to a hack or intrusion, while data privacy is about transparency—knowing and being able to control the data that companies have, how it is used, why it is shared, whether and for how long it’s retained, and how much a company is collecting to start with. Company representatives sometimes use subtle differences, like the distinction between “sharing” data and selling it, that make how they handle privacy particularly hard for non-experts to parse. When a company says it will never sell a user's data, that does not mean it will not use it or share it with others for analysis. Developers are not traditionally very good at security and privacy, and their attitude becomes \"Try to get the functionality, and if the functionality is working, ship the product. And then the scandals come out.\" ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,94.0,96.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      download: {
        query:
          "Can users download the data which the device has collected from them?",
        query_response:
          "Roomba® consumers can decline to have their data shared. Customers need not connect a Wi-Fi connected Roomba® to the internet for it to work - it can work in offline mode with no internet or Cloud connectivity. Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via my robot is not anonymized, but it is encrypted and stored securely. iRobot® will delete the data from their servers at the request of a customer. However, there is no information about whether users can download the data which the device has collected from them. The Android App Copyright Licenses state that if you use any API to retrieve data from Google, you acknowledge that the data may be protected by intellectual property rights which are owned by Google or those parties that provide the data (or by other persons or companies on their behalf). Your use of any such API may be subject to additional Terms of Service. You may not modify, rent, lease, loan, sell, distribute or create derivative works based on this data (either in whole or in part) unless allowed by the Terms of Service. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      privacySettings: {
        query:
          "Are there privacy settings available? If yes then list what kind of privacy settings are available and their purpose",
        query_response:
          "Yes, there are privacy settings available. Users can set their email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether the user has accessed their email and performed certain functions with it. Users can also opt-out of interest-based advertising by participating companies through various consumer choice mechanisms. The company honors the privacy preferences of its users but is unable to respond to Do Not Track signals set by the user's browser at this time. The company collects various types of personal information, and users can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes. The company's privacy policy also includes information on data collection, sharing, and security practices. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      limitedUse: {
        query: "Can users limit the use of their data?",
        query_response:
          "Users can limit the use of their data by withholding consent for data collection or opting out of sharing data with their mobile device. They can also set email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether they have accessed the email and performed certain functions with it. Additionally, users can opt-out of interest-based advertising through various consumer choice mechanisms. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The company is unable to respond to Do Not Track signals set by the browser at this time. For mobile users, there are controls in the device Operating System that enable them to choose whether to allow cookies or share their advertising ID with companies like iRobot or their advertising service providers. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,32.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combineThirdParty: {
        query:
          "Is data combined with data from other third-parties? This may be done for purposes such as analytics, advertising, etc.",
        query_response:
          "Yes, data may be combined with data from other third-parties for purposes such as analytics and advertising. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combinedPii: {
        query:
          "Is personally identifiable information combined with other data? If yes then how is this combined data used and treated?",
        query_response:
          "Yes, personally identifiable information may be combined with other data. If combined, the information will be treated as personal information. The combined data is used for various purposes such as enhancing and personalizing user experience, interest-based advertising and marketing, monitoring and improving the website and service, and developing new products and features. The specific use and treatment of combined data may vary depending on the type of information being combined. ",
        sources: "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    consent: {
      change: {
        query: "Can users change their consent?",
        query_response:
          "It is unclear whether users can change their consent based on the given content. ",
        sources: "N/A [Page: ]",
      },
      grievance: {
        query: "Is there a grievance redressal mechanism?",
        query_response:
          "There is a grievance redressal mechanism through arbitration. ",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      legalRequest: {
        query:
          "Does the company have a procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity?",
        query_response:
          "It is unclear whether the company has a specific procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity as the provided content does not directly address this question. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 1.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      optIn: {
        query:
          "Can users opt-in to sharing their data with the company and/or third parties?",
        query_response:
          "It depends on the specific context and service. In general, users may be able to opt-in to sharing their data with the company and/or third parties, but this may require prior, opt-in consent and may vary depending on the specific service and location of the user. iRobot states that they do not sell customer data and are committed to the privacy of their customer-related data, but they may share personal information with other companies owned by or under common ownership as iRobot, third party vendors and service providers, and selected third parties who may offer products or services that users may enjoy. Users may also have the right to request deletion of personal information and opt-out of personal information sales to third parties. However, iRobot is unable to respond to Do Not Track signals set by users' browsers at this time. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      optOut: {
        query:
          "Can users opt-out of sharing their data with the company and/or third parties?",
        query_response:
          'Yes, users can opt-out of sharing their data with the company and/or third parties. Users can disable cookies or set their browser to automatically reject cookies, and can control their communication preferences through the "My Account" page on the website or app. Additionally, iRobot does not sell personal information. For California residents, they have the right to know what personal information has been collected and disclosed, request deletion of personal information, and opt-out of personal information sales to third parties. Sources: IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf, IoT-Project/Roomba/Privacy Policy | iRobot.pdf.',
        sources: "",
      },
      copyright: {
        query: "How are copyright claims to user data handled?",
        query_response:
          "The handling of copyright claims to user data is addressed in the terms and conditions of the APIs and software licenses, including provisions for data portability, prohibitions on certain uses of content, and liability limitations. The specific handling of copyright claims may vary depending on the applicable laws and agreements. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 77.0,96.0,97.0], IoT-Project/Roomba/Copyright Licenses | iRobot.pdf [Page: 570.0]",
      },
      legacy: {
        query:
          "Can users assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death?",
        query_response:
          "There is no information provided about whether users can assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death.",
        sources: "N/A [Page: ]",
      },
      parental: {
        query:
          "Is parental consent required before children's data is collected or disclosed?",
        query_response:
          "Yes, parental consent is required before children's data is collected or disclosed. The Services are not directed to persons under 13 and iRobot does not intentionally collect or maintain information from persons under 13. If personal information about a person under 16 has been provided to iRobot, they request immediate contact. Source: IoT-Project/Roomba/Privacy Policy | iRobot.pdf",
        sources: "",
      },
    },
    security: {
      identity: {
        query:
          "Does the device or company verify the identity of their using using official documents?",
        query_response:
          "There is no clear answer to the question of whether the device or company verifies the identity of their users using official documents. The provided content discusses topics such as software security, registration, compliance with laws and regulations, and privacy protection, but does not directly address the verification of identity using official documents. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,86.0,92.0]",
      },
      accountCreation: {
        query:
          "Does the user need to create an account with the company in order to use the device? If any device can be used without creating an account then list them.",
        query_response:
          "It is unclear whether the user needs to create an account with the company in order to use the device. No information is provided about devices that can be used without creating an account.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      managedAccounts: {
        query:
          "Does the company or device support managed accounts i.e. accounts which are managed by a parent or guardian?",
        query_response:
          "The provided documents do not contain information about whether the company or device supports managed accounts. ",
        sources: "N/A [Page: ]",
      },
      multiFactor: {
        query:
          "Does the accoiunt created by the user with the company to use the device support multi-factor authentication?",
        query_response:
          "The provided documents do not contain information about whether the account created by the user with the company to use the device supports multi-factor authentication.",
        sources: "N/A [Page: ]",
      },
      employeeAccess: {
        query:
          "Do the company employees have access to the data collected by the device from the user? If yes then what kind of access do they have?",
        query_response:
          "It is unclear from the given content whether or not company employees have access to the data collected by the device from the user and what kind of access they have. However, iRobot has implemented privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. Customers can also choose to opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected by robot vacuums can be particularly invasive, and companies often use vague language in their privacy policies that give them broad discretion in how they disseminate and analyze consumer information. It is important for consumers to understand the distinction between data security and data privacy and to be aware of the data that companies are collecting and how it is being used. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      dataTransit: {
        query: "Is data encrypted in transit?",
        query_response:
          "Yes, data is encrypted both in transit and at rest for iRobot connected products. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      dataStorage: {
        query: "Is data encrypted when stored?",
        query_response:
          "Yes, data is encrypted both in transit and at rest. iRobot takes a defense-in-depth approach to security, adding multiple layers of protection around their robots, cloud, and apps from start to finish. They ensure that the development of their products follows industry-standard security best practices, and they are using technology-leading tools to assist their development and security teams during this process. When deployed to market, they work with their suppliers and partners to ensure that their products and their suppliers' and partners' supporting infrastructure (including physical infrastructure, cloud, and mobile apps) are properly configured, monitored, and continuous security improvement processes are in place. Within iRobot’s cloud (built on top of AWS), customer data is stored encrypted. Customer data has multiple encryption keys which are rotated on a regular basis to reduce the risk of the data being compromised even in the event of a key exposure. Within the mobile application, data storage follows the platform’s standards for application-secure data; any sensitive data that is used by the application is not stored on the mobile device, but is instead securely transported to iRobot’s cloud for storage. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      breachNotice: {
        query:
          "Is there a notice provided to the user if any of the data collected from them is exposed in a data breach?",
        query_response:
          "There is no clear mention of whether a notice is provided to the user if any of the data collected from them is exposed in a data breach.",
        sources: "None provided. [Page: ]",
      },
      storageLocation: {
        query: "Where is data stored?",
        query_response:
          "For the first question, the state/country's law that governs the interpretation of the contract is English law (SOURCE: 28-pl). For the second question, there is no mention of Michael Jackson in the given content (SOURCE: N/A). For the third question, data is stored securely in iRobot's cloud for storage and is not stored on the mobile device (SOURCE: IoT-Project/Roomba/Data Security | iRobot.pdf).",
        sources: "",
      },
      storageDuration: {
        query: "How long is data stored?",
        query_response:
          "The length of time that personal information is stored varies based on the purposes set out in Annex 2 and in accordance with legal obligations and legitimate business interests. Data held by iRobot will only be used consistent with the relevant and applicable legal requirements of the country in which the personal information is collected. The data collected from iRobot products is encrypted both in transit and at rest, and data access is controlled strictly and limited only to authorized personnel to do their job and help improve product experiences. The Roomba 900 Series, i Series, j series, s Series Robot Vacuums and the Braava jet m Series Robot Mop build a map of a home as they clean, and Clean Map reports make these maps visible to customers in the iRobot HOME App after a cleaning job is complete, showing total area and duration a Roomba 900 Series, i Series, j series, or s Series vacuum cleaned—for up to 30 cleaning jobs. If a customer chooses to send map data to the Cloud, Dirt Detect events are stored in the Cloud and sent to the App when the Clean Map is rendered. Customers with Wi-Fi connected Robot Vacuums and Robot Mops are not required to connect to the Cloud to use their robot. The robot can be used in offline mode with no connection to the internet or Cloud. Customers with Wi-Fi connected Robot vacuums and Robot Mops who do not connect them to the internet will not be able to access certain features, like scheduled cleanings, customized cleaning features, Clean Map reports, and connections to voice control systems like Amazon Alexa and Google Assistant. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      vulnerabilities: {
        query:
          "Are there any known vulneranbilites associated with any of the devices listed in the CVE database? If yes then list the devices and their vulnerabilities.",
        query_response:
          "There is no information provided in the given content about any known vulnerabilities associated with the devices listed in the CVE database.",
        sources: "N/A [Page: ]",
      },
      securityUpdates: {
        query: "How long are security updates provided for the devices?",
        query_response:
          "The document does not provide a clear answer to the question of how long security updates are provided for the devices. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      passwordComplexity: {
        query:
          "Are their any password complexity requirements for the account used to use the device? If yes then what are they?",
        query_response:
          "There is no information provided about password complexity requirements for the account used to use the device.",
        sources: "N/A [Page: ]",
      },
    },
    privacyCompliance: {
      complianceAudits: {
        query:
          "Do the devices and their parent company undergo regular industry standard compliance audits with respect to privacy and security?",
        query_response:
          'iRobot has implemented many privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. They also have a Data Privacy Policy and a Data Security Policy. However, the article also highlights the gap between how companies talk about privacy and how consumers understand it, and the vague language in privacy policies that permit companies to use data for the purposes of "improving products and services." It is unclear if iRobot undergoes regular industry standard compliance audits with respect to privacy and security. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      defaultPrivacy: {
        query:
          "What are the default privacy controls for data collected by the device? Does it have data collection enabled by default?",
        query_response:
          "For the iRobot Roomba, the privacy policy states that data collection is enabled by default, but users can opt-out of specific features that require opt-in. iRobot does not sell customer data and has implemented privacy and security measures in its devices, including encryption, regular security vulnerability patching, and limiting employee access to information. The Roomba collects mapping and navigation information via VSLAM, and usage data can be sent to the cloud to be shown on the customer's mobile device. Images used for navigation are not sent to the cloud. However, there is a gap between how companies talk about privacy and how consumers understand it, and privacy policies often contain broad language permitting the use of data for improving products and services. It is also important to note that manufacturers recognize the privacy risks presented by on-device cameras and must prioritize privacy and security. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      calOPPA: {
        query:
          "Do any of the devices comply with the California Online Privacy Protection Act (CalOPPA)?",
        query_response:
          "Based on the information provided, it is unclear whether any of the devices comply with the California Online Privacy Protection Act (CalOPPA). The privacy policies mention compliance with the California Consumer Privacy Act (CCPA) but do not specifically mention CalOPPA. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      coppa: {
        query:
          "Do any of the devices comply with the Children's Online Privacy Protection Act (COPPA)?",
        query_response:
          "It is unclear whether any of the devices comply with the Children's Online Privacy Protection Act (COPPA) based on the provided content. ",
        sources: "None provided. [Page: ]",
      },
      ferpa: {
        query:
          "Do any of the devices comply with the Family Educational Rights and Privacy Act (FERPA)?",
        query_response:
          "There is no clear information provided about whether any of the devices comply with the Family Educational Rights and Privacy Act (FERPA).",
        sources: "N/A [Page: ]",
      },
      gdpr: {
        query:
          "Do any of the devices comply with the General Data Protection Regulation (GDPR)?",
        query_response:
          "It is unclear whether any of the devices comply with the General Data Protection Regulation (GDPR) as there is no mention of GDPR compliance in the provided content. ",
        sources: "None provided. [Page: ]",
      },
      policyVersion: {
        query: "What is the version or effective date of the privacy policy?",
        query_response:
          "The version or effective date of the privacy policy is May 25, 2018.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0,1.0]",
      },
      policyChangeLog: {
        query: "Do privacy policies indicate a change log?",
        query_response:
          "It is possible for privacy policies to indicate a change log, but it is not a requirement. The reviewed privacy policies did not mention a change log. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyUpdateNotification: {
        query: "Are users notified when the privacy policies are updated?",
        query_response:
          "It depends on the company. Some companies, such as iRobot, mention updates to their privacy policy in their policy document, but it is not a requirement. It is important for users to regularly check the privacy policies of the companies they interact with to stay informed of any changes. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyCoverage: {
        query: "Do privacy policies indicate which products are covered?",
        query_response:
          "The privacy policies do not explicitly indicate which products are covered, but they do outline the company's approach to data privacy and security. The iRobot privacy policy specifically mentions their commitment to safeguarding the privacy of customer-related information, including data collected by their connected products. They also state that they do not sell information about their customers to third parties and have implemented privacy- and security-protecting measures in their customer devices. The HR privacy policy outlines how iRobot collects, stores, processes, transfers, shares, and uses personal information of their employees, but does not mention specific products. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyContact: {
        query:
          "How can users contact the company about privacy policy questions, complaints, or material changes?",
        query_response:
          'Users can contact the company about privacy policy questions, complaints, or material changes by contacting them at global.irobot.com or by writing to them at iRobot Corporation 8 Crosby Drive Bedford, MA 01730. They can also contact the company if they have an unresolved privacy or data use concern that has not been addressed satisfactorily by using the U.S.-based third party dispute resolution provider at https://feedback-form.truste.com/watchdog/request. California residents can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes by writing to iRobot Corporation 8 Crosby Drive Bedford, MA 01730 or by sending an email to global.irobot.com with the words "California Privacy Rights" in the subject line. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      policyPrinciples: {
        query: "Do privacy policies indicate privacy principles?",
        query_response:
          'Privacy policies may contain information about how companies collect, store, process, transfer, share, and use personal information, but they may not necessarily indicate privacy principles. Privacy policies shape companies\' legal responsibilities, but there is a wide gap between the way companies talk about privacy and the way consumers understand it. Privacy policies often contain language permitting the use of data for the purposes of "improving products and services," which is broad enough to permit basically anything. Companies may use subtle differences, like the distinction between "sharing" data and selling it, that make how they handle privacy particularly hard for non-experts to parse. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyLanguages: {
        query:
          "Are privacy policies available in multiple languages? List the languages the privacy policy is available in",
        query_response:
          "It is not specified in the provided content whether the privacy policy is available in multiple languages.",
        sources: "N/A [Page: ]",
      },
      prohibitedActivities: {
        query:
          "Are there any prohibited activities that may lead to account termination?",
        query_response:
          "Yes, there are prohibited activities that may lead to account termination, including but not limited to defaming, abusing, harassing, stalking, or threatening others, promoting or facilitating unlawful online gambling or disruptive commercial messages or advertisements, and using the APIs for activities where the use or failure of the APIs could lead to death, personal injury, or environmental damage. The Terms also state that Google reserves the right to terminate the Terms with the user or discontinue the APIs or any portion or feature or the user's access thereto for any reason and at any time without liability or other obligation to the user. ",
        sources:
          "IoT-Project/Roomba/Code of Business Conduct and Ethics (2021).pdf [Page: 12.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0,95.0,99.0]",
      },
      classActionWaiver: {
        query:
          "Are users required to waive the right to join a class-action lawsuit?",
        query_response:
          "Yes, users are required to waive the right to join a class-action lawsuit.",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      internationalData: {
        query:
          "Are user data subject to international data transfer or jurisdiction laws?",
        query_response:
          "User data may be subject to international data transfer or jurisdiction laws, and may be accessible to law enforcement and regulatory authorities in accordance with the laws of other jurisdictions. The specific laws governing international data transfer or jurisdiction are not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    intendedUsers: {
      children: {
        query: "Is the device intended for use by children under 13?",
        query_response:
          "The device can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      teens: {
        query: "Is the device intended for use by teens?",
        query_response:
          "The device is intended for use by children aged from 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/H1 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      adults: {
        query: "Is the device intended for use by adults over 18?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. However, it is not specified whether the devices are intended for use by adults over 18.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      parents: {
        query:
          "Is the device intended for use under parent or guardian supervision?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory, or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0]",
      },
    },
  },
  {
    name: "Nest-thermostat",
    brand: "iRobot",
    category: "Vacuum Cleaner",
    image: "https://example.com/path/to/roomba/image.jpg",
    usage: {
      faq: {
        query:
          "Create a list of 5 frequently asked questions about the devices. Also provide responses to these questions.",
        query_response:
          "1. How do I activate the battery of my Roomba® robot vacuum?\nA: Place the robot on the Home Base to activate the battery. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n2. How can I pair my Roomba® robot vacuum with other smart devices?\nA: You can find tricks and answers to commonly asked questions, including how to pair your Roomba® robot vacuum with other smart devices in the owner's guide. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n3. Where can I find information about scheduling Roomba?\nA: You can find information about scheduling Roomba in the owner's manual. (IoT-Project/Roomba/500 Owner's Manual.pdf)\n\n4. How does Braava clean?\nA: You can find information about how Braava cleans in the owner's manual. (IoT-Project/Roomba/300 Series Owner’s Manual.pdf)\n\n5. Where can I find a quick start guide for the 300 Series Roomba?\nA: You can find a quick start guide for the 300 Series Roomba on global.irobot.com. (IoT-Project/Roomba/300 Series Quick Start Guide.pdf)",
        sources:
          "IoT-Project/Roomba/e6 Owner’s Guide.pdf [Page: 5.0], IoT-Project/Roomba/500 Owner's Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Owner’s Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Quick Start Guide.pdf [Page: 0.0]",
      },
      pii: {
        query: "Does the device collect personally identifiable information?",
        query_response:
          "The device collects personal information, including information about the Robot and/or App usage, device data, and Robot customization settings and preferences. However, some personal information is stored separately from deidentified Robot data, and users can control the collection of usage data by disconnecting their Robot from Wi-Fi or Bluetooth via the App. The specific mention of personally identifiable information is not found in the given content. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      camera: {
        query: "Does the device have a camera?",
        query_response:
          "Some robot vacuums have front-facing cameras for navigation and object recognition, as well as home monitoring. iRobot, Ecovacs, and Roborock are among the companies that have incorporated cameras into their devices. However, it is unclear if the specific device in question has a camera as it is not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], WebAPI- Privacy Policy | iRobot.pdf [Page: ]",
      },
      microphone: {
        query:
          "Do any of the devices have a microphone? If yes then list these devices and what they use the microphone for.",
        query_response:
          "The Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops create home mapping data and capture mapping and navigation information via VSLAM, which stays on the robot. Some usage data is sent to the Cloud, but the robot does not send images used for navigation to the Cloud. If a user agrees to have their map data viewable on their mobile device, then the map that the robot creates during a cleaning job is sent to the Cloud, where it is processed and simplified to produce a user-friendly map that ultimately appears in the iRobot HOME App. iRobot will not sell customer data and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. In the short term, the Roomba is already linked to both Google Assistant and Amazon Alexa, so that customers can control their robot with voice commands. iRobot believes robots and the mapping capabilities they provide will be vital in enabling the smart home. SOURCE: IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf, IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf",
        sources: "",
      },
      name: {
        query: "Does the device collect user name?",
        query_response:
          "It is unclear whether the device collects user name. No information was found in the provided content that directly answers the question.",
        sources: "N/A [Page: ]",
      },
      email: {
        query:
          "Does the device require the user to provide an email to create and account or register the device online? If yes then what is the email used for?",
        query_response:
          "Yes, the device requires the user to provide an email to create an account or register the device online. The email is used for account verification, to communicate directly with the user, to send information about orders, product sales, special offers, and new site features, and to send service-related emails or notifications. The email is also necessary for the performance of a contract between the user and iRobot. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Email account verification update | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      age: {
        query: "Does the device collect user age?",
        query_response:
          "It is unclear whether the device collects user age as there is no mention of age in the provided content. ",
        sources: "N/A [Page: ]",
      },
      phone: {
        query:
          "Does the device require the user to provide a phone number to create and account or register the device online? If yes then what is the phone number used for?",
        query_response:
          "The documents do not provide a clear answer to whether the device requires the user to provide a phone number to create an account or register the device online. There is no information about what the phone number would be used for. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0]",
      },
      geolocation: {
        query: "Does the device collect geolocation data?",
        query_response:
          "The device may collect geolocation data if the user agrees to have their map data viewable on their mobile device and if they connect to WiFi, Bluetooth, or the internet. However, the location mapping data is considered sensitive and confidential information and is not shared with third parties for marketing purposes. The data collected is encrypted and stored securely, and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. The iRobot Home app may collect approximate location data, app interactions, personal information such as name and email address, and app info and performance data such as crash logs and diagnostics. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      biometric: {
        query:
          "Do any of the devices collect any form of biometric data like face recognition scans, fingerprints, etc? If yes then specify which device does it and what does it use the biometric data for.",
        query_response:
          "None of the devices collect biometric data like face recognition scans or fingerprints. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ipAddress: {
        query: "Does any of the device collect user ipAddress?",
        query_response: "Yes, the device collects user ipAddress. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      socialAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to social media accounts? If yes then list the social media accounts that can be connected.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow you to connect to social media accounts. The privacy policies mention receiving personal information if users interact with their accounts on social networks, but do not specify which social media accounts can be connected. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      thirdPartyAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to any other third part accounts? If yes then list the third party accounts that can be connected.",
        query_response:
          "Yes, some third party services can collect information from the iRobot devices and companion apps, such as Amazon Alexa and Google Assistant. Other third parties that may receive personal information include social networks and third party vendors/service providers. However, the specific third party accounts that can be connected are not listed in the extracted content. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      voiceRecordings: {
        query:
          "Do any of the devices collect voice recordings? If yes then list the devices that collect voice recordings and what they use the voice recordings for.",
        query_response:
          'Yes, some of the devices collect voice recordings. The Samsung Jet Bot AI+ Robot Vacuum and Powerbot R7070 collect "recordings of your voice when you use voice commands to control a Service" (MIT Technology Review). The iRobot Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops also collect voice recordings when users share images via the mobile app (iRobot). It is unclear what these companies use the voice recordings for. ',
        sources: "MIT Technology Review [Page: ], iRobot [Page: ]",
      },
      videoRecordings: {
        query:
          "Do any of the devices collect video recordings? If yes then list the devices that collect video recordings and what they use the video recordings for.",
        query_response:
          "Yes, some of the devices collect video recordings. The iRobot Roomba J7 series and some models from LG and Samsung have cameras that collect video recordings for the purpose of training algorithms to recognize patterns and improve the robot's cleaning performance. The collected data is also used to build smarter robots whose purpose may go beyond vacuuming in the future. The iRobot Beta Program also collects and processes video recordings for testing new features and functionalities of the service. Consent is required for the collection of video recordings, and users have the option to opt-in or opt-out. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      roomMapping: {
        query:
          "Do any of the devices create a map of the room? If yes then list the devices that create a map of the room and what they use the map for.",
        query_response:
          'Yes, some of the devices create a map of the room. The devices that create a map of the room are Roomba e5, e6, 89x, 69x, 67x, 96x, i3/i1, i6, i7, i8, and s9. The map is used to determine the best way to clean based on the orientation of each room, furniture placement, etc. The Imprint Smart Maps also enable the user to clean or select a single room, multiple rooms, or an entire level of the floor all from the iRobot Home App. The user can also set up specific zones to clean. The technology which allows iRobot products to create a map is called vSLAM (visual Simultaneous Localization and Mapping). The robot looks for unique "landmarks" in the home and remembers where those landmarks are. Landmarks may be corners of a picture frame or window, a ceiling fan or recessed light, or similar feature on the wall or ceiling.',
        sources: "",
      },
      interactions: {
        query:
          "Do any of the devices collect user interactions with the device? If yes then list the devices that collect user interactions and what they use the interactions for.",
        query_response:
          "Yes, some of the devices collect user interactions with the device. The Roomba Robots equipped with smart technology collect information about the Robot and/or App usage, feature usage, in-App transactions, technical specifications, crashes, and other information about how you use your Robot and the product App. Additionally, the Robot collects information about its movement throughout the environment to create a location ‘map’ of the space accessible to the Robot. However, it is not specified what they use the interactions for.",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      behaviors: {
        query:
          "Do any of the device collect the users behavioral patterns? If yes then list the devices that collect behavioral patterns and what they use the patterns for.",
        query_response:
          "Yes, some of the devices collect users' behavioral patterns. The devices that collect behavioral patterns include iRobot Roomba and the information collected is used for enhancing and personalizing the user experience, carrying out interest-based advertising and marketing, monitoring and improving the website and service, and for other internal purposes. The specific types of information collected and the purposes for which they are used vary depending on the device and the features used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      analytics: {
        query:
          "Do any of the devices collect analytics data? If yes then list the devices that collect analytics data and what they use the data for.",
        query_response:
          "The iRobot Roomba devices and their associated apps collect usage and device information, including analytics data, which is used for various purposes such as improving the service and personalizing advertising. The iRobot SDK also collects data on which tools and services are being used and how they are being used, but this data is examined in the aggregate to improve the SDK and is maintained in accordance with Google's Privacy Policy. The iRobot Privacy Policy and Android App Copyright Licenses provide more details on the types of information collected and how it is used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      contactSync: {
        query:
          "Do any of the devices or their companion apps allow you to sync your contacts? If yes then list the devices that allow you to sync your contacts and what they use the contacts for.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow syncing of contacts and what they use the contacts for. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
    },
    connectivity: {
      cellular: {
        query: "Do any of the devices support/require cellular connectivity?",
        query_response:
          "The Roomba and Braava models listed in the document support/require Wi-Fi connectivity, but there is no mention of cellular connectivity. ",
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home on the App Store.pdf [Page: ]",
      },
      wifi: {
        query: "Do any of the devices support/require Wi-Fi connectivity?",
        query_response:
          'Some of the devices support/require Wi-Fi connectivity, while others do not. Please refer to the compatibility chart provided in the "Setting up your Wi-Fi Connected Robot with the iRobot HOME App" document to determine if your device supports Wi-Fi connectivity. ',
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0]",
      },
      bluetooth: {
        query: "Do any of the devices support/require Bluetooth connectivity?",
        query_response:
          "Yes, some of the devices support/require Bluetooth connectivity. The iRobot® HOME App uses Bluetooth to set up and connect the robot to the device, and the Braava jet™ 240 mopping robot uses Bluetooth Low Energy (BLE) built into most common mobile devices. ",
        sources:
          "IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0]",
      },
    },
    sharing: {
      thirdParty: {
        query:
          "Do any of the devices share/rent data with third parties? If yes then list the third parties that the devices share/rent data with and what kind of data do they share/rent.",
        query_response:
          "Yes, some of the devices share/rent data with third parties. The third parties that the devices share/rent data with include other companies owned by or under common ownership as iRobot, third party vendors, affiliates, and other service providers that perform services on iRobot's behalf, selected third parties who iRobot thinks may offer customers products or services they may enjoy, and third parties in connection with any company transaction. The kind of data that is shared/rented includes personal information, Wi-Fi connected robot performance data, and aggregated performance data about iRobot's robots. iRobot is committed to safeguarding the privacy of customer-related information and does not sell information about its customers to third parties. However, customers can choose to share data with third parties for their benefit if they so choose. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      categories: {
        query:
          "What type of information shared with third parties? List the categories of information shared with third parties.",
        query_response:
          "The categories of information shared with third parties include personal information for business purposes, aggregated and anonymous information, and information shared with third parties at the request of the user. Specific categories of personal information shared with third parties include information for targeted advertising, e-commerce services, content or service fulfillment, billing, website operation, payment processing and authorization, customer service, fraud prevention, web hosting, data storage, analytics services, and third-party app or service integration. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      purpose: {
        query:
          "What is the purpose of data sharing? Eg: research and/or product improvement",
        query_response:
          "The purpose of data sharing varies depending on the context. iRobot is committed to the absolute privacy of customer-related data, including data collected by their connected products, and will not sell customer data or share it with third parties without the customer's knowledge or control. Google supports data portability and prohibits certain actions with content returned from their APIs, including scraping, modifying, selling, and sublicensing to third parties. The terms of data sharing are dependent on the specific agreement or policy in place. ",
        sources:
          "IoT-Project/Roomba/Software Licenses | iRobot.pdf [Page: 528.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0]",
      },
      anonymized: {
        query: "Is the shared data anonymized?",
        query_response:
          "The data collected by iRobot's connected products is not anonymized, but it is encrypted and stored securely. However, customers can choose to share limited data to enable voice control of the robot using Amazon Alexa or Google Assistant. Customers can also decline to have their data shared, and iRobot will delete the data from their servers at the request of a customer. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      samePrivacy: {
        query: "Do third parties follow the same privacy practices?",
        query_response:
          "It depends on the specific third party and their relationship with iRobot. Some third parties may follow the same privacy practices, while others may have different practices. iRobot shares personal information with third parties in various instances, including for business purposes and to serve targeted advertisements based on online browsing history and interests. However, iRobot allows California residents to exercise certain rights, such as the right to know what personal information has been collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales. The lack of a comprehensive data privacy law in the United States means that privacy policies shape companies' legal responsibilities, and some policies may reserve the right to share data with select partners or service providers. The legal barriers for companies to collect data directly from consumers are fairly low, and most privacy policies do not even mention the audiovisual data being captured. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      contractLimits: {
        query: "Are there contractual limits on data usage by third parties?",
        query_response:
          'There are contractual limits on data usage by third parties, but the specifics depend on the individual agreements and policies of each company. Google\'s Privacy Policy states that data collected by their SDK is examined in the aggregate to improve the SDK and is maintained in accordance with their policy. The iRobot Privacy Policy states that they allow certain third-party advertising partners to collect information about users of their service for the purposes of serving more relevant ads, but all cookies that are not strictly necessary require prior opt-in consent from California consumers and do not involve "sales" of personal information. The iRobot Terms of Use Agreement also includes provisions for indemnification and limitations of liability for misuse of their APIs. However, the specifics of any contractual limits on data usage by third parties may vary depending on the company and the agreements in place. ',
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0,100.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      notification: {
        query:
          "Is the user notified in any form if their data is shared with third parties be it manually or automatically?",
        query_response:
          'Yes, the user is notified in some form if their data is shared with third parties, either manually or automatically. The Privacy Policy states that "No data will be shared with third parties without the customer\'s knowledge or control" and "All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers." Additionally, the policy outlines the right to know about personal information collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales to third parties. However, the policy also states that aggregated and anonymous information may be shared with others in a form that does not reasonably identify the user directly as an individual. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      reidentifying: {
        query:
          "Does the company actively take steps to prevent the identifying a specific user from the data they provide to third parties?",
        query_response:
          "The company does not sell customer data and takes steps to protect user information collected by API clients, including personally identifiable information, from unauthorized access or use. The company allows certain third-party advertising partners to collect information about users of the service for the purposes of serving ads that are more relevant, for ad campaign measurement and analytics, and for fraud detection and reporting. All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers, are loaded per the consumer’s instructions and preferences, and do not involve “sales” of personal information. The company complies with all applicable privacy laws and regulations including those applying to PII and provides and adheres to a privacy policy for API clients that clearly and accurately describes to users of the API client what user information is collected and how it is used and shared with Google and third parties. The company will not share data with third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties. If a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. Deleting the data is retroactive. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 94.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      transfer: {
        query:
          "Would the user information be transferred to another company in merger, acquisition, or bankruptcy?",
        query_response:
          "User information may be transferred to another company in a merger, acquisition, or bankruptcy, as well as in connection with any company transaction, such as a sale of all or a portion of company assets or shares, reorganization, financing, change of control or acquisition of all or a portion of the business by another company or third party, or in the event of bankruptcy or related or similar proceedings. User information may also be shared with third parties as required by law or to protect against harm to the rights, property, or safety of iRobot, its users, or the public. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    social: {
      verifiedUsers: {
        query: "Does the device support verified user accounts?",
        query_response:
          "There is no information provided about whether the device supports verified user accounts. ",
        sources: "N/A [Page: ]",
      },
      publicDisplay: {
        query: "Is the user's collected data publicly displayed in any form?",
        query_response:
          "The user's collected data may be publicly displayed on their mobile device if they agree to it, but it is not sold to third parties and cannot be shared without the customer's knowledge or control. Clean Map Reports are not shared with third parties. The data collected via the robot is not anonymized, but it is encrypted and stored securely. iRobot will delete the data from their servers at the request of a customer. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      moderated: {
        query:
          "Are user interactions with the device moderated in any form? Eg: content moderation",
        query_response:
          "For the first question, the contract is governed by English law. For the second question, there is no information provided about user interactions with the device being moderated or content moderation. For the third question, the president did not mention Michael Jackson. ",
        sources:
          "28-pl [Page: ], 0-pl [Page: ], 24-pl [Page: ], IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0]",
      },
      externalLinks: {
        query:
          "Do any of the devices display links to external websites or services either in their user interface or companion app?",
        query_response:
          "It is unclear whether any of the devices display links to external websites or services either in their user interface or companion app. The first source mentions links to third party websites, but it is not specified whether they are displayed in the user interface or companion app. The second source does not mention anything about links. The third source discusses data collection and usage from registered devices equipped with smart technology, but does not mention links. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      deleteFromThirdParty: {
        query:
          "Does the company allow for data which is collected by or shared with third parties to be deleted from the third parties?",
        query_response:
          "It is unclear whether the company allows for data which is collected by or shared with third parties to be deleted from the third parties. However, iRobot is committed to the absolute privacy of customer-related data, and no data is sold to third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties, and if a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. The company also allows California residents to exercise their rights to know, request deletion, and opt-out of personal information sales to third parties. iRobot does share personal information with third parties in certain instances, such as with other companies owned by or under common ownership as iRobot, third-party vendors and service providers, and at the request of the customer. The company may also share information with others in an aggregated and anonymous form that cannot reasonably identify the individual. However, the company may share personal information with law enforcement, regulators, and other parties for legal reasons. It is important to note that iRobot does not control the data collection and use practices of third-party apps and services that interact with their robots. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    tracking: {
      targetAds: {
        query: "Does the device track the users for targeted ads?",
        query_response:
          "The device tracks users for targeted ads using cookies and other tracking technologies, but users can control their advertising preferences or opt-out of certain advertising products. The use of cookies and tracking technologies may negatively impact the user's experience on the service. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      profiles: {
        query:
          "Do any of the devices or their companion app maintain a profile of the user which includes all the data collected about the user?",
        query_response:
          "Based on the extracted parts of the documents, it appears that some of the devices and their companion app collect personal information about the user, including data about their device usage, location, and preferences. However, it is unclear whether any of these devices or apps maintain a profile of the user which includes all the data collected about them. It is recommended to review the privacy policies and terms of service for each specific device and app to determine how user data is handled and stored. ",
        sources:
          "IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      filtered: {
        query: "Can ads be filtered?",
        query_response:
          "Yes, ads can be filtered and users have control over their advertising preferences and can opt-out of certain advertising products. Users can also manage their cookie settings to control the collection of information. However, some features and services on the website may not work properly if cookies are disabled. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      doNotTrack: {
        query: "Can users opt-out of ads? Eg: Do not Track mechanism",
        query_response:
          "Users can opt-out of ads through various mechanisms such as the Digital Advertising Alliance (DAA)’s self-regulatory opt-out page, European Interactive Digital Advertising Alliance (EDAA)’s consumer opt-out page, and Network Advertising Initiative (NAI)’s self-regulatory opt-out page. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The iRobot website also allows users to manage their advertising preferences and opt-out of certain Google advertising products. Additionally, users can limit certain interest-based mobile advertising through the settings on their mobile device. The iRobot website also provides information on how to manage and delete cookies. However, the website is unable to respond to Do Not Track signals set by the user's browser at this time. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    controls: {
      createContent: {
        query:
          "Do any of the devices allow users to use it as a medium for content creation? If yes then list the devices that allow users to create content and what kind of content can be created using them.",
        query_response:
          "The documents do not provide information about devices that allow users to create content. ",
        sources:
          "IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ownership: {
        query:
          "Do users retain ownership of their content they create using the device?",
        query_response:
          "The answer cannot be determined from the given content. There is no clear mention of a device or ownership of content created using a device. ",
        sources: "N/A [Page: ]",
      },
      access: {
        query:
          "Can users access their data which the device has collected from them?",
        query_response:
          "Users can choose to share their data with third-parties for their benefit, but no data is sold to third-parties without the customer's knowledge or control. iRobot will delete the data from their servers at the request of a customer. Roomba consumers can decline to have their data shared and can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via the robot is not anonymized, but it is encrypted and stored securely. However, the content does not provide a clear answer to whether users can access their data which the device has collected from them. The other content pieces are not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      dataModify: {
        query:
          "Can users modify their data which the device has collected from them?",
        query_response:
          "Users can decline to have their data shared with their mobile device, and they can also opt-out of sending map data to the Cloud through a switch in the mobile app. However, the content does not provide information on whether users can modify their data which the device has collected from them. The other content is not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      retention: {
        query:
          "What is the data retention policy for the data collected by the device from the user?",
        query_response:
          "There is no clear answer about the data retention policy for the data collected by the device from the user. The available information only mentions data collection and sharing practices, as well as security measures. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      dataDelete: {
        query:
          "Can users delete the data which the device has collected from them if they want to?",
        query_response:
          "Yes, Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app, and iRobot® will delete the data from their servers at the request of a customer. Clean Map™ Reports are not shared with third parties. No data is sold to third parties, and no data will be shared with third parties without the customer's knowledge or control. However, the content does not mention whether users can delete the data which the device has collected from them if they want to. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], and A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: ]",
      },
      termination: {
        query:
          "Is user data deleted upon account cancellation or termination of their account?",
        query_response:
          "The documents do not provide a clear answer to whether user data is deleted upon account cancellation or termination of their account. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 33.0,99.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      restrictAccess: {
        query: "Can users restrict access to their data?",
        query_response:
          "Users must protect the privacy and legal rights of those users and provide legally adequate privacy notice and protection for those users. If an application stores personal or sensitive information provided by users, it must do so securely. Users must comply with all applicable privacy laws and regulations including those applying to personally identifiable information (PII) and provide and adhere to a privacy policy for their API Client that clearly and accurately describes to users of their API Client what user information they collect and how they use and share such information (including for advertising) with Google and third parties. Users may not sublicense an API for use by a third party or create an API Client that functions substantially the same as the APIs and offer it for use by third parties. Users may not perform an action with the intent of introducing to Google products and must ensure that they have the necessary rights (including the necessary rights from their end users) to grant Google the license. When a user's non-public content is obtained through the APIs, users may not retrieve it. Companies must implement privacy- and security-protecting measures in their customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that they collect. However, there is a wide gap between the way companies talk about privacy and the way consumers understand it. It is easy to conflate privacy with security, but data security refers to a product’s physical and cyber security, or how vulnerable it is to a hack or intrusion, while data privacy is about transparency—knowing and being able to control the data that companies have, how it is used, why it is shared, whether and for how long it’s retained, and how much a company is collecting to start with. Company representatives sometimes use subtle differences, like the distinction between “sharing” data and selling it, that make how they handle privacy particularly hard for non-experts to parse. When a company says it will never sell a user's data, that does not mean it will not use it or share it with others for analysis. Developers are not traditionally very good at security and privacy, and their attitude becomes \"Try to get the functionality, and if the functionality is working, ship the product. And then the scandals come out.\" ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,94.0,96.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      download: {
        query:
          "Can users download the data which the device has collected from them?",
        query_response:
          "Roomba® consumers can decline to have their data shared. Customers need not connect a Wi-Fi connected Roomba® to the internet for it to work - it can work in offline mode with no internet or Cloud connectivity. Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via my robot is not anonymized, but it is encrypted and stored securely. iRobot® will delete the data from their servers at the request of a customer. However, there is no information about whether users can download the data which the device has collected from them. The Android App Copyright Licenses state that if you use any API to retrieve data from Google, you acknowledge that the data may be protected by intellectual property rights which are owned by Google or those parties that provide the data (or by other persons or companies on their behalf). Your use of any such API may be subject to additional Terms of Service. You may not modify, rent, lease, loan, sell, distribute or create derivative works based on this data (either in whole or in part) unless allowed by the Terms of Service. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      privacySettings: {
        query:
          "Are there privacy settings available? If yes then list what kind of privacy settings are available and their purpose",
        query_response:
          "Yes, there are privacy settings available. Users can set their email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether the user has accessed their email and performed certain functions with it. Users can also opt-out of interest-based advertising by participating companies through various consumer choice mechanisms. The company honors the privacy preferences of its users but is unable to respond to Do Not Track signals set by the user's browser at this time. The company collects various types of personal information, and users can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes. The company's privacy policy also includes information on data collection, sharing, and security practices. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      limitedUse: {
        query: "Can users limit the use of their data?",
        query_response:
          "Users can limit the use of their data by withholding consent for data collection or opting out of sharing data with their mobile device. They can also set email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether they have accessed the email and performed certain functions with it. Additionally, users can opt-out of interest-based advertising through various consumer choice mechanisms. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The company is unable to respond to Do Not Track signals set by the browser at this time. For mobile users, there are controls in the device Operating System that enable them to choose whether to allow cookies or share their advertising ID with companies like iRobot or their advertising service providers. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,32.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combineThirdParty: {
        query:
          "Is data combined with data from other third-parties? This may be done for purposes such as analytics, advertising, etc.",
        query_response:
          "Yes, data may be combined with data from other third-parties for purposes such as analytics and advertising. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combinedPii: {
        query:
          "Is personally identifiable information combined with other data? If yes then how is this combined data used and treated?",
        query_response:
          "Yes, personally identifiable information may be combined with other data. If combined, the information will be treated as personal information. The combined data is used for various purposes such as enhancing and personalizing user experience, interest-based advertising and marketing, monitoring and improving the website and service, and developing new products and features. The specific use and treatment of combined data may vary depending on the type of information being combined. ",
        sources: "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    consent: {
      change: {
        query: "Can users change their consent?",
        query_response:
          "It is unclear whether users can change their consent based on the given content. ",
        sources: "N/A [Page: ]",
      },
      grievance: {
        query: "Is there a grievance redressal mechanism?",
        query_response:
          "There is a grievance redressal mechanism through arbitration. ",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      legalRequest: {
        query:
          "Does the company have a procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity?",
        query_response:
          "It is unclear whether the company has a specific procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity as the provided content does not directly address this question. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 1.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      optIn: {
        query:
          "Can users opt-in to sharing their data with the company and/or third parties?",
        query_response:
          "It depends on the specific context and service. In general, users may be able to opt-in to sharing their data with the company and/or third parties, but this may require prior, opt-in consent and may vary depending on the specific service and location of the user. iRobot states that they do not sell customer data and are committed to the privacy of their customer-related data, but they may share personal information with other companies owned by or under common ownership as iRobot, third party vendors and service providers, and selected third parties who may offer products or services that users may enjoy. Users may also have the right to request deletion of personal information and opt-out of personal information sales to third parties. However, iRobot is unable to respond to Do Not Track signals set by users' browsers at this time. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      optOut: {
        query:
          "Can users opt-out of sharing their data with the company and/or third parties?",
        query_response:
          'Yes, users can opt-out of sharing their data with the company and/or third parties. Users can disable cookies or set their browser to automatically reject cookies, and can control their communication preferences through the "My Account" page on the website or app. Additionally, iRobot does not sell personal information. For California residents, they have the right to know what personal information has been collected and disclosed, request deletion of personal information, and opt-out of personal information sales to third parties. Sources: IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf, IoT-Project/Roomba/Privacy Policy | iRobot.pdf.',
        sources: "",
      },
      copyright: {
        query: "How are copyright claims to user data handled?",
        query_response:
          "The handling of copyright claims to user data is addressed in the terms and conditions of the APIs and software licenses, including provisions for data portability, prohibitions on certain uses of content, and liability limitations. The specific handling of copyright claims may vary depending on the applicable laws and agreements. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 77.0,96.0,97.0], IoT-Project/Roomba/Copyright Licenses | iRobot.pdf [Page: 570.0]",
      },
      legacy: {
        query:
          "Can users assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death?",
        query_response:
          "There is no information provided about whether users can assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death.",
        sources: "N/A [Page: ]",
      },
      parental: {
        query:
          "Is parental consent required before children's data is collected or disclosed?",
        query_response:
          "Yes, parental consent is required before children's data is collected or disclosed. The Services are not directed to persons under 13 and iRobot does not intentionally collect or maintain information from persons under 13. If personal information about a person under 16 has been provided to iRobot, they request immediate contact. Source: IoT-Project/Roomba/Privacy Policy | iRobot.pdf",
        sources: "",
      },
    },
    security: {
      identity: {
        query:
          "Does the device or company verify the identity of their using using official documents?",
        query_response:
          "There is no clear answer to the question of whether the device or company verifies the identity of their users using official documents. The provided content discusses topics such as software security, registration, compliance with laws and regulations, and privacy protection, but does not directly address the verification of identity using official documents. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,86.0,92.0]",
      },
      accountCreation: {
        query:
          "Does the user need to create an account with the company in order to use the device? If any device can be used without creating an account then list them.",
        query_response:
          "It is unclear whether the user needs to create an account with the company in order to use the device. No information is provided about devices that can be used without creating an account.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      managedAccounts: {
        query:
          "Does the company or device support managed accounts i.e. accounts which are managed by a parent or guardian?",
        query_response:
          "The provided documents do not contain information about whether the company or device supports managed accounts. ",
        sources: "N/A [Page: ]",
      },
      multiFactor: {
        query:
          "Does the accoiunt created by the user with the company to use the device support multi-factor authentication?",
        query_response:
          "The provided documents do not contain information about whether the account created by the user with the company to use the device supports multi-factor authentication.",
        sources: "N/A [Page: ]",
      },
      employeeAccess: {
        query:
          "Do the company employees have access to the data collected by the device from the user? If yes then what kind of access do they have?",
        query_response:
          "It is unclear from the given content whether or not company employees have access to the data collected by the device from the user and what kind of access they have. However, iRobot has implemented privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. Customers can also choose to opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected by robot vacuums can be particularly invasive, and companies often use vague language in their privacy policies that give them broad discretion in how they disseminate and analyze consumer information. It is important for consumers to understand the distinction between data security and data privacy and to be aware of the data that companies are collecting and how it is being used. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      dataTransit: {
        query: "Is data encrypted in transit?",
        query_response:
          "Yes, data is encrypted both in transit and at rest for iRobot connected products. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      dataStorage: {
        query: "Is data encrypted when stored?",
        query_response:
          "Yes, data is encrypted both in transit and at rest. iRobot takes a defense-in-depth approach to security, adding multiple layers of protection around their robots, cloud, and apps from start to finish. They ensure that the development of their products follows industry-standard security best practices, and they are using technology-leading tools to assist their development and security teams during this process. When deployed to market, they work with their suppliers and partners to ensure that their products and their suppliers' and partners' supporting infrastructure (including physical infrastructure, cloud, and mobile apps) are properly configured, monitored, and continuous security improvement processes are in place. Within iRobot’s cloud (built on top of AWS), customer data is stored encrypted. Customer data has multiple encryption keys which are rotated on a regular basis to reduce the risk of the data being compromised even in the event of a key exposure. Within the mobile application, data storage follows the platform’s standards for application-secure data; any sensitive data that is used by the application is not stored on the mobile device, but is instead securely transported to iRobot’s cloud for storage. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      breachNotice: {
        query:
          "Is there a notice provided to the user if any of the data collected from them is exposed in a data breach?",
        query_response:
          "There is no clear mention of whether a notice is provided to the user if any of the data collected from them is exposed in a data breach.",
        sources: "None provided. [Page: ]",
      },
      storageLocation: {
        query: "Where is data stored?",
        query_response:
          "For the first question, the state/country's law that governs the interpretation of the contract is English law (SOURCE: 28-pl). For the second question, there is no mention of Michael Jackson in the given content (SOURCE: N/A). For the third question, data is stored securely in iRobot's cloud for storage and is not stored on the mobile device (SOURCE: IoT-Project/Roomba/Data Security | iRobot.pdf).",
        sources: "",
      },
      storageDuration: {
        query: "How long is data stored?",
        query_response:
          "The length of time that personal information is stored varies based on the purposes set out in Annex 2 and in accordance with legal obligations and legitimate business interests. Data held by iRobot will only be used consistent with the relevant and applicable legal requirements of the country in which the personal information is collected. The data collected from iRobot products is encrypted both in transit and at rest, and data access is controlled strictly and limited only to authorized personnel to do their job and help improve product experiences. The Roomba 900 Series, i Series, j series, s Series Robot Vacuums and the Braava jet m Series Robot Mop build a map of a home as they clean, and Clean Map reports make these maps visible to customers in the iRobot HOME App after a cleaning job is complete, showing total area and duration a Roomba 900 Series, i Series, j series, or s Series vacuum cleaned—for up to 30 cleaning jobs. If a customer chooses to send map data to the Cloud, Dirt Detect events are stored in the Cloud and sent to the App when the Clean Map is rendered. Customers with Wi-Fi connected Robot Vacuums and Robot Mops are not required to connect to the Cloud to use their robot. The robot can be used in offline mode with no connection to the internet or Cloud. Customers with Wi-Fi connected Robot vacuums and Robot Mops who do not connect them to the internet will not be able to access certain features, like scheduled cleanings, customized cleaning features, Clean Map reports, and connections to voice control systems like Amazon Alexa and Google Assistant. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      vulnerabilities: {
        query:
          "Are there any known vulneranbilites associated with any of the devices listed in the CVE database? If yes then list the devices and their vulnerabilities.",
        query_response:
          "There is no information provided in the given content about any known vulnerabilities associated with the devices listed in the CVE database.",
        sources: "N/A [Page: ]",
      },
      securityUpdates: {
        query: "How long are security updates provided for the devices?",
        query_response:
          "The document does not provide a clear answer to the question of how long security updates are provided for the devices. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      passwordComplexity: {
        query:
          "Are their any password complexity requirements for the account used to use the device? If yes then what are they?",
        query_response:
          "There is no information provided about password complexity requirements for the account used to use the device.",
        sources: "N/A [Page: ]",
      },
    },
    privacyCompliance: {
      complianceAudits: {
        query:
          "Do the devices and their parent company undergo regular industry standard compliance audits with respect to privacy and security?",
        query_response:
          'iRobot has implemented many privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. They also have a Data Privacy Policy and a Data Security Policy. However, the article also highlights the gap between how companies talk about privacy and how consumers understand it, and the vague language in privacy policies that permit companies to use data for the purposes of "improving products and services." It is unclear if iRobot undergoes regular industry standard compliance audits with respect to privacy and security. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      defaultPrivacy: {
        query:
          "What are the default privacy controls for data collected by the device? Does it have data collection enabled by default?",
        query_response:
          "For the iRobot Roomba, the privacy policy states that data collection is enabled by default, but users can opt-out of specific features that require opt-in. iRobot does not sell customer data and has implemented privacy and security measures in its devices, including encryption, regular security vulnerability patching, and limiting employee access to information. The Roomba collects mapping and navigation information via VSLAM, and usage data can be sent to the cloud to be shown on the customer's mobile device. Images used for navigation are not sent to the cloud. However, there is a gap between how companies talk about privacy and how consumers understand it, and privacy policies often contain broad language permitting the use of data for improving products and services. It is also important to note that manufacturers recognize the privacy risks presented by on-device cameras and must prioritize privacy and security. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      calOPPA: {
        query:
          "Do any of the devices comply with the California Online Privacy Protection Act (CalOPPA)?",
        query_response:
          "Based on the information provided, it is unclear whether any of the devices comply with the California Online Privacy Protection Act (CalOPPA). The privacy policies mention compliance with the California Consumer Privacy Act (CCPA) but do not specifically mention CalOPPA. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      coppa: {
        query:
          "Do any of the devices comply with the Children's Online Privacy Protection Act (COPPA)?",
        query_response:
          "It is unclear whether any of the devices comply with the Children's Online Privacy Protection Act (COPPA) based on the provided content. ",
        sources: "None provided. [Page: ]",
      },
      ferpa: {
        query:
          "Do any of the devices comply with the Family Educational Rights and Privacy Act (FERPA)?",
        query_response:
          "There is no clear information provided about whether any of the devices comply with the Family Educational Rights and Privacy Act (FERPA).",
        sources: "N/A [Page: ]",
      },
      gdpr: {
        query:
          "Do any of the devices comply with the General Data Protection Regulation (GDPR)?",
        query_response:
          "It is unclear whether any of the devices comply with the General Data Protection Regulation (GDPR) as there is no mention of GDPR compliance in the provided content. ",
        sources: "None provided. [Page: ]",
      },
      policyVersion: {
        query: "What is the version or effective date of the privacy policy?",
        query_response:
          "The version or effective date of the privacy policy is May 25, 2018.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0,1.0]",
      },
      policyChangeLog: {
        query: "Do privacy policies indicate a change log?",
        query_response:
          "It is possible for privacy policies to indicate a change log, but it is not a requirement. The reviewed privacy policies did not mention a change log. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyUpdateNotification: {
        query: "Are users notified when the privacy policies are updated?",
        query_response:
          "It depends on the company. Some companies, such as iRobot, mention updates to their privacy policy in their policy document, but it is not a requirement. It is important for users to regularly check the privacy policies of the companies they interact with to stay informed of any changes. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyCoverage: {
        query: "Do privacy policies indicate which products are covered?",
        query_response:
          "The privacy policies do not explicitly indicate which products are covered, but they do outline the company's approach to data privacy and security. The iRobot privacy policy specifically mentions their commitment to safeguarding the privacy of customer-related information, including data collected by their connected products. They also state that they do not sell information about their customers to third parties and have implemented privacy- and security-protecting measures in their customer devices. The HR privacy policy outlines how iRobot collects, stores, processes, transfers, shares, and uses personal information of their employees, but does not mention specific products. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyContact: {
        query:
          "How can users contact the company about privacy policy questions, complaints, or material changes?",
        query_response:
          'Users can contact the company about privacy policy questions, complaints, or material changes by contacting them at global.irobot.com or by writing to them at iRobot Corporation 8 Crosby Drive Bedford, MA 01730. They can also contact the company if they have an unresolved privacy or data use concern that has not been addressed satisfactorily by using the U.S.-based third party dispute resolution provider at https://feedback-form.truste.com/watchdog/request. California residents can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes by writing to iRobot Corporation 8 Crosby Drive Bedford, MA 01730 or by sending an email to global.irobot.com with the words "California Privacy Rights" in the subject line. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      policyPrinciples: {
        query: "Do privacy policies indicate privacy principles?",
        query_response:
          'Privacy policies may contain information about how companies collect, store, process, transfer, share, and use personal information, but they may not necessarily indicate privacy principles. Privacy policies shape companies\' legal responsibilities, but there is a wide gap between the way companies talk about privacy and the way consumers understand it. Privacy policies often contain language permitting the use of data for the purposes of "improving products and services," which is broad enough to permit basically anything. Companies may use subtle differences, like the distinction between "sharing" data and selling it, that make how they handle privacy particularly hard for non-experts to parse. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyLanguages: {
        query:
          "Are privacy policies available in multiple languages? List the languages the privacy policy is available in",
        query_response:
          "It is not specified in the provided content whether the privacy policy is available in multiple languages.",
        sources: "N/A [Page: ]",
      },
      prohibitedActivities: {
        query:
          "Are there any prohibited activities that may lead to account termination?",
        query_response:
          "Yes, there are prohibited activities that may lead to account termination, including but not limited to defaming, abusing, harassing, stalking, or threatening others, promoting or facilitating unlawful online gambling or disruptive commercial messages or advertisements, and using the APIs for activities where the use or failure of the APIs could lead to death, personal injury, or environmental damage. The Terms also state that Google reserves the right to terminate the Terms with the user or discontinue the APIs or any portion or feature or the user's access thereto for any reason and at any time without liability or other obligation to the user. ",
        sources:
          "IoT-Project/Roomba/Code of Business Conduct and Ethics (2021).pdf [Page: 12.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0,95.0,99.0]",
      },
      classActionWaiver: {
        query:
          "Are users required to waive the right to join a class-action lawsuit?",
        query_response:
          "Yes, users are required to waive the right to join a class-action lawsuit.",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      internationalData: {
        query:
          "Are user data subject to international data transfer or jurisdiction laws?",
        query_response:
          "User data may be subject to international data transfer or jurisdiction laws, and may be accessible to law enforcement and regulatory authorities in accordance with the laws of other jurisdictions. The specific laws governing international data transfer or jurisdiction are not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    intendedUsers: {
      children: {
        query: "Is the device intended for use by children under 13?",
        query_response:
          "The device can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      teens: {
        query: "Is the device intended for use by teens?",
        query_response:
          "The device is intended for use by children aged from 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/H1 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      adults: {
        query: "Is the device intended for use by adults over 18?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. However, it is not specified whether the devices are intended for use by adults over 18.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      parents: {
        query:
          "Is the device intended for use under parent or guardian supervision?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory, or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0]",
      },
    },
  },
  {
    name: "Philips-hue",
    brand: "iRobot",
    category: "Vacuum Cleaner",
    image: "https://example.com/path/to/roomba/image.jpg",
    usage: {
      faq: {
        query:
          "Create a list of 5 frequently asked questions about the devices. Also provide responses to these questions.",
        query_response:
          "1. How do I activate the battery of my Roomba® robot vacuum?\nA: Place the robot on the Home Base to activate the battery. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n2. How can I pair my Roomba® robot vacuum with other smart devices?\nA: You can find tricks and answers to commonly asked questions, including how to pair your Roomba® robot vacuum with other smart devices in the owner's guide. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n3. Where can I find information about scheduling Roomba?\nA: You can find information about scheduling Roomba in the owner's manual. (IoT-Project/Roomba/500 Owner's Manual.pdf)\n\n4. How does Braava clean?\nA: You can find information about how Braava cleans in the owner's manual. (IoT-Project/Roomba/300 Series Owner’s Manual.pdf)\n\n5. Where can I find a quick start guide for the 300 Series Roomba?\nA: You can find a quick start guide for the 300 Series Roomba on global.irobot.com. (IoT-Project/Roomba/300 Series Quick Start Guide.pdf)",
        sources:
          "IoT-Project/Roomba/e6 Owner’s Guide.pdf [Page: 5.0], IoT-Project/Roomba/500 Owner's Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Owner’s Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Quick Start Guide.pdf [Page: 0.0]",
      },
      pii: {
        query: "Does the device collect personally identifiable information?",
        query_response:
          "The device collects personal information, including information about the Robot and/or App usage, device data, and Robot customization settings and preferences. However, some personal information is stored separately from deidentified Robot data, and users can control the collection of usage data by disconnecting their Robot from Wi-Fi or Bluetooth via the App. The specific mention of personally identifiable information is not found in the given content. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      camera: {
        query: "Does the device have a camera?",
        query_response:
          "Some robot vacuums have front-facing cameras for navigation and object recognition, as well as home monitoring. iRobot, Ecovacs, and Roborock are among the companies that have incorporated cameras into their devices. However, it is unclear if the specific device in question has a camera as it is not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], WebAPI- Privacy Policy | iRobot.pdf [Page: ]",
      },
      microphone: {
        query:
          "Do any of the devices have a microphone? If yes then list these devices and what they use the microphone for.",
        query_response:
          "The Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops create home mapping data and capture mapping and navigation information via VSLAM, which stays on the robot. Some usage data is sent to the Cloud, but the robot does not send images used for navigation to the Cloud. If a user agrees to have their map data viewable on their mobile device, then the map that the robot creates during a cleaning job is sent to the Cloud, where it is processed and simplified to produce a user-friendly map that ultimately appears in the iRobot HOME App. iRobot will not sell customer data and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. In the short term, the Roomba is already linked to both Google Assistant and Amazon Alexa, so that customers can control their robot with voice commands. iRobot believes robots and the mapping capabilities they provide will be vital in enabling the smart home. SOURCE: IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf, IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf",
        sources: "",
      },
      name: {
        query: "Does the device collect user name?",
        query_response:
          "It is unclear whether the device collects user name. No information was found in the provided content that directly answers the question.",
        sources: "N/A [Page: ]",
      },
      email: {
        query:
          "Does the device require the user to provide an email to create and account or register the device online? If yes then what is the email used for?",
        query_response:
          "Yes, the device requires the user to provide an email to create an account or register the device online. The email is used for account verification, to communicate directly with the user, to send information about orders, product sales, special offers, and new site features, and to send service-related emails or notifications. The email is also necessary for the performance of a contract between the user and iRobot. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Email account verification update | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      age: {
        query: "Does the device collect user age?",
        query_response:
          "It is unclear whether the device collects user age as there is no mention of age in the provided content. ",
        sources: "N/A [Page: ]",
      },
      phone: {
        query:
          "Does the device require the user to provide a phone number to create and account or register the device online? If yes then what is the phone number used for?",
        query_response:
          "The documents do not provide a clear answer to whether the device requires the user to provide a phone number to create an account or register the device online. There is no information about what the phone number would be used for. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0]",
      },
      geolocation: {
        query: "Does the device collect geolocation data?",
        query_response:
          "The device may collect geolocation data if the user agrees to have their map data viewable on their mobile device and if they connect to WiFi, Bluetooth, or the internet. However, the location mapping data is considered sensitive and confidential information and is not shared with third parties for marketing purposes. The data collected is encrypted and stored securely, and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. The iRobot Home app may collect approximate location data, app interactions, personal information such as name and email address, and app info and performance data such as crash logs and diagnostics. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      biometric: {
        query:
          "Do any of the devices collect any form of biometric data like face recognition scans, fingerprints, etc? If yes then specify which device does it and what does it use the biometric data for.",
        query_response:
          "None of the devices collect biometric data like face recognition scans or fingerprints. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ipAddress: {
        query: "Does any of the device collect user ipAddress?",
        query_response: "Yes, the device collects user ipAddress. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      socialAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to social media accounts? If yes then list the social media accounts that can be connected.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow you to connect to social media accounts. The privacy policies mention receiving personal information if users interact with their accounts on social networks, but do not specify which social media accounts can be connected. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      thirdPartyAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to any other third part accounts? If yes then list the third party accounts that can be connected.",
        query_response:
          "Yes, some third party services can collect information from the iRobot devices and companion apps, such as Amazon Alexa and Google Assistant. Other third parties that may receive personal information include social networks and third party vendors/service providers. However, the specific third party accounts that can be connected are not listed in the extracted content. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      voiceRecordings: {
        query:
          "Do any of the devices collect voice recordings? If yes then list the devices that collect voice recordings and what they use the voice recordings for.",
        query_response:
          'Yes, some of the devices collect voice recordings. The Samsung Jet Bot AI+ Robot Vacuum and Powerbot R7070 collect "recordings of your voice when you use voice commands to control a Service" (MIT Technology Review). The iRobot Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops also collect voice recordings when users share images via the mobile app (iRobot). It is unclear what these companies use the voice recordings for. ',
        sources: "MIT Technology Review [Page: ], iRobot [Page: ]",
      },
      videoRecordings: {
        query:
          "Do any of the devices collect video recordings? If yes then list the devices that collect video recordings and what they use the video recordings for.",
        query_response:
          "Yes, some of the devices collect video recordings. The iRobot Roomba J7 series and some models from LG and Samsung have cameras that collect video recordings for the purpose of training algorithms to recognize patterns and improve the robot's cleaning performance. The collected data is also used to build smarter robots whose purpose may go beyond vacuuming in the future. The iRobot Beta Program also collects and processes video recordings for testing new features and functionalities of the service. Consent is required for the collection of video recordings, and users have the option to opt-in or opt-out. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      roomMapping: {
        query:
          "Do any of the devices create a map of the room? If yes then list the devices that create a map of the room and what they use the map for.",
        query_response:
          'Yes, some of the devices create a map of the room. The devices that create a map of the room are Roomba e5, e6, 89x, 69x, 67x, 96x, i3/i1, i6, i7, i8, and s9. The map is used to determine the best way to clean based on the orientation of each room, furniture placement, etc. The Imprint Smart Maps also enable the user to clean or select a single room, multiple rooms, or an entire level of the floor all from the iRobot Home App. The user can also set up specific zones to clean. The technology which allows iRobot products to create a map is called vSLAM (visual Simultaneous Localization and Mapping). The robot looks for unique "landmarks" in the home and remembers where those landmarks are. Landmarks may be corners of a picture frame or window, a ceiling fan or recessed light, or similar feature on the wall or ceiling.',
        sources: "",
      },
      interactions: {
        query:
          "Do any of the devices collect user interactions with the device? If yes then list the devices that collect user interactions and what they use the interactions for.",
        query_response:
          "Yes, some of the devices collect user interactions with the device. The Roomba Robots equipped with smart technology collect information about the Robot and/or App usage, feature usage, in-App transactions, technical specifications, crashes, and other information about how you use your Robot and the product App. Additionally, the Robot collects information about its movement throughout the environment to create a location ‘map’ of the space accessible to the Robot. However, it is not specified what they use the interactions for.",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      behaviors: {
        query:
          "Do any of the device collect the users behavioral patterns? If yes then list the devices that collect behavioral patterns and what they use the patterns for.",
        query_response:
          "Yes, some of the devices collect users' behavioral patterns. The devices that collect behavioral patterns include iRobot Roomba and the information collected is used for enhancing and personalizing the user experience, carrying out interest-based advertising and marketing, monitoring and improving the website and service, and for other internal purposes. The specific types of information collected and the purposes for which they are used vary depending on the device and the features used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      analytics: {
        query:
          "Do any of the devices collect analytics data? If yes then list the devices that collect analytics data and what they use the data for.",
        query_response:
          "The iRobot Roomba devices and their associated apps collect usage and device information, including analytics data, which is used for various purposes such as improving the service and personalizing advertising. The iRobot SDK also collects data on which tools and services are being used and how they are being used, but this data is examined in the aggregate to improve the SDK and is maintained in accordance with Google's Privacy Policy. The iRobot Privacy Policy and Android App Copyright Licenses provide more details on the types of information collected and how it is used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      contactSync: {
        query:
          "Do any of the devices or their companion apps allow you to sync your contacts? If yes then list the devices that allow you to sync your contacts and what they use the contacts for.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow syncing of contacts and what they use the contacts for. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
    },
    connectivity: {
      cellular: {
        query: "Do any of the devices support/require cellular connectivity?",
        query_response:
          "The Roomba and Braava models listed in the document support/require Wi-Fi connectivity, but there is no mention of cellular connectivity. ",
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home on the App Store.pdf [Page: ]",
      },
      wifi: {
        query: "Do any of the devices support/require Wi-Fi connectivity?",
        query_response:
          'Some of the devices support/require Wi-Fi connectivity, while others do not. Please refer to the compatibility chart provided in the "Setting up your Wi-Fi Connected Robot with the iRobot HOME App" document to determine if your device supports Wi-Fi connectivity. ',
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0]",
      },
      bluetooth: {
        query: "Do any of the devices support/require Bluetooth connectivity?",
        query_response:
          "Yes, some of the devices support/require Bluetooth connectivity. The iRobot® HOME App uses Bluetooth to set up and connect the robot to the device, and the Braava jet™ 240 mopping robot uses Bluetooth Low Energy (BLE) built into most common mobile devices. ",
        sources:
          "IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0]",
      },
    },
    sharing: {
      thirdParty: {
        query:
          "Do any of the devices share/rent data with third parties? If yes then list the third parties that the devices share/rent data with and what kind of data do they share/rent.",
        query_response:
          "Yes, some of the devices share/rent data with third parties. The third parties that the devices share/rent data with include other companies owned by or under common ownership as iRobot, third party vendors, affiliates, and other service providers that perform services on iRobot's behalf, selected third parties who iRobot thinks may offer customers products or services they may enjoy, and third parties in connection with any company transaction. The kind of data that is shared/rented includes personal information, Wi-Fi connected robot performance data, and aggregated performance data about iRobot's robots. iRobot is committed to safeguarding the privacy of customer-related information and does not sell information about its customers to third parties. However, customers can choose to share data with third parties for their benefit if they so choose. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      categories: {
        query:
          "What type of information shared with third parties? List the categories of information shared with third parties.",
        query_response:
          "The categories of information shared with third parties include personal information for business purposes, aggregated and anonymous information, and information shared with third parties at the request of the user. Specific categories of personal information shared with third parties include information for targeted advertising, e-commerce services, content or service fulfillment, billing, website operation, payment processing and authorization, customer service, fraud prevention, web hosting, data storage, analytics services, and third-party app or service integration. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      purpose: {
        query:
          "What is the purpose of data sharing? Eg: research and/or product improvement",
        query_response:
          "The purpose of data sharing varies depending on the context. iRobot is committed to the absolute privacy of customer-related data, including data collected by their connected products, and will not sell customer data or share it with third parties without the customer's knowledge or control. Google supports data portability and prohibits certain actions with content returned from their APIs, including scraping, modifying, selling, and sublicensing to third parties. The terms of data sharing are dependent on the specific agreement or policy in place. ",
        sources:
          "IoT-Project/Roomba/Software Licenses | iRobot.pdf [Page: 528.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0]",
      },
      anonymized: {
        query: "Is the shared data anonymized?",
        query_response:
          "The data collected by iRobot's connected products is not anonymized, but it is encrypted and stored securely. However, customers can choose to share limited data to enable voice control of the robot using Amazon Alexa or Google Assistant. Customers can also decline to have their data shared, and iRobot will delete the data from their servers at the request of a customer. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      samePrivacy: {
        query: "Do third parties follow the same privacy practices?",
        query_response:
          "It depends on the specific third party and their relationship with iRobot. Some third parties may follow the same privacy practices, while others may have different practices. iRobot shares personal information with third parties in various instances, including for business purposes and to serve targeted advertisements based on online browsing history and interests. However, iRobot allows California residents to exercise certain rights, such as the right to know what personal information has been collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales. The lack of a comprehensive data privacy law in the United States means that privacy policies shape companies' legal responsibilities, and some policies may reserve the right to share data with select partners or service providers. The legal barriers for companies to collect data directly from consumers are fairly low, and most privacy policies do not even mention the audiovisual data being captured. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      contractLimits: {
        query: "Are there contractual limits on data usage by third parties?",
        query_response:
          'There are contractual limits on data usage by third parties, but the specifics depend on the individual agreements and policies of each company. Google\'s Privacy Policy states that data collected by their SDK is examined in the aggregate to improve the SDK and is maintained in accordance with their policy. The iRobot Privacy Policy states that they allow certain third-party advertising partners to collect information about users of their service for the purposes of serving more relevant ads, but all cookies that are not strictly necessary require prior opt-in consent from California consumers and do not involve "sales" of personal information. The iRobot Terms of Use Agreement also includes provisions for indemnification and limitations of liability for misuse of their APIs. However, the specifics of any contractual limits on data usage by third parties may vary depending on the company and the agreements in place. ',
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0,100.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      notification: {
        query:
          "Is the user notified in any form if their data is shared with third parties be it manually or automatically?",
        query_response:
          'Yes, the user is notified in some form if their data is shared with third parties, either manually or automatically. The Privacy Policy states that "No data will be shared with third parties without the customer\'s knowledge or control" and "All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers." Additionally, the policy outlines the right to know about personal information collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales to third parties. However, the policy also states that aggregated and anonymous information may be shared with others in a form that does not reasonably identify the user directly as an individual. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      reidentifying: {
        query:
          "Does the company actively take steps to prevent the identifying a specific user from the data they provide to third parties?",
        query_response:
          "The company does not sell customer data and takes steps to protect user information collected by API clients, including personally identifiable information, from unauthorized access or use. The company allows certain third-party advertising partners to collect information about users of the service for the purposes of serving ads that are more relevant, for ad campaign measurement and analytics, and for fraud detection and reporting. All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers, are loaded per the consumer’s instructions and preferences, and do not involve “sales” of personal information. The company complies with all applicable privacy laws and regulations including those applying to PII and provides and adheres to a privacy policy for API clients that clearly and accurately describes to users of the API client what user information is collected and how it is used and shared with Google and third parties. The company will not share data with third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties. If a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. Deleting the data is retroactive. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 94.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      transfer: {
        query:
          "Would the user information be transferred to another company in merger, acquisition, or bankruptcy?",
        query_response:
          "User information may be transferred to another company in a merger, acquisition, or bankruptcy, as well as in connection with any company transaction, such as a sale of all or a portion of company assets or shares, reorganization, financing, change of control or acquisition of all or a portion of the business by another company or third party, or in the event of bankruptcy or related or similar proceedings. User information may also be shared with third parties as required by law or to protect against harm to the rights, property, or safety of iRobot, its users, or the public. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    social: {
      verifiedUsers: {
        query: "Does the device support verified user accounts?",
        query_response:
          "There is no information provided about whether the device supports verified user accounts. ",
        sources: "N/A [Page: ]",
      },
      publicDisplay: {
        query: "Is the user's collected data publicly displayed in any form?",
        query_response:
          "The user's collected data may be publicly displayed on their mobile device if they agree to it, but it is not sold to third parties and cannot be shared without the customer's knowledge or control. Clean Map Reports are not shared with third parties. The data collected via the robot is not anonymized, but it is encrypted and stored securely. iRobot will delete the data from their servers at the request of a customer. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      moderated: {
        query:
          "Are user interactions with the device moderated in any form? Eg: content moderation",
        query_response:
          "For the first question, the contract is governed by English law. For the second question, there is no information provided about user interactions with the device being moderated or content moderation. For the third question, the president did not mention Michael Jackson. ",
        sources:
          "28-pl [Page: ], 0-pl [Page: ], 24-pl [Page: ], IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0]",
      },
      externalLinks: {
        query:
          "Do any of the devices display links to external websites or services either in their user interface or companion app?",
        query_response:
          "It is unclear whether any of the devices display links to external websites or services either in their user interface or companion app. The first source mentions links to third party websites, but it is not specified whether they are displayed in the user interface or companion app. The second source does not mention anything about links. The third source discusses data collection and usage from registered devices equipped with smart technology, but does not mention links. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      deleteFromThirdParty: {
        query:
          "Does the company allow for data which is collected by or shared with third parties to be deleted from the third parties?",
        query_response:
          "It is unclear whether the company allows for data which is collected by or shared with third parties to be deleted from the third parties. However, iRobot is committed to the absolute privacy of customer-related data, and no data is sold to third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties, and if a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. The company also allows California residents to exercise their rights to know, request deletion, and opt-out of personal information sales to third parties. iRobot does share personal information with third parties in certain instances, such as with other companies owned by or under common ownership as iRobot, third-party vendors and service providers, and at the request of the customer. The company may also share information with others in an aggregated and anonymous form that cannot reasonably identify the individual. However, the company may share personal information with law enforcement, regulators, and other parties for legal reasons. It is important to note that iRobot does not control the data collection and use practices of third-party apps and services that interact with their robots. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    tracking: {
      targetAds: {
        query: "Does the device track the users for targeted ads?",
        query_response:
          "The device tracks users for targeted ads using cookies and other tracking technologies, but users can control their advertising preferences or opt-out of certain advertising products. The use of cookies and tracking technologies may negatively impact the user's experience on the service. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      profiles: {
        query:
          "Do any of the devices or their companion app maintain a profile of the user which includes all the data collected about the user?",
        query_response:
          "Based on the extracted parts of the documents, it appears that some of the devices and their companion app collect personal information about the user, including data about their device usage, location, and preferences. However, it is unclear whether any of these devices or apps maintain a profile of the user which includes all the data collected about them. It is recommended to review the privacy policies and terms of service for each specific device and app to determine how user data is handled and stored. ",
        sources:
          "IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      filtered: {
        query: "Can ads be filtered?",
        query_response:
          "Yes, ads can be filtered and users have control over their advertising preferences and can opt-out of certain advertising products. Users can also manage their cookie settings to control the collection of information. However, some features and services on the website may not work properly if cookies are disabled. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      doNotTrack: {
        query: "Can users opt-out of ads? Eg: Do not Track mechanism",
        query_response:
          "Users can opt-out of ads through various mechanisms such as the Digital Advertising Alliance (DAA)’s self-regulatory opt-out page, European Interactive Digital Advertising Alliance (EDAA)’s consumer opt-out page, and Network Advertising Initiative (NAI)’s self-regulatory opt-out page. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The iRobot website also allows users to manage their advertising preferences and opt-out of certain Google advertising products. Additionally, users can limit certain interest-based mobile advertising through the settings on their mobile device. The iRobot website also provides information on how to manage and delete cookies. However, the website is unable to respond to Do Not Track signals set by the user's browser at this time. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    controls: {
      createContent: {
        query:
          "Do any of the devices allow users to use it as a medium for content creation? If yes then list the devices that allow users to create content and what kind of content can be created using them.",
        query_response:
          "The documents do not provide information about devices that allow users to create content. ",
        sources:
          "IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ownership: {
        query:
          "Do users retain ownership of their content they create using the device?",
        query_response:
          "The answer cannot be determined from the given content. There is no clear mention of a device or ownership of content created using a device. ",
        sources: "N/A [Page: ]",
      },
      access: {
        query:
          "Can users access their data which the device has collected from them?",
        query_response:
          "Users can choose to share their data with third-parties for their benefit, but no data is sold to third-parties without the customer's knowledge or control. iRobot will delete the data from their servers at the request of a customer. Roomba consumers can decline to have their data shared and can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via the robot is not anonymized, but it is encrypted and stored securely. However, the content does not provide a clear answer to whether users can access their data which the device has collected from them. The other content pieces are not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      dataModify: {
        query:
          "Can users modify their data which the device has collected from them?",
        query_response:
          "Users can decline to have their data shared with their mobile device, and they can also opt-out of sending map data to the Cloud through a switch in the mobile app. However, the content does not provide information on whether users can modify their data which the device has collected from them. The other content is not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      retention: {
        query:
          "What is the data retention policy for the data collected by the device from the user?",
        query_response:
          "There is no clear answer about the data retention policy for the data collected by the device from the user. The available information only mentions data collection and sharing practices, as well as security measures. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      dataDelete: {
        query:
          "Can users delete the data which the device has collected from them if they want to?",
        query_response:
          "Yes, Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app, and iRobot® will delete the data from their servers at the request of a customer. Clean Map™ Reports are not shared with third parties. No data is sold to third parties, and no data will be shared with third parties without the customer's knowledge or control. However, the content does not mention whether users can delete the data which the device has collected from them if they want to. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], and A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: ]",
      },
      termination: {
        query:
          "Is user data deleted upon account cancellation or termination of their account?",
        query_response:
          "The documents do not provide a clear answer to whether user data is deleted upon account cancellation or termination of their account. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 33.0,99.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      restrictAccess: {
        query: "Can users restrict access to their data?",
        query_response:
          "Users must protect the privacy and legal rights of those users and provide legally adequate privacy notice and protection for those users. If an application stores personal or sensitive information provided by users, it must do so securely. Users must comply with all applicable privacy laws and regulations including those applying to personally identifiable information (PII) and provide and adhere to a privacy policy for their API Client that clearly and accurately describes to users of their API Client what user information they collect and how they use and share such information (including for advertising) with Google and third parties. Users may not sublicense an API for use by a third party or create an API Client that functions substantially the same as the APIs and offer it for use by third parties. Users may not perform an action with the intent of introducing to Google products and must ensure that they have the necessary rights (including the necessary rights from their end users) to grant Google the license. When a user's non-public content is obtained through the APIs, users may not retrieve it. Companies must implement privacy- and security-protecting measures in their customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that they collect. However, there is a wide gap between the way companies talk about privacy and the way consumers understand it. It is easy to conflate privacy with security, but data security refers to a product’s physical and cyber security, or how vulnerable it is to a hack or intrusion, while data privacy is about transparency—knowing and being able to control the data that companies have, how it is used, why it is shared, whether and for how long it’s retained, and how much a company is collecting to start with. Company representatives sometimes use subtle differences, like the distinction between “sharing” data and selling it, that make how they handle privacy particularly hard for non-experts to parse. When a company says it will never sell a user's data, that does not mean it will not use it or share it with others for analysis. Developers are not traditionally very good at security and privacy, and their attitude becomes \"Try to get the functionality, and if the functionality is working, ship the product. And then the scandals come out.\" ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,94.0,96.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      download: {
        query:
          "Can users download the data which the device has collected from them?",
        query_response:
          "Roomba® consumers can decline to have their data shared. Customers need not connect a Wi-Fi connected Roomba® to the internet for it to work - it can work in offline mode with no internet or Cloud connectivity. Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via my robot is not anonymized, but it is encrypted and stored securely. iRobot® will delete the data from their servers at the request of a customer. However, there is no information about whether users can download the data which the device has collected from them. The Android App Copyright Licenses state that if you use any API to retrieve data from Google, you acknowledge that the data may be protected by intellectual property rights which are owned by Google or those parties that provide the data (or by other persons or companies on their behalf). Your use of any such API may be subject to additional Terms of Service. You may not modify, rent, lease, loan, sell, distribute or create derivative works based on this data (either in whole or in part) unless allowed by the Terms of Service. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      privacySettings: {
        query:
          "Are there privacy settings available? If yes then list what kind of privacy settings are available and their purpose",
        query_response:
          "Yes, there are privacy settings available. Users can set their email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether the user has accessed their email and performed certain functions with it. Users can also opt-out of interest-based advertising by participating companies through various consumer choice mechanisms. The company honors the privacy preferences of its users but is unable to respond to Do Not Track signals set by the user's browser at this time. The company collects various types of personal information, and users can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes. The company's privacy policy also includes information on data collection, sharing, and security practices. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      limitedUse: {
        query: "Can users limit the use of their data?",
        query_response:
          "Users can limit the use of their data by withholding consent for data collection or opting out of sharing data with their mobile device. They can also set email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether they have accessed the email and performed certain functions with it. Additionally, users can opt-out of interest-based advertising through various consumer choice mechanisms. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The company is unable to respond to Do Not Track signals set by the browser at this time. For mobile users, there are controls in the device Operating System that enable them to choose whether to allow cookies or share their advertising ID with companies like iRobot or their advertising service providers. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,32.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combineThirdParty: {
        query:
          "Is data combined with data from other third-parties? This may be done for purposes such as analytics, advertising, etc.",
        query_response:
          "Yes, data may be combined with data from other third-parties for purposes such as analytics and advertising. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combinedPii: {
        query:
          "Is personally identifiable information combined with other data? If yes then how is this combined data used and treated?",
        query_response:
          "Yes, personally identifiable information may be combined with other data. If combined, the information will be treated as personal information. The combined data is used for various purposes such as enhancing and personalizing user experience, interest-based advertising and marketing, monitoring and improving the website and service, and developing new products and features. The specific use and treatment of combined data may vary depending on the type of information being combined. ",
        sources: "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    consent: {
      change: {
        query: "Can users change their consent?",
        query_response:
          "It is unclear whether users can change their consent based on the given content. ",
        sources: "N/A [Page: ]",
      },
      grievance: {
        query: "Is there a grievance redressal mechanism?",
        query_response:
          "There is a grievance redressal mechanism through arbitration. ",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      legalRequest: {
        query:
          "Does the company have a procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity?",
        query_response:
          "It is unclear whether the company has a specific procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity as the provided content does not directly address this question. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 1.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      optIn: {
        query:
          "Can users opt-in to sharing their data with the company and/or third parties?",
        query_response:
          "It depends on the specific context and service. In general, users may be able to opt-in to sharing their data with the company and/or third parties, but this may require prior, opt-in consent and may vary depending on the specific service and location of the user. iRobot states that they do not sell customer data and are committed to the privacy of their customer-related data, but they may share personal information with other companies owned by or under common ownership as iRobot, third party vendors and service providers, and selected third parties who may offer products or services that users may enjoy. Users may also have the right to request deletion of personal information and opt-out of personal information sales to third parties. However, iRobot is unable to respond to Do Not Track signals set by users' browsers at this time. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      optOut: {
        query:
          "Can users opt-out of sharing their data with the company and/or third parties?",
        query_response:
          'Yes, users can opt-out of sharing their data with the company and/or third parties. Users can disable cookies or set their browser to automatically reject cookies, and can control their communication preferences through the "My Account" page on the website or app. Additionally, iRobot does not sell personal information. For California residents, they have the right to know what personal information has been collected and disclosed, request deletion of personal information, and opt-out of personal information sales to third parties. Sources: IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf, IoT-Project/Roomba/Privacy Policy | iRobot.pdf.',
        sources: "",
      },
      copyright: {
        query: "How are copyright claims to user data handled?",
        query_response:
          "The handling of copyright claims to user data is addressed in the terms and conditions of the APIs and software licenses, including provisions for data portability, prohibitions on certain uses of content, and liability limitations. The specific handling of copyright claims may vary depending on the applicable laws and agreements. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 77.0,96.0,97.0], IoT-Project/Roomba/Copyright Licenses | iRobot.pdf [Page: 570.0]",
      },
      legacy: {
        query:
          "Can users assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death?",
        query_response:
          "There is no information provided about whether users can assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death.",
        sources: "N/A [Page: ]",
      },
      parental: {
        query:
          "Is parental consent required before children's data is collected or disclosed?",
        query_response:
          "Yes, parental consent is required before children's data is collected or disclosed. The Services are not directed to persons under 13 and iRobot does not intentionally collect or maintain information from persons under 13. If personal information about a person under 16 has been provided to iRobot, they request immediate contact. Source: IoT-Project/Roomba/Privacy Policy | iRobot.pdf",
        sources: "",
      },
    },
    security: {
      identity: {
        query:
          "Does the device or company verify the identity of their using using official documents?",
        query_response:
          "There is no clear answer to the question of whether the device or company verifies the identity of their users using official documents. The provided content discusses topics such as software security, registration, compliance with laws and regulations, and privacy protection, but does not directly address the verification of identity using official documents. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,86.0,92.0]",
      },
      accountCreation: {
        query:
          "Does the user need to create an account with the company in order to use the device? If any device can be used without creating an account then list them.",
        query_response:
          "It is unclear whether the user needs to create an account with the company in order to use the device. No information is provided about devices that can be used without creating an account.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      managedAccounts: {
        query:
          "Does the company or device support managed accounts i.e. accounts which are managed by a parent or guardian?",
        query_response:
          "The provided documents do not contain information about whether the company or device supports managed accounts. ",
        sources: "N/A [Page: ]",
      },
      multiFactor: {
        query:
          "Does the accoiunt created by the user with the company to use the device support multi-factor authentication?",
        query_response:
          "The provided documents do not contain information about whether the account created by the user with the company to use the device supports multi-factor authentication.",
        sources: "N/A [Page: ]",
      },
      employeeAccess: {
        query:
          "Do the company employees have access to the data collected by the device from the user? If yes then what kind of access do they have?",
        query_response:
          "It is unclear from the given content whether or not company employees have access to the data collected by the device from the user and what kind of access they have. However, iRobot has implemented privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. Customers can also choose to opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected by robot vacuums can be particularly invasive, and companies often use vague language in their privacy policies that give them broad discretion in how they disseminate and analyze consumer information. It is important for consumers to understand the distinction between data security and data privacy and to be aware of the data that companies are collecting and how it is being used. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      dataTransit: {
        query: "Is data encrypted in transit?",
        query_response:
          "Yes, data is encrypted both in transit and at rest for iRobot connected products. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      dataStorage: {
        query: "Is data encrypted when stored?",
        query_response:
          "Yes, data is encrypted both in transit and at rest. iRobot takes a defense-in-depth approach to security, adding multiple layers of protection around their robots, cloud, and apps from start to finish. They ensure that the development of their products follows industry-standard security best practices, and they are using technology-leading tools to assist their development and security teams during this process. When deployed to market, they work with their suppliers and partners to ensure that their products and their suppliers' and partners' supporting infrastructure (including physical infrastructure, cloud, and mobile apps) are properly configured, monitored, and continuous security improvement processes are in place. Within iRobot’s cloud (built on top of AWS), customer data is stored encrypted. Customer data has multiple encryption keys which are rotated on a regular basis to reduce the risk of the data being compromised even in the event of a key exposure. Within the mobile application, data storage follows the platform’s standards for application-secure data; any sensitive data that is used by the application is not stored on the mobile device, but is instead securely transported to iRobot’s cloud for storage. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      breachNotice: {
        query:
          "Is there a notice provided to the user if any of the data collected from them is exposed in a data breach?",
        query_response:
          "There is no clear mention of whether a notice is provided to the user if any of the data collected from them is exposed in a data breach.",
        sources: "None provided. [Page: ]",
      },
      storageLocation: {
        query: "Where is data stored?",
        query_response:
          "For the first question, the state/country's law that governs the interpretation of the contract is English law (SOURCE: 28-pl). For the second question, there is no mention of Michael Jackson in the given content (SOURCE: N/A). For the third question, data is stored securely in iRobot's cloud for storage and is not stored on the mobile device (SOURCE: IoT-Project/Roomba/Data Security | iRobot.pdf).",
        sources: "",
      },
      storageDuration: {
        query: "How long is data stored?",
        query_response:
          "The length of time that personal information is stored varies based on the purposes set out in Annex 2 and in accordance with legal obligations and legitimate business interests. Data held by iRobot will only be used consistent with the relevant and applicable legal requirements of the country in which the personal information is collected. The data collected from iRobot products is encrypted both in transit and at rest, and data access is controlled strictly and limited only to authorized personnel to do their job and help improve product experiences. The Roomba 900 Series, i Series, j series, s Series Robot Vacuums and the Braava jet m Series Robot Mop build a map of a home as they clean, and Clean Map reports make these maps visible to customers in the iRobot HOME App after a cleaning job is complete, showing total area and duration a Roomba 900 Series, i Series, j series, or s Series vacuum cleaned—for up to 30 cleaning jobs. If a customer chooses to send map data to the Cloud, Dirt Detect events are stored in the Cloud and sent to the App when the Clean Map is rendered. Customers with Wi-Fi connected Robot Vacuums and Robot Mops are not required to connect to the Cloud to use their robot. The robot can be used in offline mode with no connection to the internet or Cloud. Customers with Wi-Fi connected Robot vacuums and Robot Mops who do not connect them to the internet will not be able to access certain features, like scheduled cleanings, customized cleaning features, Clean Map reports, and connections to voice control systems like Amazon Alexa and Google Assistant. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      vulnerabilities: {
        query:
          "Are there any known vulneranbilites associated with any of the devices listed in the CVE database? If yes then list the devices and their vulnerabilities.",
        query_response:
          "There is no information provided in the given content about any known vulnerabilities associated with the devices listed in the CVE database.",
        sources: "N/A [Page: ]",
      },
      securityUpdates: {
        query: "How long are security updates provided for the devices?",
        query_response:
          "The document does not provide a clear answer to the question of how long security updates are provided for the devices. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      passwordComplexity: {
        query:
          "Are their any password complexity requirements for the account used to use the device? If yes then what are they?",
        query_response:
          "There is no information provided about password complexity requirements for the account used to use the device.",
        sources: "N/A [Page: ]",
      },
    },
    privacyCompliance: {
      complianceAudits: {
        query:
          "Do the devices and their parent company undergo regular industry standard compliance audits with respect to privacy and security?",
        query_response:
          'iRobot has implemented many privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. They also have a Data Privacy Policy and a Data Security Policy. However, the article also highlights the gap between how companies talk about privacy and how consumers understand it, and the vague language in privacy policies that permit companies to use data for the purposes of "improving products and services." It is unclear if iRobot undergoes regular industry standard compliance audits with respect to privacy and security. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      defaultPrivacy: {
        query:
          "What are the default privacy controls for data collected by the device? Does it have data collection enabled by default?",
        query_response:
          "For the iRobot Roomba, the privacy policy states that data collection is enabled by default, but users can opt-out of specific features that require opt-in. iRobot does not sell customer data and has implemented privacy and security measures in its devices, including encryption, regular security vulnerability patching, and limiting employee access to information. The Roomba collects mapping and navigation information via VSLAM, and usage data can be sent to the cloud to be shown on the customer's mobile device. Images used for navigation are not sent to the cloud. However, there is a gap between how companies talk about privacy and how consumers understand it, and privacy policies often contain broad language permitting the use of data for improving products and services. It is also important to note that manufacturers recognize the privacy risks presented by on-device cameras and must prioritize privacy and security. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      calOPPA: {
        query:
          "Do any of the devices comply with the California Online Privacy Protection Act (CalOPPA)?",
        query_response:
          "Based on the information provided, it is unclear whether any of the devices comply with the California Online Privacy Protection Act (CalOPPA). The privacy policies mention compliance with the California Consumer Privacy Act (CCPA) but do not specifically mention CalOPPA. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      coppa: {
        query:
          "Do any of the devices comply with the Children's Online Privacy Protection Act (COPPA)?",
        query_response:
          "It is unclear whether any of the devices comply with the Children's Online Privacy Protection Act (COPPA) based on the provided content. ",
        sources: "None provided. [Page: ]",
      },
      ferpa: {
        query:
          "Do any of the devices comply with the Family Educational Rights and Privacy Act (FERPA)?",
        query_response:
          "There is no clear information provided about whether any of the devices comply with the Family Educational Rights and Privacy Act (FERPA).",
        sources: "N/A [Page: ]",
      },
      gdpr: {
        query:
          "Do any of the devices comply with the General Data Protection Regulation (GDPR)?",
        query_response:
          "It is unclear whether any of the devices comply with the General Data Protection Regulation (GDPR) as there is no mention of GDPR compliance in the provided content. ",
        sources: "None provided. [Page: ]",
      },
      policyVersion: {
        query: "What is the version or effective date of the privacy policy?",
        query_response:
          "The version or effective date of the privacy policy is May 25, 2018.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0,1.0]",
      },
      policyChangeLog: {
        query: "Do privacy policies indicate a change log?",
        query_response:
          "It is possible for privacy policies to indicate a change log, but it is not a requirement. The reviewed privacy policies did not mention a change log. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyUpdateNotification: {
        query: "Are users notified when the privacy policies are updated?",
        query_response:
          "It depends on the company. Some companies, such as iRobot, mention updates to their privacy policy in their policy document, but it is not a requirement. It is important for users to regularly check the privacy policies of the companies they interact with to stay informed of any changes. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyCoverage: {
        query: "Do privacy policies indicate which products are covered?",
        query_response:
          "The privacy policies do not explicitly indicate which products are covered, but they do outline the company's approach to data privacy and security. The iRobot privacy policy specifically mentions their commitment to safeguarding the privacy of customer-related information, including data collected by their connected products. They also state that they do not sell information about their customers to third parties and have implemented privacy- and security-protecting measures in their customer devices. The HR privacy policy outlines how iRobot collects, stores, processes, transfers, shares, and uses personal information of their employees, but does not mention specific products. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyContact: {
        query:
          "How can users contact the company about privacy policy questions, complaints, or material changes?",
        query_response:
          'Users can contact the company about privacy policy questions, complaints, or material changes by contacting them at global.irobot.com or by writing to them at iRobot Corporation 8 Crosby Drive Bedford, MA 01730. They can also contact the company if they have an unresolved privacy or data use concern that has not been addressed satisfactorily by using the U.S.-based third party dispute resolution provider at https://feedback-form.truste.com/watchdog/request. California residents can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes by writing to iRobot Corporation 8 Crosby Drive Bedford, MA 01730 or by sending an email to global.irobot.com with the words "California Privacy Rights" in the subject line. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      policyPrinciples: {
        query: "Do privacy policies indicate privacy principles?",
        query_response:
          'Privacy policies may contain information about how companies collect, store, process, transfer, share, and use personal information, but they may not necessarily indicate privacy principles. Privacy policies shape companies\' legal responsibilities, but there is a wide gap between the way companies talk about privacy and the way consumers understand it. Privacy policies often contain language permitting the use of data for the purposes of "improving products and services," which is broad enough to permit basically anything. Companies may use subtle differences, like the distinction between "sharing" data and selling it, that make how they handle privacy particularly hard for non-experts to parse. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyLanguages: {
        query:
          "Are privacy policies available in multiple languages? List the languages the privacy policy is available in",
        query_response:
          "It is not specified in the provided content whether the privacy policy is available in multiple languages.",
        sources: "N/A [Page: ]",
      },
      prohibitedActivities: {
        query:
          "Are there any prohibited activities that may lead to account termination?",
        query_response:
          "Yes, there are prohibited activities that may lead to account termination, including but not limited to defaming, abusing, harassing, stalking, or threatening others, promoting or facilitating unlawful online gambling or disruptive commercial messages or advertisements, and using the APIs for activities where the use or failure of the APIs could lead to death, personal injury, or environmental damage. The Terms also state that Google reserves the right to terminate the Terms with the user or discontinue the APIs or any portion or feature or the user's access thereto for any reason and at any time without liability or other obligation to the user. ",
        sources:
          "IoT-Project/Roomba/Code of Business Conduct and Ethics (2021).pdf [Page: 12.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0,95.0,99.0]",
      },
      classActionWaiver: {
        query:
          "Are users required to waive the right to join a class-action lawsuit?",
        query_response:
          "Yes, users are required to waive the right to join a class-action lawsuit.",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      internationalData: {
        query:
          "Are user data subject to international data transfer or jurisdiction laws?",
        query_response:
          "User data may be subject to international data transfer or jurisdiction laws, and may be accessible to law enforcement and regulatory authorities in accordance with the laws of other jurisdictions. The specific laws governing international data transfer or jurisdiction are not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    intendedUsers: {
      children: {
        query: "Is the device intended for use by children under 13?",
        query_response:
          "The device can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      teens: {
        query: "Is the device intended for use by teens?",
        query_response:
          "The device is intended for use by children aged from 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/H1 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      adults: {
        query: "Is the device intended for use by adults over 18?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. However, it is not specified whether the devices are intended for use by adults over 18.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      parents: {
        query:
          "Is the device intended for use under parent or guardian supervision?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory, or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0]",
      },
    },
  },
  {
    name: "Ring-camera",
    brand: "iRobot",
    category: "Vacuum Cleaner",
    image: "https://example.com/path/to/roomba/image.jpg",
    usage: {
      faq: {
        query:
          "Create a list of 5 frequently asked questions about the devices. Also provide responses to these questions.",
        query_response:
          "1. How do I activate the battery of my Roomba® robot vacuum?\nA: Place the robot on the Home Base to activate the battery. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n2. How can I pair my Roomba® robot vacuum with other smart devices?\nA: You can find tricks and answers to commonly asked questions, including how to pair your Roomba® robot vacuum with other smart devices in the owner's guide. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n3. Where can I find information about scheduling Roomba?\nA: You can find information about scheduling Roomba in the owner's manual. (IoT-Project/Roomba/500 Owner's Manual.pdf)\n\n4. How does Braava clean?\nA: You can find information about how Braava cleans in the owner's manual. (IoT-Project/Roomba/300 Series Owner’s Manual.pdf)\n\n5. Where can I find a quick start guide for the 300 Series Roomba?\nA: You can find a quick start guide for the 300 Series Roomba on global.irobot.com. (IoT-Project/Roomba/300 Series Quick Start Guide.pdf)",
        sources:
          "IoT-Project/Roomba/e6 Owner’s Guide.pdf [Page: 5.0], IoT-Project/Roomba/500 Owner's Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Owner’s Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Quick Start Guide.pdf [Page: 0.0]",
      },
      pii: {
        query: "Does the device collect personally identifiable information?",
        query_response:
          "The device collects personal information, including information about the Robot and/or App usage, device data, and Robot customization settings and preferences. However, some personal information is stored separately from deidentified Robot data, and users can control the collection of usage data by disconnecting their Robot from Wi-Fi or Bluetooth via the App. The specific mention of personally identifiable information is not found in the given content. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      camera: {
        query: "Does the device have a camera?",
        query_response:
          "Some robot vacuums have front-facing cameras for navigation and object recognition, as well as home monitoring. iRobot, Ecovacs, and Roborock are among the companies that have incorporated cameras into their devices. However, it is unclear if the specific device in question has a camera as it is not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], WebAPI- Privacy Policy | iRobot.pdf [Page: ]",
      },
      microphone: {
        query:
          "Do any of the devices have a microphone? If yes then list these devices and what they use the microphone for.",
        query_response:
          "The Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops create home mapping data and capture mapping and navigation information via VSLAM, which stays on the robot. Some usage data is sent to the Cloud, but the robot does not send images used for navigation to the Cloud. If a user agrees to have their map data viewable on their mobile device, then the map that the robot creates during a cleaning job is sent to the Cloud, where it is processed and simplified to produce a user-friendly map that ultimately appears in the iRobot HOME App. iRobot will not sell customer data and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. In the short term, the Roomba is already linked to both Google Assistant and Amazon Alexa, so that customers can control their robot with voice commands. iRobot believes robots and the mapping capabilities they provide will be vital in enabling the smart home. SOURCE: IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf, IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf",
        sources: "",
      },
      name: {
        query: "Does the device collect user name?",
        query_response:
          "It is unclear whether the device collects user name. No information was found in the provided content that directly answers the question.",
        sources: "N/A [Page: ]",
      },
      email: {
        query:
          "Does the device require the user to provide an email to create and account or register the device online? If yes then what is the email used for?",
        query_response:
          "Yes, the device requires the user to provide an email to create an account or register the device online. The email is used for account verification, to communicate directly with the user, to send information about orders, product sales, special offers, and new site features, and to send service-related emails or notifications. The email is also necessary for the performance of a contract between the user and iRobot. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Email account verification update | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      age: {
        query: "Does the device collect user age?",
        query_response:
          "It is unclear whether the device collects user age as there is no mention of age in the provided content. ",
        sources: "N/A [Page: ]",
      },
      phone: {
        query:
          "Does the device require the user to provide a phone number to create and account or register the device online? If yes then what is the phone number used for?",
        query_response:
          "The documents do not provide a clear answer to whether the device requires the user to provide a phone number to create an account or register the device online. There is no information about what the phone number would be used for. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0]",
      },
      geolocation: {
        query: "Does the device collect geolocation data?",
        query_response:
          "The device may collect geolocation data if the user agrees to have their map data viewable on their mobile device and if they connect to WiFi, Bluetooth, or the internet. However, the location mapping data is considered sensitive and confidential information and is not shared with third parties for marketing purposes. The data collected is encrypted and stored securely, and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. The iRobot Home app may collect approximate location data, app interactions, personal information such as name and email address, and app info and performance data such as crash logs and diagnostics. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      biometric: {
        query:
          "Do any of the devices collect any form of biometric data like face recognition scans, fingerprints, etc? If yes then specify which device does it and what does it use the biometric data for.",
        query_response:
          "None of the devices collect biometric data like face recognition scans or fingerprints. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ipAddress: {
        query: "Does any of the device collect user ipAddress?",
        query_response: "Yes, the device collects user ipAddress. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      socialAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to social media accounts? If yes then list the social media accounts that can be connected.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow you to connect to social media accounts. The privacy policies mention receiving personal information if users interact with their accounts on social networks, but do not specify which social media accounts can be connected. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      thirdPartyAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to any other third part accounts? If yes then list the third party accounts that can be connected.",
        query_response:
          "Yes, some third party services can collect information from the iRobot devices and companion apps, such as Amazon Alexa and Google Assistant. Other third parties that may receive personal information include social networks and third party vendors/service providers. However, the specific third party accounts that can be connected are not listed in the extracted content. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      voiceRecordings: {
        query:
          "Do any of the devices collect voice recordings? If yes then list the devices that collect voice recordings and what they use the voice recordings for.",
        query_response:
          'Yes, some of the devices collect voice recordings. The Samsung Jet Bot AI+ Robot Vacuum and Powerbot R7070 collect "recordings of your voice when you use voice commands to control a Service" (MIT Technology Review). The iRobot Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops also collect voice recordings when users share images via the mobile app (iRobot). It is unclear what these companies use the voice recordings for. ',
        sources: "MIT Technology Review [Page: ], iRobot [Page: ]",
      },
      videoRecordings: {
        query:
          "Do any of the devices collect video recordings? If yes then list the devices that collect video recordings and what they use the video recordings for.",
        query_response:
          "Yes, some of the devices collect video recordings. The iRobot Roomba J7 series and some models from LG and Samsung have cameras that collect video recordings for the purpose of training algorithms to recognize patterns and improve the robot's cleaning performance. The collected data is also used to build smarter robots whose purpose may go beyond vacuuming in the future. The iRobot Beta Program also collects and processes video recordings for testing new features and functionalities of the service. Consent is required for the collection of video recordings, and users have the option to opt-in or opt-out. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      roomMapping: {
        query:
          "Do any of the devices create a map of the room? If yes then list the devices that create a map of the room and what they use the map for.",
        query_response:
          'Yes, some of the devices create a map of the room. The devices that create a map of the room are Roomba e5, e6, 89x, 69x, 67x, 96x, i3/i1, i6, i7, i8, and s9. The map is used to determine the best way to clean based on the orientation of each room, furniture placement, etc. The Imprint Smart Maps also enable the user to clean or select a single room, multiple rooms, or an entire level of the floor all from the iRobot Home App. The user can also set up specific zones to clean. The technology which allows iRobot products to create a map is called vSLAM (visual Simultaneous Localization and Mapping). The robot looks for unique "landmarks" in the home and remembers where those landmarks are. Landmarks may be corners of a picture frame or window, a ceiling fan or recessed light, or similar feature on the wall or ceiling.',
        sources: "",
      },
      interactions: {
        query:
          "Do any of the devices collect user interactions with the device? If yes then list the devices that collect user interactions and what they use the interactions for.",
        query_response:
          "Yes, some of the devices collect user interactions with the device. The Roomba Robots equipped with smart technology collect information about the Robot and/or App usage, feature usage, in-App transactions, technical specifications, crashes, and other information about how you use your Robot and the product App. Additionally, the Robot collects information about its movement throughout the environment to create a location ‘map’ of the space accessible to the Robot. However, it is not specified what they use the interactions for.",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      behaviors: {
        query:
          "Do any of the device collect the users behavioral patterns? If yes then list the devices that collect behavioral patterns and what they use the patterns for.",
        query_response:
          "Yes, some of the devices collect users' behavioral patterns. The devices that collect behavioral patterns include iRobot Roomba and the information collected is used for enhancing and personalizing the user experience, carrying out interest-based advertising and marketing, monitoring and improving the website and service, and for other internal purposes. The specific types of information collected and the purposes for which they are used vary depending on the device and the features used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      analytics: {
        query:
          "Do any of the devices collect analytics data? If yes then list the devices that collect analytics data and what they use the data for.",
        query_response:
          "The iRobot Roomba devices and their associated apps collect usage and device information, including analytics data, which is used for various purposes such as improving the service and personalizing advertising. The iRobot SDK also collects data on which tools and services are being used and how they are being used, but this data is examined in the aggregate to improve the SDK and is maintained in accordance with Google's Privacy Policy. The iRobot Privacy Policy and Android App Copyright Licenses provide more details on the types of information collected and how it is used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      contactSync: {
        query:
          "Do any of the devices or their companion apps allow you to sync your contacts? If yes then list the devices that allow you to sync your contacts and what they use the contacts for.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow syncing of contacts and what they use the contacts for. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
    },
    connectivity: {
      cellular: {
        query: "Do any of the devices support/require cellular connectivity?",
        query_response:
          "The Roomba and Braava models listed in the document support/require Wi-Fi connectivity, but there is no mention of cellular connectivity. ",
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home on the App Store.pdf [Page: ]",
      },
      wifi: {
        query: "Do any of the devices support/require Wi-Fi connectivity?",
        query_response:
          'Some of the devices support/require Wi-Fi connectivity, while others do not. Please refer to the compatibility chart provided in the "Setting up your Wi-Fi Connected Robot with the iRobot HOME App" document to determine if your device supports Wi-Fi connectivity. ',
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0]",
      },
      bluetooth: {
        query: "Do any of the devices support/require Bluetooth connectivity?",
        query_response:
          "Yes, some of the devices support/require Bluetooth connectivity. The iRobot® HOME App uses Bluetooth to set up and connect the robot to the device, and the Braava jet™ 240 mopping robot uses Bluetooth Low Energy (BLE) built into most common mobile devices. ",
        sources:
          "IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0]",
      },
    },
    sharing: {
      thirdParty: {
        query:
          "Do any of the devices share/rent data with third parties? If yes then list the third parties that the devices share/rent data with and what kind of data do they share/rent.",
        query_response:
          "Yes, some of the devices share/rent data with third parties. The third parties that the devices share/rent data with include other companies owned by or under common ownership as iRobot, third party vendors, affiliates, and other service providers that perform services on iRobot's behalf, selected third parties who iRobot thinks may offer customers products or services they may enjoy, and third parties in connection with any company transaction. The kind of data that is shared/rented includes personal information, Wi-Fi connected robot performance data, and aggregated performance data about iRobot's robots. iRobot is committed to safeguarding the privacy of customer-related information and does not sell information about its customers to third parties. However, customers can choose to share data with third parties for their benefit if they so choose. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      categories: {
        query:
          "What type of information shared with third parties? List the categories of information shared with third parties.",
        query_response:
          "The categories of information shared with third parties include personal information for business purposes, aggregated and anonymous information, and information shared with third parties at the request of the user. Specific categories of personal information shared with third parties include information for targeted advertising, e-commerce services, content or service fulfillment, billing, website operation, payment processing and authorization, customer service, fraud prevention, web hosting, data storage, analytics services, and third-party app or service integration. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      purpose: {
        query:
          "What is the purpose of data sharing? Eg: research and/or product improvement",
        query_response:
          "The purpose of data sharing varies depending on the context. iRobot is committed to the absolute privacy of customer-related data, including data collected by their connected products, and will not sell customer data or share it with third parties without the customer's knowledge or control. Google supports data portability and prohibits certain actions with content returned from their APIs, including scraping, modifying, selling, and sublicensing to third parties. The terms of data sharing are dependent on the specific agreement or policy in place. ",
        sources:
          "IoT-Project/Roomba/Software Licenses | iRobot.pdf [Page: 528.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0]",
      },
      anonymized: {
        query: "Is the shared data anonymized?",
        query_response:
          "The data collected by iRobot's connected products is not anonymized, but it is encrypted and stored securely. However, customers can choose to share limited data to enable voice control of the robot using Amazon Alexa or Google Assistant. Customers can also decline to have their data shared, and iRobot will delete the data from their servers at the request of a customer. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      samePrivacy: {
        query: "Do third parties follow the same privacy practices?",
        query_response:
          "It depends on the specific third party and their relationship with iRobot. Some third parties may follow the same privacy practices, while others may have different practices. iRobot shares personal information with third parties in various instances, including for business purposes and to serve targeted advertisements based on online browsing history and interests. However, iRobot allows California residents to exercise certain rights, such as the right to know what personal information has been collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales. The lack of a comprehensive data privacy law in the United States means that privacy policies shape companies' legal responsibilities, and some policies may reserve the right to share data with select partners or service providers. The legal barriers for companies to collect data directly from consumers are fairly low, and most privacy policies do not even mention the audiovisual data being captured. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      contractLimits: {
        query: "Are there contractual limits on data usage by third parties?",
        query_response:
          'There are contractual limits on data usage by third parties, but the specifics depend on the individual agreements and policies of each company. Google\'s Privacy Policy states that data collected by their SDK is examined in the aggregate to improve the SDK and is maintained in accordance with their policy. The iRobot Privacy Policy states that they allow certain third-party advertising partners to collect information about users of their service for the purposes of serving more relevant ads, but all cookies that are not strictly necessary require prior opt-in consent from California consumers and do not involve "sales" of personal information. The iRobot Terms of Use Agreement also includes provisions for indemnification and limitations of liability for misuse of their APIs. However, the specifics of any contractual limits on data usage by third parties may vary depending on the company and the agreements in place. ',
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0,100.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      notification: {
        query:
          "Is the user notified in any form if their data is shared with third parties be it manually or automatically?",
        query_response:
          'Yes, the user is notified in some form if their data is shared with third parties, either manually or automatically. The Privacy Policy states that "No data will be shared with third parties without the customer\'s knowledge or control" and "All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers." Additionally, the policy outlines the right to know about personal information collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales to third parties. However, the policy also states that aggregated and anonymous information may be shared with others in a form that does not reasonably identify the user directly as an individual. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      reidentifying: {
        query:
          "Does the company actively take steps to prevent the identifying a specific user from the data they provide to third parties?",
        query_response:
          "The company does not sell customer data and takes steps to protect user information collected by API clients, including personally identifiable information, from unauthorized access or use. The company allows certain third-party advertising partners to collect information about users of the service for the purposes of serving ads that are more relevant, for ad campaign measurement and analytics, and for fraud detection and reporting. All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers, are loaded per the consumer’s instructions and preferences, and do not involve “sales” of personal information. The company complies with all applicable privacy laws and regulations including those applying to PII and provides and adheres to a privacy policy for API clients that clearly and accurately describes to users of the API client what user information is collected and how it is used and shared with Google and third parties. The company will not share data with third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties. If a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. Deleting the data is retroactive. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 94.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      transfer: {
        query:
          "Would the user information be transferred to another company in merger, acquisition, or bankruptcy?",
        query_response:
          "User information may be transferred to another company in a merger, acquisition, or bankruptcy, as well as in connection with any company transaction, such as a sale of all or a portion of company assets or shares, reorganization, financing, change of control or acquisition of all or a portion of the business by another company or third party, or in the event of bankruptcy or related or similar proceedings. User information may also be shared with third parties as required by law or to protect against harm to the rights, property, or safety of iRobot, its users, or the public. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    social: {
      verifiedUsers: {
        query: "Does the device support verified user accounts?",
        query_response:
          "There is no information provided about whether the device supports verified user accounts. ",
        sources: "N/A [Page: ]",
      },
      publicDisplay: {
        query: "Is the user's collected data publicly displayed in any form?",
        query_response:
          "The user's collected data may be publicly displayed on their mobile device if they agree to it, but it is not sold to third parties and cannot be shared without the customer's knowledge or control. Clean Map Reports are not shared with third parties. The data collected via the robot is not anonymized, but it is encrypted and stored securely. iRobot will delete the data from their servers at the request of a customer. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      moderated: {
        query:
          "Are user interactions with the device moderated in any form? Eg: content moderation",
        query_response:
          "For the first question, the contract is governed by English law. For the second question, there is no information provided about user interactions with the device being moderated or content moderation. For the third question, the president did not mention Michael Jackson. ",
        sources:
          "28-pl [Page: ], 0-pl [Page: ], 24-pl [Page: ], IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0]",
      },
      externalLinks: {
        query:
          "Do any of the devices display links to external websites or services either in their user interface or companion app?",
        query_response:
          "It is unclear whether any of the devices display links to external websites or services either in their user interface or companion app. The first source mentions links to third party websites, but it is not specified whether they are displayed in the user interface or companion app. The second source does not mention anything about links. The third source discusses data collection and usage from registered devices equipped with smart technology, but does not mention links. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      deleteFromThirdParty: {
        query:
          "Does the company allow for data which is collected by or shared with third parties to be deleted from the third parties?",
        query_response:
          "It is unclear whether the company allows for data which is collected by or shared with third parties to be deleted from the third parties. However, iRobot is committed to the absolute privacy of customer-related data, and no data is sold to third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties, and if a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. The company also allows California residents to exercise their rights to know, request deletion, and opt-out of personal information sales to third parties. iRobot does share personal information with third parties in certain instances, such as with other companies owned by or under common ownership as iRobot, third-party vendors and service providers, and at the request of the customer. The company may also share information with others in an aggregated and anonymous form that cannot reasonably identify the individual. However, the company may share personal information with law enforcement, regulators, and other parties for legal reasons. It is important to note that iRobot does not control the data collection and use practices of third-party apps and services that interact with their robots. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    tracking: {
      targetAds: {
        query: "Does the device track the users for targeted ads?",
        query_response:
          "The device tracks users for targeted ads using cookies and other tracking technologies, but users can control their advertising preferences or opt-out of certain advertising products. The use of cookies and tracking technologies may negatively impact the user's experience on the service. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      profiles: {
        query:
          "Do any of the devices or their companion app maintain a profile of the user which includes all the data collected about the user?",
        query_response:
          "Based on the extracted parts of the documents, it appears that some of the devices and their companion app collect personal information about the user, including data about their device usage, location, and preferences. However, it is unclear whether any of these devices or apps maintain a profile of the user which includes all the data collected about them. It is recommended to review the privacy policies and terms of service for each specific device and app to determine how user data is handled and stored. ",
        sources:
          "IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      filtered: {
        query: "Can ads be filtered?",
        query_response:
          "Yes, ads can be filtered and users have control over their advertising preferences and can opt-out of certain advertising products. Users can also manage their cookie settings to control the collection of information. However, some features and services on the website may not work properly if cookies are disabled. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      doNotTrack: {
        query: "Can users opt-out of ads? Eg: Do not Track mechanism",
        query_response:
          "Users can opt-out of ads through various mechanisms such as the Digital Advertising Alliance (DAA)’s self-regulatory opt-out page, European Interactive Digital Advertising Alliance (EDAA)’s consumer opt-out page, and Network Advertising Initiative (NAI)’s self-regulatory opt-out page. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The iRobot website also allows users to manage their advertising preferences and opt-out of certain Google advertising products. Additionally, users can limit certain interest-based mobile advertising through the settings on their mobile device. The iRobot website also provides information on how to manage and delete cookies. However, the website is unable to respond to Do Not Track signals set by the user's browser at this time. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    controls: {
      createContent: {
        query:
          "Do any of the devices allow users to use it as a medium for content creation? If yes then list the devices that allow users to create content and what kind of content can be created using them.",
        query_response:
          "The documents do not provide information about devices that allow users to create content. ",
        sources:
          "IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ownership: {
        query:
          "Do users retain ownership of their content they create using the device?",
        query_response:
          "The answer cannot be determined from the given content. There is no clear mention of a device or ownership of content created using a device. ",
        sources: "N/A [Page: ]",
      },
      access: {
        query:
          "Can users access their data which the device has collected from them?",
        query_response:
          "Users can choose to share their data with third-parties for their benefit, but no data is sold to third-parties without the customer's knowledge or control. iRobot will delete the data from their servers at the request of a customer. Roomba consumers can decline to have their data shared and can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via the robot is not anonymized, but it is encrypted and stored securely. However, the content does not provide a clear answer to whether users can access their data which the device has collected from them. The other content pieces are not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      dataModify: {
        query:
          "Can users modify their data which the device has collected from them?",
        query_response:
          "Users can decline to have their data shared with their mobile device, and they can also opt-out of sending map data to the Cloud through a switch in the mobile app. However, the content does not provide information on whether users can modify their data which the device has collected from them. The other content is not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      retention: {
        query:
          "What is the data retention policy for the data collected by the device from the user?",
        query_response:
          "There is no clear answer about the data retention policy for the data collected by the device from the user. The available information only mentions data collection and sharing practices, as well as security measures. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      dataDelete: {
        query:
          "Can users delete the data which the device has collected from them if they want to?",
        query_response:
          "Yes, Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app, and iRobot® will delete the data from their servers at the request of a customer. Clean Map™ Reports are not shared with third parties. No data is sold to third parties, and no data will be shared with third parties without the customer's knowledge or control. However, the content does not mention whether users can delete the data which the device has collected from them if they want to. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], and A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: ]",
      },
      termination: {
        query:
          "Is user data deleted upon account cancellation or termination of their account?",
        query_response:
          "The documents do not provide a clear answer to whether user data is deleted upon account cancellation or termination of their account. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 33.0,99.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      restrictAccess: {
        query: "Can users restrict access to their data?",
        query_response:
          "Users must protect the privacy and legal rights of those users and provide legally adequate privacy notice and protection for those users. If an application stores personal or sensitive information provided by users, it must do so securely. Users must comply with all applicable privacy laws and regulations including those applying to personally identifiable information (PII) and provide and adhere to a privacy policy for their API Client that clearly and accurately describes to users of their API Client what user information they collect and how they use and share such information (including for advertising) with Google and third parties. Users may not sublicense an API for use by a third party or create an API Client that functions substantially the same as the APIs and offer it for use by third parties. Users may not perform an action with the intent of introducing to Google products and must ensure that they have the necessary rights (including the necessary rights from their end users) to grant Google the license. When a user's non-public content is obtained through the APIs, users may not retrieve it. Companies must implement privacy- and security-protecting measures in their customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that they collect. However, there is a wide gap between the way companies talk about privacy and the way consumers understand it. It is easy to conflate privacy with security, but data security refers to a product’s physical and cyber security, or how vulnerable it is to a hack or intrusion, while data privacy is about transparency—knowing and being able to control the data that companies have, how it is used, why it is shared, whether and for how long it’s retained, and how much a company is collecting to start with. Company representatives sometimes use subtle differences, like the distinction between “sharing” data and selling it, that make how they handle privacy particularly hard for non-experts to parse. When a company says it will never sell a user's data, that does not mean it will not use it or share it with others for analysis. Developers are not traditionally very good at security and privacy, and their attitude becomes \"Try to get the functionality, and if the functionality is working, ship the product. And then the scandals come out.\" ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,94.0,96.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      download: {
        query:
          "Can users download the data which the device has collected from them?",
        query_response:
          "Roomba® consumers can decline to have their data shared. Customers need not connect a Wi-Fi connected Roomba® to the internet for it to work - it can work in offline mode with no internet or Cloud connectivity. Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via my robot is not anonymized, but it is encrypted and stored securely. iRobot® will delete the data from their servers at the request of a customer. However, there is no information about whether users can download the data which the device has collected from them. The Android App Copyright Licenses state that if you use any API to retrieve data from Google, you acknowledge that the data may be protected by intellectual property rights which are owned by Google or those parties that provide the data (or by other persons or companies on their behalf). Your use of any such API may be subject to additional Terms of Service. You may not modify, rent, lease, loan, sell, distribute or create derivative works based on this data (either in whole or in part) unless allowed by the Terms of Service. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      privacySettings: {
        query:
          "Are there privacy settings available? If yes then list what kind of privacy settings are available and their purpose",
        query_response:
          "Yes, there are privacy settings available. Users can set their email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether the user has accessed their email and performed certain functions with it. Users can also opt-out of interest-based advertising by participating companies through various consumer choice mechanisms. The company honors the privacy preferences of its users but is unable to respond to Do Not Track signals set by the user's browser at this time. The company collects various types of personal information, and users can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes. The company's privacy policy also includes information on data collection, sharing, and security practices. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      limitedUse: {
        query: "Can users limit the use of their data?",
        query_response:
          "Users can limit the use of their data by withholding consent for data collection or opting out of sharing data with their mobile device. They can also set email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether they have accessed the email and performed certain functions with it. Additionally, users can opt-out of interest-based advertising through various consumer choice mechanisms. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The company is unable to respond to Do Not Track signals set by the browser at this time. For mobile users, there are controls in the device Operating System that enable them to choose whether to allow cookies or share their advertising ID with companies like iRobot or their advertising service providers. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,32.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combineThirdParty: {
        query:
          "Is data combined with data from other third-parties? This may be done for purposes such as analytics, advertising, etc.",
        query_response:
          "Yes, data may be combined with data from other third-parties for purposes such as analytics and advertising. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combinedPii: {
        query:
          "Is personally identifiable information combined with other data? If yes then how is this combined data used and treated?",
        query_response:
          "Yes, personally identifiable information may be combined with other data. If combined, the information will be treated as personal information. The combined data is used for various purposes such as enhancing and personalizing user experience, interest-based advertising and marketing, monitoring and improving the website and service, and developing new products and features. The specific use and treatment of combined data may vary depending on the type of information being combined. ",
        sources: "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    consent: {
      change: {
        query: "Can users change their consent?",
        query_response:
          "It is unclear whether users can change their consent based on the given content. ",
        sources: "N/A [Page: ]",
      },
      grievance: {
        query: "Is there a grievance redressal mechanism?",
        query_response:
          "There is a grievance redressal mechanism through arbitration. ",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      legalRequest: {
        query:
          "Does the company have a procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity?",
        query_response:
          "It is unclear whether the company has a specific procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity as the provided content does not directly address this question. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 1.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      optIn: {
        query:
          "Can users opt-in to sharing their data with the company and/or third parties?",
        query_response:
          "It depends on the specific context and service. In general, users may be able to opt-in to sharing their data with the company and/or third parties, but this may require prior, opt-in consent and may vary depending on the specific service and location of the user. iRobot states that they do not sell customer data and are committed to the privacy of their customer-related data, but they may share personal information with other companies owned by or under common ownership as iRobot, third party vendors and service providers, and selected third parties who may offer products or services that users may enjoy. Users may also have the right to request deletion of personal information and opt-out of personal information sales to third parties. However, iRobot is unable to respond to Do Not Track signals set by users' browsers at this time. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      optOut: {
        query:
          "Can users opt-out of sharing their data with the company and/or third parties?",
        query_response:
          'Yes, users can opt-out of sharing their data with the company and/or third parties. Users can disable cookies or set their browser to automatically reject cookies, and can control their communication preferences through the "My Account" page on the website or app. Additionally, iRobot does not sell personal information. For California residents, they have the right to know what personal information has been collected and disclosed, request deletion of personal information, and opt-out of personal information sales to third parties. Sources: IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf, IoT-Project/Roomba/Privacy Policy | iRobot.pdf.',
        sources: "",
      },
      copyright: {
        query: "How are copyright claims to user data handled?",
        query_response:
          "The handling of copyright claims to user data is addressed in the terms and conditions of the APIs and software licenses, including provisions for data portability, prohibitions on certain uses of content, and liability limitations. The specific handling of copyright claims may vary depending on the applicable laws and agreements. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 77.0,96.0,97.0], IoT-Project/Roomba/Copyright Licenses | iRobot.pdf [Page: 570.0]",
      },
      legacy: {
        query:
          "Can users assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death?",
        query_response:
          "There is no information provided about whether users can assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death.",
        sources: "N/A [Page: ]",
      },
      parental: {
        query:
          "Is parental consent required before children's data is collected or disclosed?",
        query_response:
          "Yes, parental consent is required before children's data is collected or disclosed. The Services are not directed to persons under 13 and iRobot does not intentionally collect or maintain information from persons under 13. If personal information about a person under 16 has been provided to iRobot, they request immediate contact. Source: IoT-Project/Roomba/Privacy Policy | iRobot.pdf",
        sources: "",
      },
    },
    security: {
      identity: {
        query:
          "Does the device or company verify the identity of their using using official documents?",
        query_response:
          "There is no clear answer to the question of whether the device or company verifies the identity of their users using official documents. The provided content discusses topics such as software security, registration, compliance with laws and regulations, and privacy protection, but does not directly address the verification of identity using official documents. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,86.0,92.0]",
      },
      accountCreation: {
        query:
          "Does the user need to create an account with the company in order to use the device? If any device can be used without creating an account then list them.",
        query_response:
          "It is unclear whether the user needs to create an account with the company in order to use the device. No information is provided about devices that can be used without creating an account.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      managedAccounts: {
        query:
          "Does the company or device support managed accounts i.e. accounts which are managed by a parent or guardian?",
        query_response:
          "The provided documents do not contain information about whether the company or device supports managed accounts. ",
        sources: "N/A [Page: ]",
      },
      multiFactor: {
        query:
          "Does the accoiunt created by the user with the company to use the device support multi-factor authentication?",
        query_response:
          "The provided documents do not contain information about whether the account created by the user with the company to use the device supports multi-factor authentication.",
        sources: "N/A [Page: ]",
      },
      employeeAccess: {
        query:
          "Do the company employees have access to the data collected by the device from the user? If yes then what kind of access do they have?",
        query_response:
          "It is unclear from the given content whether or not company employees have access to the data collected by the device from the user and what kind of access they have. However, iRobot has implemented privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. Customers can also choose to opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected by robot vacuums can be particularly invasive, and companies often use vague language in their privacy policies that give them broad discretion in how they disseminate and analyze consumer information. It is important for consumers to understand the distinction between data security and data privacy and to be aware of the data that companies are collecting and how it is being used. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      dataTransit: {
        query: "Is data encrypted in transit?",
        query_response:
          "Yes, data is encrypted both in transit and at rest for iRobot connected products. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      dataStorage: {
        query: "Is data encrypted when stored?",
        query_response:
          "Yes, data is encrypted both in transit and at rest. iRobot takes a defense-in-depth approach to security, adding multiple layers of protection around their robots, cloud, and apps from start to finish. They ensure that the development of their products follows industry-standard security best practices, and they are using technology-leading tools to assist their development and security teams during this process. When deployed to market, they work with their suppliers and partners to ensure that their products and their suppliers' and partners' supporting infrastructure (including physical infrastructure, cloud, and mobile apps) are properly configured, monitored, and continuous security improvement processes are in place. Within iRobot’s cloud (built on top of AWS), customer data is stored encrypted. Customer data has multiple encryption keys which are rotated on a regular basis to reduce the risk of the data being compromised even in the event of a key exposure. Within the mobile application, data storage follows the platform’s standards for application-secure data; any sensitive data that is used by the application is not stored on the mobile device, but is instead securely transported to iRobot’s cloud for storage. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      breachNotice: {
        query:
          "Is there a notice provided to the user if any of the data collected from them is exposed in a data breach?",
        query_response:
          "There is no clear mention of whether a notice is provided to the user if any of the data collected from them is exposed in a data breach.",
        sources: "None provided. [Page: ]",
      },
      storageLocation: {
        query: "Where is data stored?",
        query_response:
          "For the first question, the state/country's law that governs the interpretation of the contract is English law (SOURCE: 28-pl). For the second question, there is no mention of Michael Jackson in the given content (SOURCE: N/A). For the third question, data is stored securely in iRobot's cloud for storage and is not stored on the mobile device (SOURCE: IoT-Project/Roomba/Data Security | iRobot.pdf).",
        sources: "",
      },
      storageDuration: {
        query: "How long is data stored?",
        query_response:
          "The length of time that personal information is stored varies based on the purposes set out in Annex 2 and in accordance with legal obligations and legitimate business interests. Data held by iRobot will only be used consistent with the relevant and applicable legal requirements of the country in which the personal information is collected. The data collected from iRobot products is encrypted both in transit and at rest, and data access is controlled strictly and limited only to authorized personnel to do their job and help improve product experiences. The Roomba 900 Series, i Series, j series, s Series Robot Vacuums and the Braava jet m Series Robot Mop build a map of a home as they clean, and Clean Map reports make these maps visible to customers in the iRobot HOME App after a cleaning job is complete, showing total area and duration a Roomba 900 Series, i Series, j series, or s Series vacuum cleaned—for up to 30 cleaning jobs. If a customer chooses to send map data to the Cloud, Dirt Detect events are stored in the Cloud and sent to the App when the Clean Map is rendered. Customers with Wi-Fi connected Robot Vacuums and Robot Mops are not required to connect to the Cloud to use their robot. The robot can be used in offline mode with no connection to the internet or Cloud. Customers with Wi-Fi connected Robot vacuums and Robot Mops who do not connect them to the internet will not be able to access certain features, like scheduled cleanings, customized cleaning features, Clean Map reports, and connections to voice control systems like Amazon Alexa and Google Assistant. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      vulnerabilities: {
        query:
          "Are there any known vulneranbilites associated with any of the devices listed in the CVE database? If yes then list the devices and their vulnerabilities.",
        query_response:
          "There is no information provided in the given content about any known vulnerabilities associated with the devices listed in the CVE database.",
        sources: "N/A [Page: ]",
      },
      securityUpdates: {
        query: "How long are security updates provided for the devices?",
        query_response:
          "The document does not provide a clear answer to the question of how long security updates are provided for the devices. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      passwordComplexity: {
        query:
          "Are their any password complexity requirements for the account used to use the device? If yes then what are they?",
        query_response:
          "There is no information provided about password complexity requirements for the account used to use the device.",
        sources: "N/A [Page: ]",
      },
    },
    privacyCompliance: {
      complianceAudits: {
        query:
          "Do the devices and their parent company undergo regular industry standard compliance audits with respect to privacy and security?",
        query_response:
          'iRobot has implemented many privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. They also have a Data Privacy Policy and a Data Security Policy. However, the article also highlights the gap between how companies talk about privacy and how consumers understand it, and the vague language in privacy policies that permit companies to use data for the purposes of "improving products and services." It is unclear if iRobot undergoes regular industry standard compliance audits with respect to privacy and security. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      defaultPrivacy: {
        query:
          "What are the default privacy controls for data collected by the device? Does it have data collection enabled by default?",
        query_response:
          "For the iRobot Roomba, the privacy policy states that data collection is enabled by default, but users can opt-out of specific features that require opt-in. iRobot does not sell customer data and has implemented privacy and security measures in its devices, including encryption, regular security vulnerability patching, and limiting employee access to information. The Roomba collects mapping and navigation information via VSLAM, and usage data can be sent to the cloud to be shown on the customer's mobile device. Images used for navigation are not sent to the cloud. However, there is a gap between how companies talk about privacy and how consumers understand it, and privacy policies often contain broad language permitting the use of data for improving products and services. It is also important to note that manufacturers recognize the privacy risks presented by on-device cameras and must prioritize privacy and security. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      calOPPA: {
        query:
          "Do any of the devices comply with the California Online Privacy Protection Act (CalOPPA)?",
        query_response:
          "Based on the information provided, it is unclear whether any of the devices comply with the California Online Privacy Protection Act (CalOPPA). The privacy policies mention compliance with the California Consumer Privacy Act (CCPA) but do not specifically mention CalOPPA. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      coppa: {
        query:
          "Do any of the devices comply with the Children's Online Privacy Protection Act (COPPA)?",
        query_response:
          "It is unclear whether any of the devices comply with the Children's Online Privacy Protection Act (COPPA) based on the provided content. ",
        sources: "None provided. [Page: ]",
      },
      ferpa: {
        query:
          "Do any of the devices comply with the Family Educational Rights and Privacy Act (FERPA)?",
        query_response:
          "There is no clear information provided about whether any of the devices comply with the Family Educational Rights and Privacy Act (FERPA).",
        sources: "N/A [Page: ]",
      },
      gdpr: {
        query:
          "Do any of the devices comply with the General Data Protection Regulation (GDPR)?",
        query_response:
          "It is unclear whether any of the devices comply with the General Data Protection Regulation (GDPR) as there is no mention of GDPR compliance in the provided content. ",
        sources: "None provided. [Page: ]",
      },
      policyVersion: {
        query: "What is the version or effective date of the privacy policy?",
        query_response:
          "The version or effective date of the privacy policy is May 25, 2018.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0,1.0]",
      },
      policyChangeLog: {
        query: "Do privacy policies indicate a change log?",
        query_response:
          "It is possible for privacy policies to indicate a change log, but it is not a requirement. The reviewed privacy policies did not mention a change log. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyUpdateNotification: {
        query: "Are users notified when the privacy policies are updated?",
        query_response:
          "It depends on the company. Some companies, such as iRobot, mention updates to their privacy policy in their policy document, but it is not a requirement. It is important for users to regularly check the privacy policies of the companies they interact with to stay informed of any changes. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyCoverage: {
        query: "Do privacy policies indicate which products are covered?",
        query_response:
          "The privacy policies do not explicitly indicate which products are covered, but they do outline the company's approach to data privacy and security. The iRobot privacy policy specifically mentions their commitment to safeguarding the privacy of customer-related information, including data collected by their connected products. They also state that they do not sell information about their customers to third parties and have implemented privacy- and security-protecting measures in their customer devices. The HR privacy policy outlines how iRobot collects, stores, processes, transfers, shares, and uses personal information of their employees, but does not mention specific products. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyContact: {
        query:
          "How can users contact the company about privacy policy questions, complaints, or material changes?",
        query_response:
          'Users can contact the company about privacy policy questions, complaints, or material changes by contacting them at global.irobot.com or by writing to them at iRobot Corporation 8 Crosby Drive Bedford, MA 01730. They can also contact the company if they have an unresolved privacy or data use concern that has not been addressed satisfactorily by using the U.S.-based third party dispute resolution provider at https://feedback-form.truste.com/watchdog/request. California residents can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes by writing to iRobot Corporation 8 Crosby Drive Bedford, MA 01730 or by sending an email to global.irobot.com with the words "California Privacy Rights" in the subject line. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      policyPrinciples: {
        query: "Do privacy policies indicate privacy principles?",
        query_response:
          'Privacy policies may contain information about how companies collect, store, process, transfer, share, and use personal information, but they may not necessarily indicate privacy principles. Privacy policies shape companies\' legal responsibilities, but there is a wide gap between the way companies talk about privacy and the way consumers understand it. Privacy policies often contain language permitting the use of data for the purposes of "improving products and services," which is broad enough to permit basically anything. Companies may use subtle differences, like the distinction between "sharing" data and selling it, that make how they handle privacy particularly hard for non-experts to parse. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyLanguages: {
        query:
          "Are privacy policies available in multiple languages? List the languages the privacy policy is available in",
        query_response:
          "It is not specified in the provided content whether the privacy policy is available in multiple languages.",
        sources: "N/A [Page: ]",
      },
      prohibitedActivities: {
        query:
          "Are there any prohibited activities that may lead to account termination?",
        query_response:
          "Yes, there are prohibited activities that may lead to account termination, including but not limited to defaming, abusing, harassing, stalking, or threatening others, promoting or facilitating unlawful online gambling or disruptive commercial messages or advertisements, and using the APIs for activities where the use or failure of the APIs could lead to death, personal injury, or environmental damage. The Terms also state that Google reserves the right to terminate the Terms with the user or discontinue the APIs or any portion or feature or the user's access thereto for any reason and at any time without liability or other obligation to the user. ",
        sources:
          "IoT-Project/Roomba/Code of Business Conduct and Ethics (2021).pdf [Page: 12.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0,95.0,99.0]",
      },
      classActionWaiver: {
        query:
          "Are users required to waive the right to join a class-action lawsuit?",
        query_response:
          "Yes, users are required to waive the right to join a class-action lawsuit.",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      internationalData: {
        query:
          "Are user data subject to international data transfer or jurisdiction laws?",
        query_response:
          "User data may be subject to international data transfer or jurisdiction laws, and may be accessible to law enforcement and regulatory authorities in accordance with the laws of other jurisdictions. The specific laws governing international data transfer or jurisdiction are not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    intendedUsers: {
      children: {
        query: "Is the device intended for use by children under 13?",
        query_response:
          "The device can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      teens: {
        query: "Is the device intended for use by teens?",
        query_response:
          "The device is intended for use by children aged from 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/H1 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      adults: {
        query: "Is the device intended for use by adults over 18?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. However, it is not specified whether the devices are intended for use by adults over 18.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      parents: {
        query:
          "Is the device intended for use under parent or guardian supervision?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory, or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0]",
      },
    },
  },
  {
    name: "Roku",
    brand: "iRobot",
    category: "Vacuum Cleaner",
    image: "https://example.com/path/to/roomba/image.jpg",
    usage: {
      faq: {
        query:
          "Create a list of 5 frequently asked questions about the devices. Also provide responses to these questions.",
        query_response:
          "1. How do I activate the battery of my Roomba® robot vacuum?\nA: Place the robot on the Home Base to activate the battery. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n2. How can I pair my Roomba® robot vacuum with other smart devices?\nA: You can find tricks and answers to commonly asked questions, including how to pair your Roomba® robot vacuum with other smart devices in the owner's guide. (IoT-Project/Roomba/e6 Owner’s Guide.pdf)\n\n3. Where can I find information about scheduling Roomba?\nA: You can find information about scheduling Roomba in the owner's manual. (IoT-Project/Roomba/500 Owner's Manual.pdf)\n\n4. How does Braava clean?\nA: You can find information about how Braava cleans in the owner's manual. (IoT-Project/Roomba/300 Series Owner’s Manual.pdf)\n\n5. Where can I find a quick start guide for the 300 Series Roomba?\nA: You can find a quick start guide for the 300 Series Roomba on global.irobot.com. (IoT-Project/Roomba/300 Series Quick Start Guide.pdf)",
        sources:
          "IoT-Project/Roomba/e6 Owner’s Guide.pdf [Page: 5.0], IoT-Project/Roomba/500 Owner's Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Owner’s Manual.pdf [Page: 2.0], IoT-Project/Roomba/300 Series Quick Start Guide.pdf [Page: 0.0]",
      },
      pii: {
        query: "Does the device collect personally identifiable information?",
        query_response:
          "The device collects personal information, including information about the Robot and/or App usage, device data, and Robot customization settings and preferences. However, some personal information is stored separately from deidentified Robot data, and users can control the collection of usage data by disconnecting their Robot from Wi-Fi or Bluetooth via the App. The specific mention of personally identifiable information is not found in the given content. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      camera: {
        query: "Does the device have a camera?",
        query_response:
          "Some robot vacuums have front-facing cameras for navigation and object recognition, as well as home monitoring. iRobot, Ecovacs, and Roborock are among the companies that have incorporated cameras into their devices. However, it is unclear if the specific device in question has a camera as it is not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], WebAPI- Privacy Policy | iRobot.pdf [Page: ]",
      },
      microphone: {
        query:
          "Do any of the devices have a microphone? If yes then list these devices and what they use the microphone for.",
        query_response:
          "The Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops create home mapping data and capture mapping and navigation information via VSLAM, which stays on the robot. Some usage data is sent to the Cloud, but the robot does not send images used for navigation to the Cloud. If a user agrees to have their map data viewable on their mobile device, then the map that the robot creates during a cleaning job is sent to the Cloud, where it is processed and simplified to produce a user-friendly map that ultimately appears in the iRobot HOME App. iRobot will not sell customer data and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. In the short term, the Roomba is already linked to both Google Assistant and Amazon Alexa, so that customers can control their robot with voice commands. iRobot believes robots and the mapping capabilities they provide will be vital in enabling the smart home. SOURCE: IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf, IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf",
        sources: "",
      },
      name: {
        query: "Does the device collect user name?",
        query_response:
          "It is unclear whether the device collects user name. No information was found in the provided content that directly answers the question.",
        sources: "N/A [Page: ]",
      },
      email: {
        query:
          "Does the device require the user to provide an email to create and account or register the device online? If yes then what is the email used for?",
        query_response:
          "Yes, the device requires the user to provide an email to create an account or register the device online. The email is used for account verification, to communicate directly with the user, to send information about orders, product sales, special offers, and new site features, and to send service-related emails or notifications. The email is also necessary for the performance of a contract between the user and iRobot. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Email account verification update | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      age: {
        query: "Does the device collect user age?",
        query_response:
          "It is unclear whether the device collects user age as there is no mention of age in the provided content. ",
        sources: "N/A [Page: ]",
      },
      phone: {
        query:
          "Does the device require the user to provide a phone number to create and account or register the device online? If yes then what is the phone number used for?",
        query_response:
          "The documents do not provide a clear answer to whether the device requires the user to provide a phone number to create an account or register the device online. There is no information about what the phone number would be used for. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0]",
      },
      geolocation: {
        query: "Does the device collect geolocation data?",
        query_response:
          "The device may collect geolocation data if the user agrees to have their map data viewable on their mobile device and if they connect to WiFi, Bluetooth, or the internet. However, the location mapping data is considered sensitive and confidential information and is not shared with third parties for marketing purposes. The data collected is encrypted and stored securely, and customers can opt-out of sending map data to the Cloud through a switch in the mobile app. The iRobot Home app may collect approximate location data, app interactions, personal information such as name and email address, and app info and performance data such as crash logs and diagnostics. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      biometric: {
        query:
          "Do any of the devices collect any form of biometric data like face recognition scans, fingerprints, etc? If yes then specify which device does it and what does it use the biometric data for.",
        query_response:
          "None of the devices collect biometric data like face recognition scans or fingerprints. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ipAddress: {
        query: "Does any of the device collect user ipAddress?",
        query_response: "Yes, the device collects user ipAddress. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      socialAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to social media accounts? If yes then list the social media accounts that can be connected.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow you to connect to social media accounts. The privacy policies mention receiving personal information if users interact with their accounts on social networks, but do not specify which social media accounts can be connected. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      thirdPartyAccounts: {
        query:
          "Do any of the devices or their companion apps allow you to connect to any other third part accounts? If yes then list the third party accounts that can be connected.",
        query_response:
          "Yes, some third party services can collect information from the iRobot devices and companion apps, such as Amazon Alexa and Google Assistant. Other third parties that may receive personal information include social networks and third party vendors/service providers. However, the specific third party accounts that can be connected are not listed in the extracted content. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      voiceRecordings: {
        query:
          "Do any of the devices collect voice recordings? If yes then list the devices that collect voice recordings and what they use the voice recordings for.",
        query_response:
          'Yes, some of the devices collect voice recordings. The Samsung Jet Bot AI+ Robot Vacuum and Powerbot R7070 collect "recordings of your voice when you use voice commands to control a Service" (MIT Technology Review). The iRobot Roomba 900 Series, i Series, and s Series Robot Vacuums and Braava jet m Series Robot Mops also collect voice recordings when users share images via the mobile app (iRobot). It is unclear what these companies use the voice recordings for. ',
        sources: "MIT Technology Review [Page: ], iRobot [Page: ]",
      },
      videoRecordings: {
        query:
          "Do any of the devices collect video recordings? If yes then list the devices that collect video recordings and what they use the video recordings for.",
        query_response:
          "Yes, some of the devices collect video recordings. The iRobot Roomba J7 series and some models from LG and Samsung have cameras that collect video recordings for the purpose of training algorithms to recognize patterns and improve the robot's cleaning performance. The collected data is also used to build smarter robots whose purpose may go beyond vacuuming in the future. The iRobot Beta Program also collects and processes video recordings for testing new features and functionalities of the service. Consent is required for the collection of video recordings, and users have the option to opt-in or opt-out. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      roomMapping: {
        query:
          "Do any of the devices create a map of the room? If yes then list the devices that create a map of the room and what they use the map for.",
        query_response:
          'Yes, some of the devices create a map of the room. The devices that create a map of the room are Roomba e5, e6, 89x, 69x, 67x, 96x, i3/i1, i6, i7, i8, and s9. The map is used to determine the best way to clean based on the orientation of each room, furniture placement, etc. The Imprint Smart Maps also enable the user to clean or select a single room, multiple rooms, or an entire level of the floor all from the iRobot Home App. The user can also set up specific zones to clean. The technology which allows iRobot products to create a map is called vSLAM (visual Simultaneous Localization and Mapping). The robot looks for unique "landmarks" in the home and remembers where those landmarks are. Landmarks may be corners of a picture frame or window, a ceiling fan or recessed light, or similar feature on the wall or ceiling.',
        sources: "",
      },
      interactions: {
        query:
          "Do any of the devices collect user interactions with the device? If yes then list the devices that collect user interactions and what they use the interactions for.",
        query_response:
          "Yes, some of the devices collect user interactions with the device. The Roomba Robots equipped with smart technology collect information about the Robot and/or App usage, feature usage, in-App transactions, technical specifications, crashes, and other information about how you use your Robot and the product App. Additionally, the Robot collects information about its movement throughout the environment to create a location ‘map’ of the space accessible to the Robot. However, it is not specified what they use the interactions for.",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      behaviors: {
        query:
          "Do any of the device collect the users behavioral patterns? If yes then list the devices that collect behavioral patterns and what they use the patterns for.",
        query_response:
          "Yes, some of the devices collect users' behavioral patterns. The devices that collect behavioral patterns include iRobot Roomba and the information collected is used for enhancing and personalizing the user experience, carrying out interest-based advertising and marketing, monitoring and improving the website and service, and for other internal purposes. The specific types of information collected and the purposes for which they are used vary depending on the device and the features used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      analytics: {
        query:
          "Do any of the devices collect analytics data? If yes then list the devices that collect analytics data and what they use the data for.",
        query_response:
          "The iRobot Roomba devices and their associated apps collect usage and device information, including analytics data, which is used for various purposes such as improving the service and personalizing advertising. The iRobot SDK also collects data on which tools and services are being used and how they are being used, but this data is examined in the aggregate to improve the SDK and is maintained in accordance with Google's Privacy Policy. The iRobot Privacy Policy and Android App Copyright Licenses provide more details on the types of information collected and how it is used. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      contactSync: {
        query:
          "Do any of the devices or their companion apps allow you to sync your contacts? If yes then list the devices that allow you to sync your contacts and what they use the contacts for.",
        query_response:
          "There is no clear information about whether any of the devices or their companion apps allow syncing of contacts and what they use the contacts for. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
    },
    connectivity: {
      cellular: {
        query: "Do any of the devices support/require cellular connectivity?",
        query_response:
          "The Roomba and Braava models listed in the document support/require Wi-Fi connectivity, but there is no mention of cellular connectivity. ",
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home on the App Store.pdf [Page: ]",
      },
      wifi: {
        query: "Do any of the devices support/require Wi-Fi connectivity?",
        query_response:
          'Some of the devices support/require Wi-Fi connectivity, while others do not. Please refer to the compatibility chart provided in the "Setting up your Wi-Fi Connected Robot with the iRobot HOME App" document to determine if your device supports Wi-Fi connectivity. ',
        sources:
          "IoT-Project/Roomba/Router Compatibility Issues.pdf [Page: 0.0], IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0]",
      },
      bluetooth: {
        query: "Do any of the devices support/require Bluetooth connectivity?",
        query_response:
          "Yes, some of the devices support/require Bluetooth connectivity. The iRobot® HOME App uses Bluetooth to set up and connect the robot to the device, and the Braava jet™ 240 mopping robot uses Bluetooth Low Energy (BLE) built into most common mobile devices. ",
        sources:
          "IoT-Project/Roomba/Setting up your Wi-Fi Connected Robot with the iRobot HOME App.pdf [Page: 0.0]",
      },
    },
    sharing: {
      thirdParty: {
        query:
          "Do any of the devices share/rent data with third parties? If yes then list the third parties that the devices share/rent data with and what kind of data do they share/rent.",
        query_response:
          "Yes, some of the devices share/rent data with third parties. The third parties that the devices share/rent data with include other companies owned by or under common ownership as iRobot, third party vendors, affiliates, and other service providers that perform services on iRobot's behalf, selected third parties who iRobot thinks may offer customers products or services they may enjoy, and third parties in connection with any company transaction. The kind of data that is shared/rented includes personal information, Wi-Fi connected robot performance data, and aggregated performance data about iRobot's robots. iRobot is committed to safeguarding the privacy of customer-related information and does not sell information about its customers to third parties. However, customers can choose to share data with third parties for their benefit if they so choose. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      categories: {
        query:
          "What type of information shared with third parties? List the categories of information shared with third parties.",
        query_response:
          "The categories of information shared with third parties include personal information for business purposes, aggregated and anonymous information, and information shared with third parties at the request of the user. Specific categories of personal information shared with third parties include information for targeted advertising, e-commerce services, content or service fulfillment, billing, website operation, payment processing and authorization, customer service, fraud prevention, web hosting, data storage, analytics services, and third-party app or service integration. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      purpose: {
        query:
          "What is the purpose of data sharing? Eg: research and/or product improvement",
        query_response:
          "The purpose of data sharing varies depending on the context. iRobot is committed to the absolute privacy of customer-related data, including data collected by their connected products, and will not sell customer data or share it with third parties without the customer's knowledge or control. Google supports data portability and prohibits certain actions with content returned from their APIs, including scraping, modifying, selling, and sublicensing to third parties. The terms of data sharing are dependent on the specific agreement or policy in place. ",
        sources:
          "IoT-Project/Roomba/Software Licenses | iRobot.pdf [Page: 528.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0]",
      },
      anonymized: {
        query: "Is the shared data anonymized?",
        query_response:
          "The data collected by iRobot's connected products is not anonymized, but it is encrypted and stored securely. However, customers can choose to share limited data to enable voice control of the robot using Amazon Alexa or Google Assistant. Customers can also decline to have their data shared, and iRobot will delete the data from their servers at the request of a customer. Clean Map Reports are not shared with third parties. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      samePrivacy: {
        query: "Do third parties follow the same privacy practices?",
        query_response:
          "It depends on the specific third party and their relationship with iRobot. Some third parties may follow the same privacy practices, while others may have different practices. iRobot shares personal information with third parties in various instances, including for business purposes and to serve targeted advertisements based on online browsing history and interests. However, iRobot allows California residents to exercise certain rights, such as the right to know what personal information has been collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales. The lack of a comprehensive data privacy law in the United States means that privacy policies shape companies' legal responsibilities, and some policies may reserve the right to share data with select partners or service providers. The legal barriers for companies to collect data directly from consumers are fairly low, and most privacy policies do not even mention the audiovisual data being captured. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      contractLimits: {
        query: "Are there contractual limits on data usage by third parties?",
        query_response:
          'There are contractual limits on data usage by third parties, but the specifics depend on the individual agreements and policies of each company. Google\'s Privacy Policy states that data collected by their SDK is examined in the aggregate to improve the SDK and is maintained in accordance with their policy. The iRobot Privacy Policy states that they allow certain third-party advertising partners to collect information about users of their service for the purposes of serving more relevant ads, but all cookies that are not strictly necessary require prior opt-in consent from California consumers and do not involve "sales" of personal information. The iRobot Terms of Use Agreement also includes provisions for indemnification and limitations of liability for misuse of their APIs. However, the specifics of any contractual limits on data usage by third parties may vary depending on the company and the agreements in place. ',
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0,100.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      notification: {
        query:
          "Is the user notified in any form if their data is shared with third parties be it manually or automatically?",
        query_response:
          'Yes, the user is notified in some form if their data is shared with third parties, either manually or automatically. The Privacy Policy states that "No data will be shared with third parties without the customer\'s knowledge or control" and "All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers." Additionally, the policy outlines the right to know about personal information collected and disclosed, the right to request deletion of personal information, and the right to opt out of personal information sales to third parties. However, the policy also states that aggregated and anonymous information may be shared with others in a form that does not reasonably identify the user directly as an individual. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      reidentifying: {
        query:
          "Does the company actively take steps to prevent the identifying a specific user from the data they provide to third parties?",
        query_response:
          "The company does not sell customer data and takes steps to protect user information collected by API clients, including personally identifiable information, from unauthorized access or use. The company allows certain third-party advertising partners to collect information about users of the service for the purposes of serving ads that are more relevant, for ad campaign measurement and analytics, and for fraud detection and reporting. All cookies that are not strictly necessary (including third-party) require prior, opt-in consent from California consumers, are loaded per the consumer’s instructions and preferences, and do not involve “sales” of personal information. The company complies with all applicable privacy laws and regulations including those applying to PII and provides and adheres to a privacy policy for API clients that clearly and accurately describes to users of the API client what user information is collected and how it is used and shared with Google and third parties. The company will not share data with third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties. If a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. Deleting the data is retroactive. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 94.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      transfer: {
        query:
          "Would the user information be transferred to another company in merger, acquisition, or bankruptcy?",
        query_response:
          "User information may be transferred to another company in a merger, acquisition, or bankruptcy, as well as in connection with any company transaction, such as a sale of all or a portion of company assets or shares, reorganization, financing, change of control or acquisition of all or a portion of the business by another company or third party, or in the event of bankruptcy or related or similar proceedings. User information may also be shared with third parties as required by law or to protect against harm to the rights, property, or safety of iRobot, its users, or the public. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    social: {
      verifiedUsers: {
        query: "Does the device support verified user accounts?",
        query_response:
          "There is no information provided about whether the device supports verified user accounts. ",
        sources: "N/A [Page: ]",
      },
      publicDisplay: {
        query: "Is the user's collected data publicly displayed in any form?",
        query_response:
          "The user's collected data may be publicly displayed on their mobile device if they agree to it, but it is not sold to third parties and cannot be shared without the customer's knowledge or control. Clean Map Reports are not shared with third parties. The data collected via the robot is not anonymized, but it is encrypted and stored securely. iRobot will delete the data from their servers at the request of a customer. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      moderated: {
        query:
          "Are user interactions with the device moderated in any form? Eg: content moderation",
        query_response:
          "For the first question, the contract is governed by English law. For the second question, there is no information provided about user interactions with the device being moderated or content moderation. For the third question, the president did not mention Michael Jackson. ",
        sources:
          "28-pl [Page: ], 0-pl [Page: ], 24-pl [Page: ], IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Corporation’s bug bounty program - Bugcrowd.pdf [Page: 0.0]",
      },
      externalLinks: {
        query:
          "Do any of the devices display links to external websites or services either in their user interface or companion app?",
        query_response:
          "It is unclear whether any of the devices display links to external websites or services either in their user interface or companion app. The first source mentions links to third party websites, but it is not specified whether they are displayed in the user interface or companion app. The second source does not mention anything about links. The third source discusses data collection and usage from registered devices equipped with smart technology, but does not mention links. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Complete Guide for Imprin Smart Maps and FAQs.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      deleteFromThirdParty: {
        query:
          "Does the company allow for data which is collected by or shared with third parties to be deleted from the third parties?",
        query_response:
          "It is unclear whether the company allows for data which is collected by or shared with third parties to be deleted from the third parties. However, iRobot is committed to the absolute privacy of customer-related data, and no data is sold to third parties without the customer's knowledge or control. Clean Map™ Reports are not shared with third parties, and if a customer had already signed up/opted-in, iRobot would delete the data from their servers if a customer requests it. The company also allows California residents to exercise their rights to know, request deletion, and opt-out of personal information sales to third parties. iRobot does share personal information with third parties in certain instances, such as with other companies owned by or under common ownership as iRobot, third-party vendors and service providers, and at the request of the customer. The company may also share information with others in an aggregated and anonymous form that cannot reasonably identify the individual. However, the company may share personal information with law enforcement, regulators, and other parties for legal reasons. It is important to note that iRobot does not control the data collection and use practices of third-party apps and services that interact with their robots. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    tracking: {
      targetAds: {
        query: "Does the device track the users for targeted ads?",
        query_response:
          "The device tracks users for targeted ads using cookies and other tracking technologies, but users can control their advertising preferences or opt-out of certain advertising products. The use of cookies and tracking technologies may negatively impact the user's experience on the service. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      profiles: {
        query:
          "Do any of the devices or their companion app maintain a profile of the user which includes all the data collected about the user?",
        query_response:
          "Based on the extracted parts of the documents, it appears that some of the devices and their companion app collect personal information about the user, including data about their device usage, location, and preferences. However, it is unclear whether any of these devices or apps maintain a profile of the user which includes all the data collected about them. It is recommended to review the privacy policies and terms of service for each specific device and app to determine how user data is handled and stored. ",
        sources:
          "IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      filtered: {
        query: "Can ads be filtered?",
        query_response:
          "Yes, ads can be filtered and users have control over their advertising preferences and can opt-out of certain advertising products. Users can also manage their cookie settings to control the collection of information. However, some features and services on the website may not work properly if cookies are disabled. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      doNotTrack: {
        query: "Can users opt-out of ads? Eg: Do not Track mechanism",
        query_response:
          "Users can opt-out of ads through various mechanisms such as the Digital Advertising Alliance (DAA)’s self-regulatory opt-out page, European Interactive Digital Advertising Alliance (EDAA)’s consumer opt-out page, and Network Advertising Initiative (NAI)’s self-regulatory opt-out page. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The iRobot website also allows users to manage their advertising preferences and opt-out of certain Google advertising products. Additionally, users can limit certain interest-based mobile advertising through the settings on their mobile device. The iRobot website also provides information on how to manage and delete cookies. However, the website is unable to respond to Do Not Track signals set by the user's browser at this time. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    controls: {
      createContent: {
        query:
          "Do any of the devices allow users to use it as a medium for content creation? If yes then list the devices that allow users to create content and what kind of content can be created using them.",
        query_response:
          "The documents do not provide information about devices that allow users to create content. ",
        sources:
          "IoT-Project/Roomba/User Agreement | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 97.0], IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      ownership: {
        query:
          "Do users retain ownership of their content they create using the device?",
        query_response:
          "The answer cannot be determined from the given content. There is no clear mention of a device or ownership of content created using a device. ",
        sources: "N/A [Page: ]",
      },
      access: {
        query:
          "Can users access their data which the device has collected from them?",
        query_response:
          "Users can choose to share their data with third-parties for their benefit, but no data is sold to third-parties without the customer's knowledge or control. iRobot will delete the data from their servers at the request of a customer. Roomba consumers can decline to have their data shared and can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via the robot is not anonymized, but it is encrypted and stored securely. However, the content does not provide a clear answer to whether users can access their data which the device has collected from them. The other content pieces are not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      dataModify: {
        query:
          "Can users modify their data which the device has collected from them?",
        query_response:
          "Users can decline to have their data shared with their mobile device, and they can also opt-out of sending map data to the Cloud through a switch in the mobile app. However, the content does not provide information on whether users can modify their data which the device has collected from them. The other content is not relevant to the question.",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      retention: {
        query:
          "What is the data retention policy for the data collected by the device from the user?",
        query_response:
          "There is no clear answer about the data retention policy for the data collected by the device from the user. The available information only mentions data collection and sharing practices, as well as security measures. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      dataDelete: {
        query:
          "Can users delete the data which the device has collected from them if they want to?",
        query_response:
          "Yes, Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app, and iRobot® will delete the data from their servers at the request of a customer. Clean Map™ Reports are not shared with third parties. No data is sold to third parties, and no data will be shared with third parties without the customer's knowledge or control. However, the content does not mention whether users can delete the data which the device has collected from them if they want to. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], and A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: ]",
      },
      termination: {
        query:
          "Is user data deleted upon account cancellation or termination of their account?",
        query_response:
          "The documents do not provide a clear answer to whether user data is deleted upon account cancellation or termination of their account. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 33.0,99.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      restrictAccess: {
        query: "Can users restrict access to their data?",
        query_response:
          "Users must protect the privacy and legal rights of those users and provide legally adequate privacy notice and protection for those users. If an application stores personal or sensitive information provided by users, it must do so securely. Users must comply with all applicable privacy laws and regulations including those applying to personally identifiable information (PII) and provide and adhere to a privacy policy for their API Client that clearly and accurately describes to users of their API Client what user information they collect and how they use and share such information (including for advertising) with Google and third parties. Users may not sublicense an API for use by a third party or create an API Client that functions substantially the same as the APIs and offer it for use by third parties. Users may not perform an action with the intent of introducing to Google products and must ensure that they have the necessary rights (including the necessary rights from their end users) to grant Google the license. When a user's non-public content is obtained through the APIs, users may not retrieve it. Companies must implement privacy- and security-protecting measures in their customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that they collect. However, there is a wide gap between the way companies talk about privacy and the way consumers understand it. It is easy to conflate privacy with security, but data security refers to a product’s physical and cyber security, or how vulnerable it is to a hack or intrusion, while data privacy is about transparency—knowing and being able to control the data that companies have, how it is used, why it is shared, whether and for how long it’s retained, and how much a company is collecting to start with. Company representatives sometimes use subtle differences, like the distinction between “sharing” data and selling it, that make how they handle privacy particularly hard for non-experts to parse. When a company says it will never sell a user's data, that does not mean it will not use it or share it with others for analysis. Developers are not traditionally very good at security and privacy, and their attitude becomes \"Try to get the functionality, and if the functionality is working, ship the product. And then the scandals come out.\" ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,94.0,96.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      download: {
        query:
          "Can users download the data which the device has collected from them?",
        query_response:
          "Roomba® consumers can decline to have their data shared. Customers need not connect a Wi-Fi connected Roomba® to the internet for it to work - it can work in offline mode with no internet or Cloud connectivity. Roomba® users can opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected via my robot is not anonymized, but it is encrypted and stored securely. iRobot® will delete the data from their servers at the request of a customer. However, there is no information about whether users can download the data which the device has collected from them. The Android App Copyright Licenses state that if you use any API to retrieve data from Google, you acknowledge that the data may be protected by intellectual property rights which are owned by Google or those parties that provide the data (or by other persons or companies on their behalf). Your use of any such API may be subject to additional Terms of Service. You may not modify, rent, lease, loan, sell, distribute or create derivative works based on this data (either in whole or in part) unless allowed by the Terms of Service. ",
        sources:
          "IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      privacySettings: {
        query:
          "Are there privacy settings available? If yes then list what kind of privacy settings are available and their purpose",
        query_response:
          "Yes, there are privacy settings available. Users can set their email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether the user has accessed their email and performed certain functions with it. Users can also opt-out of interest-based advertising by participating companies through various consumer choice mechanisms. The company honors the privacy preferences of its users but is unable to respond to Do Not Track signals set by the user's browser at this time. The company collects various types of personal information, and users can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes. The company's privacy policy also includes information on data collection, sharing, and security practices. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0]",
      },
      limitedUse: {
        query: "Can users limit the use of their data?",
        query_response:
          "Users can limit the use of their data by withholding consent for data collection or opting out of sharing data with their mobile device. They can also set email options to prevent the automatic downloading of images that may contain technologies that would allow the company to know whether they have accessed the email and performed certain functions with it. Additionally, users can opt-out of interest-based advertising through various consumer choice mechanisms. However, some advertising opt-outs may not be effective unless the browser is set to accept cookies. The company is unable to respond to Do Not Track signals set by the browser at this time. For mobile users, there are controls in the device Operating System that enable them to choose whether to allow cookies or share their advertising ID with companies like iRobot or their advertising service providers. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,32.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combineThirdParty: {
        query:
          "Is data combined with data from other third-parties? This may be done for purposes such as analytics, advertising, etc.",
        query_response:
          "Yes, data may be combined with data from other third-parties for purposes such as analytics and advertising. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      combinedPii: {
        query:
          "Is personally identifiable information combined with other data? If yes then how is this combined data used and treated?",
        query_response:
          "Yes, personally identifiable information may be combined with other data. If combined, the information will be treated as personal information. The combined data is used for various purposes such as enhancing and personalizing user experience, interest-based advertising and marketing, monitoring and improving the website and service, and developing new products and features. The specific use and treatment of combined data may vary depending on the type of information being combined. ",
        sources: "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    consent: {
      change: {
        query: "Can users change their consent?",
        query_response:
          "It is unclear whether users can change their consent based on the given content. ",
        sources: "N/A [Page: ]",
      },
      grievance: {
        query: "Is there a grievance redressal mechanism?",
        query_response:
          "There is a grievance redressal mechanism through arbitration. ",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      legalRequest: {
        query:
          "Does the company have a procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity?",
        query_response:
          "It is unclear whether the company has a specific procedure in place to deal with legal requests of data be it from the user, law enforcement, or any other legally permitted entity as the provided content does not directly address this question. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 1.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      optIn: {
        query:
          "Can users opt-in to sharing their data with the company and/or third parties?",
        query_response:
          "It depends on the specific context and service. In general, users may be able to opt-in to sharing their data with the company and/or third parties, but this may require prior, opt-in consent and may vary depending on the specific service and location of the user. iRobot states that they do not sell customer data and are committed to the privacy of their customer-related data, but they may share personal information with other companies owned by or under common ownership as iRobot, third party vendors and service providers, and selected third parties who may offer products or services that users may enjoy. Users may also have the right to request deletion of personal information and opt-out of personal information sales to third parties. However, iRobot is unable to respond to Do Not Track signals set by users' browsers at this time. ",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0]",
      },
      optOut: {
        query:
          "Can users opt-out of sharing their data with the company and/or third parties?",
        query_response:
          'Yes, users can opt-out of sharing their data with the company and/or third parties. Users can disable cookies or set their browser to automatically reject cookies, and can control their communication preferences through the "My Account" page on the website or app. Additionally, iRobot does not sell personal information. For California residents, they have the right to know what personal information has been collected and disclosed, request deletion of personal information, and opt-out of personal information sales to third parties. Sources: IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf, IoT-Project/Roomba/Privacy Policy | iRobot.pdf.',
        sources: "",
      },
      copyright: {
        query: "How are copyright claims to user data handled?",
        query_response:
          "The handling of copyright claims to user data is addressed in the terms and conditions of the APIs and software licenses, including provisions for data portability, prohibitions on certain uses of content, and liability limitations. The specific handling of copyright claims may vary depending on the applicable laws and agreements. ",
        sources:
          "IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 77.0,96.0,97.0], IoT-Project/Roomba/Copyright Licenses | iRobot.pdf [Page: 570.0]",
      },
      legacy: {
        query:
          "Can users assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death?",
        query_response:
          "There is no information provided about whether users can assign a legacy contact/user/individual to their account in order to transfer their data to them in the event of their death.",
        sources: "N/A [Page: ]",
      },
      parental: {
        query:
          "Is parental consent required before children's data is collected or disclosed?",
        query_response:
          "Yes, parental consent is required before children's data is collected or disclosed. The Services are not directed to persons under 13 and iRobot does not intentionally collect or maintain information from persons under 13. If personal information about a person under 16 has been provided to iRobot, they request immediate contact. Source: IoT-Project/Roomba/Privacy Policy | iRobot.pdf",
        sources: "",
      },
    },
    security: {
      identity: {
        query:
          "Does the device or company verify the identity of their using using official documents?",
        query_response:
          "There is no clear answer to the question of whether the device or company verifies the identity of their users using official documents. The provided content discusses topics such as software security, registration, compliance with laws and regulations, and privacy protection, but does not directly address the verification of identity using official documents. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0,86.0,92.0]",
      },
      accountCreation: {
        query:
          "Does the user need to create an account with the company in order to use the device? If any device can be used without creating an account then list them.",
        query_response:
          "It is unclear whether the user needs to create an account with the company in order to use the device. No information is provided about devices that can be used without creating an account.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 31.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      managedAccounts: {
        query:
          "Does the company or device support managed accounts i.e. accounts which are managed by a parent or guardian?",
        query_response:
          "The provided documents do not contain information about whether the company or device supports managed accounts. ",
        sources: "N/A [Page: ]",
      },
      multiFactor: {
        query:
          "Does the accoiunt created by the user with the company to use the device support multi-factor authentication?",
        query_response:
          "The provided documents do not contain information about whether the account created by the user with the company to use the device supports multi-factor authentication.",
        sources: "N/A [Page: ]",
      },
      employeeAccess: {
        query:
          "Do the company employees have access to the data collected by the device from the user? If yes then what kind of access do they have?",
        query_response:
          "It is unclear from the given content whether or not company employees have access to the data collected by the device from the user and what kind of access they have. However, iRobot has implemented privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. Customers can also choose to opt-out of sending map data to the Cloud through a switch in the mobile app. The data collected by robot vacuums can be particularly invasive, and companies often use vague language in their privacy policies that give them broad discretion in how they disseminate and analyze consumer information. It is important for consumers to understand the distinction between data security and data privacy and to be aware of the data that companies are collecting and how it is being used. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 0.0,1.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 32.0]",
      },
      dataTransit: {
        query: "Is data encrypted in transit?",
        query_response:
          "Yes, data is encrypted both in transit and at rest for iRobot connected products. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      dataStorage: {
        query: "Is data encrypted when stored?",
        query_response:
          "Yes, data is encrypted both in transit and at rest. iRobot takes a defense-in-depth approach to security, adding multiple layers of protection around their robots, cloud, and apps from start to finish. They ensure that the development of their products follows industry-standard security best practices, and they are using technology-leading tools to assist their development and security teams during this process. When deployed to market, they work with their suppliers and partners to ensure that their products and their suppliers' and partners' supporting infrastructure (including physical infrastructure, cloud, and mobile apps) are properly configured, monitored, and continuous security improvement processes are in place. Within iRobot’s cloud (built on top of AWS), customer data is stored encrypted. Customer data has multiple encryption keys which are rotated on a regular basis to reduce the risk of the data being compromised even in the event of a key exposure. Within the mobile application, data storage follows the platform’s standards for application-secure data; any sensitive data that is used by the application is not stored on the mobile device, but is instead securely transported to iRobot’s cloud for storage. ",
        sources:
          "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0]",
      },
      breachNotice: {
        query:
          "Is there a notice provided to the user if any of the data collected from them is exposed in a data breach?",
        query_response:
          "There is no clear mention of whether a notice is provided to the user if any of the data collected from them is exposed in a data breach.",
        sources: "None provided. [Page: ]",
      },
      storageLocation: {
        query: "Where is data stored?",
        query_response:
          "For the first question, the state/country's law that governs the interpretation of the contract is English law (SOURCE: 28-pl). For the second question, there is no mention of Michael Jackson in the given content (SOURCE: N/A). For the third question, data is stored securely in iRobot's cloud for storage and is not stored on the mobile device (SOURCE: IoT-Project/Roomba/Data Security | iRobot.pdf).",
        sources: "",
      },
      storageDuration: {
        query: "How long is data stored?",
        query_response:
          "The length of time that personal information is stored varies based on the purposes set out in Annex 2 and in accordance with legal obligations and legitimate business interests. Data held by iRobot will only be used consistent with the relevant and applicable legal requirements of the country in which the personal information is collected. The data collected from iRobot products is encrypted both in transit and at rest, and data access is controlled strictly and limited only to authorized personnel to do their job and help improve product experiences. The Roomba 900 Series, i Series, j series, s Series Robot Vacuums and the Braava jet m Series Robot Mop build a map of a home as they clean, and Clean Map reports make these maps visible to customers in the iRobot HOME App after a cleaning job is complete, showing total area and duration a Roomba 900 Series, i Series, j series, or s Series vacuum cleaned—for up to 30 cleaning jobs. If a customer chooses to send map data to the Cloud, Dirt Detect events are stored in the Cloud and sent to the App when the Clean Map is rendered. Customers with Wi-Fi connected Robot Vacuums and Robot Mops are not required to connect to the Cloud to use their robot. The robot can be used in offline mode with no connection to the internet or Cloud. Customers with Wi-Fi connected Robot vacuums and Robot Mops who do not connect them to the internet will not be able to access certain features, like scheduled cleanings, customized cleaning features, Clean Map reports, and connections to voice control systems like Amazon Alexa and Google Assistant. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      vulnerabilities: {
        query:
          "Are there any known vulneranbilites associated with any of the devices listed in the CVE database? If yes then list the devices and their vulnerabilities.",
        query_response:
          "There is no information provided in the given content about any known vulnerabilities associated with the devices listed in the CVE database.",
        sources: "N/A [Page: ]",
      },
      securityUpdates: {
        query: "How long are security updates provided for the devices?",
        query_response:
          "The document does not provide a clear answer to the question of how long security updates are provided for the devices. ",
        sources: "IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      passwordComplexity: {
        query:
          "Are their any password complexity requirements for the account used to use the device? If yes then what are they?",
        query_response:
          "There is no information provided about password complexity requirements for the account used to use the device.",
        sources: "N/A [Page: ]",
      },
    },
    privacyCompliance: {
      complianceAudits: {
        query:
          "Do the devices and their parent company undergo regular industry standard compliance audits with respect to privacy and security?",
        query_response:
          'iRobot has implemented many privacy- and security-protecting measures in its customer devices, including using encryption, regularly patching security vulnerabilities, limiting and monitoring internal employee access to information, and providing customers with detailed information on the data that it collects. They also have a Data Privacy Policy and a Data Security Policy. However, the article also highlights the gap between how companies talk about privacy and how consumers understand it, and the vague language in privacy policies that permit companies to use data for the purposes of "improving products and services." It is unclear if iRobot undergoes regular industry standard compliance audits with respect to privacy and security. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      defaultPrivacy: {
        query:
          "What are the default privacy controls for data collected by the device? Does it have data collection enabled by default?",
        query_response:
          "For the iRobot Roomba, the privacy policy states that data collection is enabled by default, but users can opt-out of specific features that require opt-in. iRobot does not sell customer data and has implemented privacy and security measures in its devices, including encryption, regular security vulnerability patching, and limiting employee access to information. The Roomba collects mapping and navigation information via VSLAM, and usage data can be sent to the cloud to be shown on the customer's mobile device. Images used for navigation are not sent to the cloud. However, there is a gap between how companies talk about privacy and how consumers understand it, and privacy policies often contain broad language permitting the use of data for improving products and services. It is also important to note that manufacturers recognize the privacy risks presented by on-device cameras and must prioritize privacy and security. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/iRobot Home - Apps on Google Play.pdf [Page: 0.0], IoT-Project/Roomba/Privacy and Data Sharing Common Questions | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0]",
      },
      calOPPA: {
        query:
          "Do any of the devices comply with the California Online Privacy Protection Act (CalOPPA)?",
        query_response:
          "Based on the information provided, it is unclear whether any of the devices comply with the California Online Privacy Protection Act (CalOPPA). The privacy policies mention compliance with the California Consumer Privacy Act (CCPA) but do not specifically mention CalOPPA. ",
        sources:
          "IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      coppa: {
        query:
          "Do any of the devices comply with the Children's Online Privacy Protection Act (COPPA)?",
        query_response:
          "It is unclear whether any of the devices comply with the Children's Online Privacy Protection Act (COPPA) based on the provided content. ",
        sources: "None provided. [Page: ]",
      },
      ferpa: {
        query:
          "Do any of the devices comply with the Family Educational Rights and Privacy Act (FERPA)?",
        query_response:
          "There is no clear information provided about whether any of the devices comply with the Family Educational Rights and Privacy Act (FERPA).",
        sources: "N/A [Page: ]",
      },
      gdpr: {
        query:
          "Do any of the devices comply with the General Data Protection Regulation (GDPR)?",
        query_response:
          "It is unclear whether any of the devices comply with the General Data Protection Regulation (GDPR) as there is no mention of GDPR compliance in the provided content. ",
        sources: "None provided. [Page: ]",
      },
      policyVersion: {
        query: "What is the version or effective date of the privacy policy?",
        query_response:
          "The version or effective date of the privacy policy is May 25, 2018.",
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0,1.0]",
      },
      policyChangeLog: {
        query: "Do privacy policies indicate a change log?",
        query_response:
          "It is possible for privacy policies to indicate a change log, but it is not a requirement. The reviewed privacy policies did not mention a change log. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyUpdateNotification: {
        query: "Are users notified when the privacy policies are updated?",
        query_response:
          "It depends on the company. Some companies, such as iRobot, mention updates to their privacy policy in their policy document, but it is not a requirement. It is important for users to regularly check the privacy policies of the companies they interact with to stay informed of any changes. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyCoverage: {
        query: "Do privacy policies indicate which products are covered?",
        query_response:
          "The privacy policies do not explicitly indicate which products are covered, but they do outline the company's approach to data privacy and security. The iRobot privacy policy specifically mentions their commitment to safeguarding the privacy of customer-related information, including data collected by their connected products. They also state that they do not sell information about their customers to third parties and have implemented privacy- and security-protecting measures in their customer devices. The HR privacy policy outlines how iRobot collects, stores, processes, transfers, shares, and uses personal information of their employees, but does not mention specific products. ",
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/Data Privacy and Security | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyContact: {
        query:
          "How can users contact the company about privacy policy questions, complaints, or material changes?",
        query_response:
          'Users can contact the company about privacy policy questions, complaints, or material changes by contacting them at global.irobot.com or by writing to them at iRobot Corporation 8 Crosby Drive Bedford, MA 01730. They can also contact the company if they have an unresolved privacy or data use concern that has not been addressed satisfactorily by using the U.S.-based third party dispute resolution provider at https://feedback-form.truste.com/watchdog/request. California residents can request certain information about the disclosure of personal information during the prior calendar year to third parties for their direct marketing purposes by writing to iRobot Corporation 8 Crosby Drive Bedford, MA 01730 or by sending an email to global.irobot.com with the words "California Privacy Rights" in the subject line. ',
        sources:
          "IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/Data Security | iRobot.pdf [Page: 0.0]",
      },
      policyPrinciples: {
        query: "Do privacy policies indicate privacy principles?",
        query_response:
          'Privacy policies may contain information about how companies collect, store, process, transfer, share, and use personal information, but they may not necessarily indicate privacy principles. Privacy policies shape companies\' legal responsibilities, but there is a wide gap between the way companies talk about privacy and the way consumers understand it. Privacy policies often contain language permitting the use of data for the purposes of "improving products and services," which is broad enough to permit basically anything. Companies may use subtle differences, like the distinction between "sharing" data and selling it, that make how they handle privacy particularly hard for non-experts to parse. ',
        sources:
          "IoT-Project/Roomba/A Roomba recorded a woman on the toilet. How did screenshots end up on Facebook? | MIT Technology Review.pdf [Page: 1.0], IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
      policyLanguages: {
        query:
          "Are privacy policies available in multiple languages? List the languages the privacy policy is available in",
        query_response:
          "It is not specified in the provided content whether the privacy policy is available in multiple languages.",
        sources: "N/A [Page: ]",
      },
      prohibitedActivities: {
        query:
          "Are there any prohibited activities that may lead to account termination?",
        query_response:
          "Yes, there are prohibited activities that may lead to account termination, including but not limited to defaming, abusing, harassing, stalking, or threatening others, promoting or facilitating unlawful online gambling or disruptive commercial messages or advertisements, and using the APIs for activities where the use or failure of the APIs could lead to death, personal injury, or environmental damage. The Terms also state that Google reserves the right to terminate the Terms with the user or discontinue the APIs or any portion or feature or the user's access thereto for any reason and at any time without liability or other obligation to the user. ",
        sources:
          "IoT-Project/Roomba/Code of Business Conduct and Ethics (2021).pdf [Page: 12.0], IoT-Project/Roomba/Android App Copyright Licenses | iRobot.pdf [Page: 92.0,95.0,99.0]",
      },
      classActionWaiver: {
        query:
          "Are users required to waive the right to join a class-action lawsuit?",
        query_response:
          "Yes, users are required to waive the right to join a class-action lawsuit.",
        sources:
          "IoT-Project/Roomba/Terms and Conditions | iRobot.pdf [Page: 0.0]",
      },
      internationalData: {
        query:
          "Are user data subject to international data transfer or jurisdiction laws?",
        query_response:
          "User data may be subject to international data transfer or jurisdiction laws, and may be accessible to law enforcement and regulatory authorities in accordance with the laws of other jurisdictions. The specific laws governing international data transfer or jurisdiction are not mentioned in the provided content. ",
        sources:
          "IoT-Project/Roomba/HR Privacy Policy | iRobot.pdf [Page: 0.0], IoT-Project/Roomba/WebAPI- Privacy Policy | iRobot.pdf [Page: 0.0]",
      },
    },
    intendedUsers: {
      children: {
        query: "Is the device intended for use by children under 13?",
        query_response:
          "The device can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      teens: {
        query: "Is the device intended for use by teens?",
        query_response:
          "The device is intended for use by children aged from 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/H1 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      adults: {
        query: "Is the device intended for use by adults over 18?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. However, it is not specified whether the devices are intended for use by adults over 18.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0]",
      },
      parents: {
        query:
          "Is the device intended for use under parent or guardian supervision?",
        query_response:
          "The devices can be used by children aged 8 years and above and persons with reduced physical, sensory, or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
        sources:
          "IoT-Project/Roomba/Combo j7 Owner's Guide.pdf [Page: 0.0], IoT-Project/Roomba/j6 Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Clean Base Automatic Dirt Disposal Owner’s Guide.pdf [Page: 1.0], IoT-Project/Roomba/Braava jet Owner’s Guide.pdf [Page: 2.0]",
      },
    },
  },
];
