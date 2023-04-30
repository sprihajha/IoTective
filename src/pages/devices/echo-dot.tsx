import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Device } from "../types/device";
import DevicePage from "../../components/devicePage";
import ThreatModel from "../../components/threatModel";
import TrainingMaterials from "../../components/trainingMaterials";
import FAQ from "../../components/faq";

const EchoDot = () => {
  const router = useRouter();
  const device = router.route.split("/").pop();
  const [deviceData, setDeviceData] = useState<Device | null>(null);

  useEffect(() => {
    const fetchDeviceData = async () => {
      const res = await fetch(`/api/devices/${device}`);
      const data = await res.json();
      setDeviceData(data);
    };
    fetchDeviceData();
  }, [device]);

  const risks = [
    "Unauthorized access to the device",
    "Collection of personal data",
    "Data breaches",
  ];

  const mitigations = [
    "Set a strong password",
    "Disable data collection",
    "Regularly update the device's firmware",
  ];

  const bestPractices = [
    "Use a secure Wi-Fi network",
    "Regularly check the device's activity log",
    "Disconnect the device when not in use",
  ];

  const materials = [
    {
      title: "Introduction to IoT Security",
      url: "https://www.youtube.com/watch?v=abcdefg",
    },
    {
      title: "Securing Your Smart Home Devices",
      url: "https://www.example.com/smart-home-security",
    },
    {
      title: "Best Practices for Industrial IoT Security",
      url: "https://www.example.com/industrial-iot-security",
    },
  ];

  const faqs = [
    {
      question: "How do I reset my Echo Dot device?",
      answer:
        "To reset your Echo Dot, press and hold the Action button (the button with a dot) for 25 seconds until the light ring turns off and on again.",
    },
    {
      question: "Can my Echo Dot be hacked?",
      answer:
        "While no device is completely hack-proof, Amazon has implemented multiple layers of security to protect your Echo Dot. However, to minimize the risks of hacking, make sure to keep your Echo Dot up to date with the latest software updates and always use a strong Wi-Fi password.",
    },
    {
      question: "How can I change the wake word for my Echo Dot?",
      answer:
        "To change the wake word, open the Alexa app on your smartphone or tablet, go to Settings > Device Settings, select your Echo Dot device, and then select Wake Word. You can choose between the available wake word options, which currently include Alexa, Echo, Computer, and Amazon.",
    },
    {
      question: "What data does my Echo Dot collect?",
      answer:
        "Your Echo Dot collects audio recordings when you interact with Alexa, as well as device and usage data to improve its performance and features. You can view and delete your Alexa voice recordings in the Alexa app, and you can also disable voice purchasing and other features that may collect data.",
    },
  ];

  return (
    <>
      <div>{deviceData && <DevicePage device={deviceData} />}</div>
      <ThreatModel
        risks={risks}
        mitigations={mitigations}
        bestPractices={bestPractices}
      />
      <TrainingMaterials materials={materials} />
      <FAQ faqs={faqs} />
    </>
  );
};

export default EchoDot;
