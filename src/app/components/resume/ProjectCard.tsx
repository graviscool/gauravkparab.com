import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    date: string;
    tech: string;
    details: string[];
  };
  colors: {
    project: {
      bg: string;
      hoverBg: string;
    };
    border: string;
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
}

export const ProjectCard = ({ project, colors }: ProjectCardProps) => (
  <motion.div
    className={`p-5 rounded-lg ${colors.project.bg} border ${colors.border}`}
    whileHover={{
      scale: 1.02,
      // backgroundColor: colors.project.hoverBg
    }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className={`font-semibold text-xl ${colors.text.primary}`}>
        {project.title}
      </h3>
      <span className={`${colors.text.tertiary} text-sm`}>{project.date}</span>
    </div>
    <p className={`text-blue-500 text-sm mb-3 ${colors.text.secondary}`}>
      {project.tech}
    </p>
    <ul className="space-y-2">
      {project.details.map((detail, i) => (
        <li key={i} className={`${colors.text.secondary} flex items-start`}>
          <span className="mr-2">•</span>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);
