import React from 'react';
import { motion } from 'framer-motion';

export const SkillBubble = ({ skill, colors, setHoveredSkill }) => (
  <motion.div
    key={skill}
    className={`px-4 py-2 ${colors.skill.bg} rounded-full cursor-pointer ${colors.text.primary} text-sm font-medium`}
    whileHover={{ 
      scale: 1.05, 
      backgroundColor: colors.skill.hoverBg
    }}
    onHoverStart={() => setHoveredSkill(skill)}
    onHoverEnd={() => setHoveredSkill(null)}
  >
    {skill}
  </motion.div>
);

