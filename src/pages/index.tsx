import { motion } from "framer-motion";
import DeviceCard from "../components/deviceCard";

import roombaImage from "../../public/roomba.png";
import echoDotImage from "../../public/echo-dot.png";
import ringImage from "../../public/ring_camera.png";
import nestImage from "../../public/nest_thermostat.png";
import hueImage from "../../public/philips_hue.png";
import rokuImage from "../../public/roku.png";
import { Typewriter } from "react-simple-typewriter";

const devices = [
  {
    title: "Roomba",
    image: roombaImage,
    link: "/devices/Roomba",
    category: "Vacuum",
  },
  {
    title: "Echo Dot",
    image: echoDotImage,
    link: "/devices/Echo-dot",
    category: "Speaker",
  },
  {
    title: "Ring Camera",
    image: ringImage,
    link: "/devices/Ring-camera",
    category: "Camera",
  },
  {
    title: "Roku Streaming",
    image: rokuImage,
    link: "/devices/Roku",
    category: "TV",
  },
  {
    title: "Nest Thermostat",
    image: nestImage,
    link: "/devices/Nest-thermostat",
    category: "Temp",
  },
  {
    title: "Philips Hue",
    image: hueImage,
    link: "/devices/Philips-hue",
    category: "Light",
  },
];

const Home = () => {
  return (
    <>
      <motion.div
        className="bg-[#bcbddc] min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="container mx-auto px-4 py-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className="text-8xl text-center font-black text-indigo-950 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            IoTective
          </motion.h1>
          <motion.p
            className="text-xl text-center font-bold text-gray-800 mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Typewriter
              words={["We read the fine print, so you don't have to."]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </motion.p>
          <motion.h2
            className="text-3xl text-center font-bold text-gray-800 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Select your device:
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {devices.map((device, index) => (
              <DeviceCard key={index} device={device} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
