import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Device {
  title: string;
  image: string;
  link: string;
}

const devices: Device[] = [
  {
    title: "Roomba",
    image: "/roomba.jpg",
    link: "/devices/roomba",
  },
  {
    title: "Amazon Echo Dot",
    image: "/echo_dot.jpg",
    link: "/devices/echo-dot",
  },
  {
    title: "Ring Camera",
    image: "/ring_camera.jpg",
    link: "/devices/ring-camera",
  },
];

const DeviceCard = ({ device }: { device: Device }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center justify-center rounded-xl shadow-md p-8 m-4 transition-all duration-300 ease-in-out bg-fbb4ae"
  >
    <div className="relative">
      <Image src={device.image} alt={device.title} width={40} height={40} />
    </div>
    <h2 className="text-2xl font-bold text-center mt-4 mb-2">{device.title}</h2>
    <Link
      className="bg-b3cde3 rounded-full px-8 py-3 text-lg font-bold transition-all duration-300 ease-in-out hover:bg-white hover:text-fbb4ae"
      href={device.link}
    >
      Check it out
    </Link>
  </motion.div>
);

const Home = () => (
  <div className="bg-ccebc5 min-h-screen">
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl text-center font-bold text-decbe4 mb-4">
        IoTective
      </h1>
      <p className="text-xl text-center text-gray-800 mb-8">
        Your guide to securing your IoT devices
      </p>
      <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
        Select your device:
      </h2>
      <div className="flex flex-wrap justify-center">
        {devices.map((device, index) => (
          <DeviceCard key={index} device={device} />
        ))}
      </div>
    </div>
  </div>
);

export default Home;
