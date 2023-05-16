import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  questions: Question[];
}

const FAQ = ({ questions }: Props) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number>(0);
  if (!questions || questions.length === 0) {
    return <div>No FAQ available.</div>;
  }
  return (
    <div>
      <motion.h1
        className="text-2xl font-bold text-indigo-950 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Frequently Asked Questions
      </motion.h1>
      {questions?.map((question) => (
        <motion.div
          key={question?.id}
          className="my-2 p-2 bg-[#bcbddc] rounded-md"
          onClick={() =>
            setExpandedQuestionId(
              expandedQuestionId === question?.id ? 0 : question?.id
            )
          }
        >
          <motion.h3
            className="font-bold"
            animate={{
              fontWeight: expandedQuestionId === question?.id ? 700 : 400,
            }}
          >
            {question?.question}
          </motion.h3>
          <AnimatePresence>
            {expandedQuestionId === question?.id && (
              <motion.div
                key="content"
                className="mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p>{question.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;
