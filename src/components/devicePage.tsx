import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Device } from "../types/device";
import Link from "next/link";

interface Props {
  device: Device;
}

interface SectionData {
  query_response: string;
  sources: string;
}

interface CombinedSection {
  key: string;
  value: SectionData;
}

const DevicePage = ({ device }: Props) => {
  const [selectedCard, setSelectedCard] = useState("");

  const handleClose = () => {
    setSelectedCard("");
  };

  const cardMappings = {
    dataControls: ["controls", "consent"],
    dataSecurity: ["security"],
    dataUsage: ["usage", "connectivity", "sharing", "social", "tracking"],
    privacy: ["privacyCompliance", "intendedUsers"],
  };

  const cards = Object.keys(cardMappings).map((key) => ({
    id: key,
    title: key
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  }));

  const selectedCardContent = cards.find((card) => card.id === selectedCard);

  const combinedSections: CombinedSection[] = Object.entries(
    cardMappings
  ).reduce((acc: CombinedSection[], [key, value]) => {
    const sectionData = Object.assign(
      {},
      ...value.map((section) => device[section])
    );

    if (Object.keys(sectionData).length > 0) {
      acc.push({
        key: key,
        value: sectionData,
      });
    }
    return acc;
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#bcbddc]">
      <Link
        href="/"
        className="absolute top-4 right-4 text-gray-700 text-lg hover:underline"
      >
        <button className="text-white text-base font-semibold py-2 px-4 rounded-lg bg-indigo-950 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50">
          Back to home
        </button>
      </Link>
      <motion.h1
        className="text-8xl text-center font-black text-indigo-950 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {device?.name}
      </motion.h1>

      <div className="grid grid-cols-2 gap-8 w-full">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="flex flex-col justify-center items-center bg-[#efedf5] rounded-lg shadow-lg p-8 h-72"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCard(card.id)}
            layoutId={`${card.id}Card`}
          >
            <h2 className="text-5xl text-indigo-800 font-bold text-center mb-4">
              {card.title}
            </h2>
            <p className="text-gray-700 font-medium text-base mb-4 opacity-70">
              Click to open
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 m-4 relative w-11/12 h-4/5 overflow-auto"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
            >
              <button
                className="absolute top-0 right-0 m-4"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              {selectedCardContent && (
                <>
                  <h2 className="text-2xl font-bold text-center mb-4">
                    {selectedCardContent.title}
                  </h2>
                  {combinedSections
                    .filter((section) => section.key === selectedCardContent.id)
                    .map((section) => (
                      <div key={section.key}>
                        {Object.entries(section.value).map(([key, value]) => (
                          <div key={key}>
                            <br />
                            <p className="text-gray-700 font-medium text-base mb-4 opacity-70">
                              {key + ": " + value.query}
                            </p>
                            <p className="text-gray-700 font-medium text-base mb-4">
                              {value.query_response}
                            </p>
                            <div className="text-gray-700 font-medium text-base mb-4">
                              {value.sources
                                .split(", ")
                                .map((source: string) => source.trim())
                                .slice(0, 2)
                                .map((source: string, index: number) => (
                                  <p
                                    key={index}
                                    className="text-gray-700 font-medium text-base mb-4"
                                  >
                                    Source {index + 1}: {source}
                                  </p>
                                ))}
                            </div>
                            <hr />
                          </div>
                        ))}
                      </div>
                    ))}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DevicePage;
