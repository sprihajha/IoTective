import { motion } from "framer-motion";
import { Device } from "../pages/types/device";

interface Props {
  device: Device;
}

const DevicePage = ({ device }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-fbb4ae">
      <motion.h1
        className="text-5xl text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {device.name}
      </motion.h1>
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-2">Data Collection</h2>
        <ul>
          {device.dataCollection &&
            Object.entries(device.dataCollection).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
        </ul>
      </motion.div>
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-2">Data Usage</h2>
        <ul>
          {device.dataUsage &&
            Object.entries(device.dataUsage).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
        </ul>
      </motion.div>
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-2">Data Storage</h2>
        <ul>
          {device.dataStorage &&
            Object.entries(device.dataStorage).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
        </ul>
      </motion.div>
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-2">Data Security</h2>
        <ul>
          {device.dataSecurity &&
            Object.entries(device.dataSecurity).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default DevicePage;
