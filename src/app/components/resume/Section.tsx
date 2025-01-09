import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  content: React.ReactNode;
  expandedSection: string | null;
  setExpandedSection: (section: string | null) => void;
  colors: {
    cardBg: string;
    border: string;
    accent: {
      primary: string;
    };
  };
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  icon,
  content,
  expandedSection,
  setExpandedSection,
  colors,
}) => (
  <motion.div
    className={`mb-8 ${colors.cardBg} rounded-lg shadow-md overflow-hidden border ${colors.border}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className={`flex items-center justify-between p-3 cursor-pointer bg-gradient-to-r ${colors.accent.primary}`}
      onClick={() => setExpandedSection(expandedSection === id ? null : id)}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-center space-x-2 text-white">
        {React.cloneElement(icon, { className: "text-white" })}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {expandedSection === id ? (
        <ChevronUp size={20} className="text-white" />
      ) : (
        <ChevronDown size={20} className="text-white" />
      )}
    </motion.div>

    <AnimatePresence>
      {expandedSection === id && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);
