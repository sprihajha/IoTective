import { motion } from "framer-motion";

interface TrainingMaterial {
  title: string;
  url: string;
}

interface Props {
  materials: TrainingMaterial[];
}

const TrainingMaterials = ({ materials }: Props) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-bold mb-2">Training Materials</h2>
      <ul>
        {materials.map((material) => (
          <li key={material.url}>
            <a href={material.url} target="_blank" rel="noopener noreferrer">
              {material.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TrainingMaterials;
