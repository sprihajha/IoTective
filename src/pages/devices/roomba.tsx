import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Device } from "../../types/device";
import DevicePage from "../../components/devicePage";
import FAQ from "../../components/faq";

interface faqList {
  id: number;
  question: string;
  answer: string;
}

const Roomba = () => {
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

  const faq = deviceData?.usage?.faq?.query_response
    .split("\n\n")
    .map((faq, index) => {
      const regex = /(\d+\.)\s(.*)\nA:\s(.*)\s\((.*)\)/;
      const match = regex.exec(faq);
      if (match) {
        const question = match[2];
        const answer = match[3];
        return { id: index, question, answer };
      }
      return null;
    })
    .filter(Boolean) as faqList[];

  return (
    <div>
      {deviceData && (
        <>
          <DevicePage device={deviceData} />
          <FAQ questions={faq} />
        </>
      )}
    </div>
  );
};

export default Roomba;
