import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Device } from "../types/device";
import DevicePage from "../../components/devicePage";

const RingCamera = () => {
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

  return <div>{deviceData && <DevicePage device={deviceData} />}</div>;
};

export default RingCamera;
