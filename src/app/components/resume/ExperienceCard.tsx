import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceCard = ({ experience, colors, index }) => (
  <motion.div
    className={`border-l-2 ${colors.border} pl-4`}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <h3 className={`font-semibold text-xl mb-1 ${colors.text.primary}`}>{experience.title}</h3>
    <p className={`${colors.text.secondary} text-lg mb-1`}>{experience.company} - {experience.location}</p>
    <p className={`${colors.text.tertiary} mb-3`}>{experience.date}</p>
    <ul className="space-y-2">
      {experience.details.map((detail, i) => (
        <li key={i} className={`${colors.text.secondary} flex items-start`}>
          <span className="mr-2 mt-1.5">•</span>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

