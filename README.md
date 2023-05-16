# IoTective

## Personal Privacy Investigator powered by OpenAI

> Built for [ECE-GY 9393: **IoT Security & Privacy**](https://hdanny.org/#classes) held at NYU Tandon.

Are you among the millions of people who skip the privacy information on their gadgets and scroll right to the "I Agree" button? If this sounds like you, you may unknowingly expose yourself to uninvited data sharing with third parties and poor privacy measures that open your data to cyberattacks.

The IoTective project uses generative AI to translate jargon-laden IoT device privacy documentation and automatically identify risks. As a result, it empowers consumers to take control of their privacy and make better-informed decisions about the devices they use.

[Download collected data here!](https://drive.google.com/file/d/1f9yTW1GwyFPLcAVL9OoUXD2gI51BFns3/view?usp=sharing)

### Installation

To run the application on your local machine, follow these steps:

1. Clone this repository to your local machine using `git clone`
2. Navigate to the cloned directory using `cd <repository-name>`
3. Install dependencies using `npm install`
4. Set up your *.env* keys. Follow instruction on [OpenAI](https://platform.openai.com/account/api-keys) and [Pinecone](https://www.pinecone.io/) for API keys.
5. Start the application using `npm run dev`
6. The application will be available at <http://localhost:3000/>
