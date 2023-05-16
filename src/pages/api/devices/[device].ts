import { NextApiRequest, NextApiResponse } from "next";
import { devices } from "../../../data/devices";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { device } = req.query;

  try {
    const selectedDevice = devices.find((d) => d.name === device);

    if (!selectedDevice) {
      return res.status(404).json({ message: `Device ${device} not found` });
    }

    return res.status(200).json(selectedDevice);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching device data" });
  }
}
