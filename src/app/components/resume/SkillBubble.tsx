import React from "react";
import { motion } from "framer-motion";

interface SkillBubbleProps {
  skill: string;
  colors: {
    skill: {
      bg: string;
      hoverBg: string;
    };
    text: {
      primary: string;
    };
  };
}

export const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, colors }) => (
  <motion.div
    key={skill}
    className={`px-4 py-2 ${colors.skill.bg} rounded-full cursor-pointer ${colors.text.primary} text-sm font-medium`}
    whileHover={{
      scale: 1.05,
      backgroundColor: colors.skill.hoverBg,
    }}
  >
    {skill}
  </motion.div>
);
