import { motion } from "framer-motion";

interface Props {
  risks: string[];
  mitigations: string[];
  bestPractices: string[];
}

const ThreatModel = ({ risks, mitigations, bestPractices }: Props) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-bold mb-2">Potential Risks</h2>
      <ul>
        {risks.map((risk) => (
          <li key={risk}>{risk}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2 mt-6">Mitigation Strategies</h2>
      <ul>
        {mitigations.map((mitigation) => (
          <li key={mitigation}>{mitigation}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2 mt-6">Best Practices</h2>
      <ul>
        {bestPractices.map((bestPractice) => (
          <li key={bestPractice}>{bestPractice}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ThreatModel;
