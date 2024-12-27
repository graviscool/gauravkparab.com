import React from 'react';
import { motion } from 'framer-motion';

export const SkillsVisualization = ({ skills, colors }) => {
  const allSkills = Object.values(skills).flat();
  const maxSkills = Math.max(...Object.values(skills).map(arr => arr.length));

  return (
    <div className="mb-6">
      <h3 className={`font-semibold mb-3 text-lg ${colors.text.primary}`}>Skills Overview</h3>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className={`${colors.cardBg} p-4 rounded-lg`}>
            <h4 className={`${colors.text.secondary} mb-2 capitalize`}>{category}</h4>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-teal-400"
                initial={{ width: 0 }}
                animate={{ width: `${(skillList.length / maxSkills) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className={`${colors.text.tertiary} text-sm mt-1`}>{skillList.length} skills</p>
          </div>
        ))}
      </div>
    </div>
  );
};

