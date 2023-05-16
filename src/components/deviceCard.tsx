import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { forwardRef, useState } from "react";
import React from "react";

interface Device {
  title: string;
  image: StaticImageData;
  category: string;
  link: string;
}

// eslint-disable-next-line react/display-name
const DeviceCard = forwardRef<HTMLDivElement, { device: Device }>(
  ({ device }, ref) => {
    const [showSvg, setShowSvg] = useState(false);

    return (
      <Link href={device.link} passHref legacyBehavior>
        <motion.div
          ref={ref}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setShowSvg(true)}
          onHoverEnd={() => setShowSvg(false)}
          className={`relative flex flex-col items-center justify-center rounded-xl shadow-lg p-8 m-4 transition-all duration-300 ease-in-out h-72 w-72 ${
            showSvg ? "bg-[#756bb1]" : "bg-[#efedf5]"
          }`}
          style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-4 bg-white rounded-lg p-2"
            style={{
              height: "300px",
              width: "275px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src={device.image}
              alt={device.title}
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold text-center mb-1"
          >
            {device.title}
          </motion.h2>
          <p className="text-gray-700 font-medium text-base mb-4 opacity-70">
            {device.category}
          </p>
          {showSvg && (
            <motion.div
              className="absolute bottom-0 right-0 m-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: 1.2,
                  transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  },
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </motion.div>
          )}
        </motion.div>
      </Link>
    );
  }
);

export default DeviceCard;
