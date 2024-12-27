import React from "react";
import { motion } from "framer-motion";

interface Skill {
  [category: string]: string[];
}

interface SkillsVisualizationProps {
  skills: Skill;
  colors: {
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    cardBg: string;
  };
}

export const SkillsVisualization: React.FC<SkillsVisualizationProps> = ({
  skills,
  colors,
}) => {
  const allSkills = Object.values(skills).flat();
  const maxSkills = Math.max(...Object.values(skills).map((arr) => arr.length));

  const gradients = [
    "from-blue-400 to-teal-400",
    "from-orange-400 to-red-400",
    "from-green-400 to-emerald-400",
    "from-purple-400 to-pink-400",
    "from-yellow-400 to-orange-400",
    "from-indigo-400 to-purple-400",
  ];

  return (
    <div className="mb-6">
      <h3 className={`font-semibold mb-3 text-lg ${colors.text.primary}`}>
        Skills Overview
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={category} className={`${colors.cardBg} p-4 rounded-lg`}>
            <h4 className={`${colors.text.secondary} mb-2 capitalize`}>
              {category}
            </h4>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${
                  gradients[index % gradients.length]
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${(skillList.length / maxSkills) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className={`${colors.text.tertiary} text-sm mt-1`}>
              {skillList.length} skills
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
