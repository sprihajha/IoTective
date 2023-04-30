import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  faqs: { question: string; answer: string }[];
}

const FAQ = ({ faqs }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h3 className="text-lg font-bold mr-2">{faq.question}</h3>
            <svg
              className="fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 0 1 1.414 0L12 11.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 13l4.293 4.293a1 1 0 1 1-1.414 1.414L12 14.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 13 6.293 8.707a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </motion.div>
          {activeIndex === index && (
            <motion.p
              className="mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.2 }}
            >
              {faq.answer}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
