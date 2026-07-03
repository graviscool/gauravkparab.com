import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Mail,
  Terminal,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";
import { Section } from "./resume/Section";
import { SkillBubble } from "./resume/SkillBubble";
import { ExperienceCard } from "./resume/ExperienceCard";
import { ProjectCard } from "./resume/ProjectCard";
import { SkillsVisualization } from "./resume/SkillsVisualization";
import Image from "next/image";

const InteractiveResume = ({ darkMode }: { darkMode: boolean }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>("all");

  const colors = {
    background: darkMode ? "bg-neutral-900" : "bg-slate-50",
    cardBg: darkMode ? "bg-neutral-800" : "bg-white",
    cardHover: darkMode ? "bg-neutral-700" : "bg-slate-100",
    text: {
      primary: darkMode ? "text-slate-100" : "text-slate-800",
      secondary: darkMode ? "text-slate-300" : "text-slate-600",
      tertiary: darkMode ? "text-slate-400" : "text-slate-500",
    },
    accent: {
      primary: darkMode
        ? "from-slate-400 to-blue-400"
        : "from-slate-500 to-blue-500",
      secondary: darkMode
        ? "from-slate-400 to-blue-400"
        : "from-slate-500 to-blue-500",
    },
    border: darkMode ? "border-neutral-700" : "border-slate-200",
    skill: {
      bg: darkMode ? "bg-neutral-700" : "bg-slate-200",
      hoverBg: darkMode ? "bg-neutral-600" : "bg-slate-300",
    },
    project: {
      bg: darkMode ? "bg-neutral-800" : "bg-slate-100",
      hoverBg: darkMode ? "bg-neutral-700" : "bg-white",
    },
  };

  const skills = {
    Languages: [
      "Python",
      "Java",
      "JavaScript",
      "C/C++",
      "HTML/CSS",
      "Bash",
      "SQL",
      "Assembly",
      "React",
      "Next.js",
      "R",
    ],
    "Developer Tools": [
      "Node.js",
      "Docker",
      "Amazon Web Services",
      "REST APIs",
    ],
    Interests: ["Cloud", "Artificial Intelligence", "Algorithms", "DevOps"],
  };

  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Amazon Web Services",
      location: "Arlington, VA",
      date: "June 2025 – August 2025",
      details: [
        "Designed a customer facing API to automate the onboarding process for an existing feature, reducing onboarding time from ~1 week to a few seconds",
        "Reviewed threat mitigations for API implementation, ensuring standards prior to public feature launch",
        "Built scalable API infrastructure using DynamoDB, EC2, and AWS Organizations",
      ],
    },
    {
      title: "Software Engineering Co-op",
      company: "General Dynamics",
      location: "Groton, CT",
      date: "January 2025 – May 2025",
      details: [
        "Developed various scripts for database processes, automating requirement traceability, reducing manual labor, and speeding up reviews by 40%",
        "Resolved critical bug requests and issues by debugging DXL code, analyzing database inconsistencies, and quickly implementing fixes for impacted users",
        "Maintained critical testing and publishing frameworks for mission-critical software, ensuring reliability and redundancy in operational environments",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "The Pennsylvania State University",
      location: "University Park, PA",
      date: "August 2022 – December 2023",
      details: [
        "Facilitated weekly recitations for ~200 students learning Python programming fundamentals",
        "Led three weekly review sessions to help students understand the new material presented in lectures",
        "Conducted code reviews for 100+ Python assignments per week, providing feedback to students and instructors",
      ],
    },
  ];

  const projects = [
    {
      title: "Dashboard",
      date: "July 2024 – Present",
      tech: "React, Next.js",
      details: [
        "Designed a responsive dashboard to securely display over 200 sensitive documents, improving engagement for 100+ users.",
        "Used Discord OAuth to lock sensitive data behind authentication",
      ],
    },
  ];

  return (
    <div
      className={`${colors.background} min-h-screen transition-colors duration-300`}
    >
      <div className="max-w-8xl mx-auto p-3">
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`text-5xl font-bold mb-4 bg-gradient-to-r ${colors.accent.secondary} bg-clip-text text-transparent`}
          >
            Gaurav Parab
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <div className={`flex items-center ${colors.text.secondary}`}>
              <MapPin size={18} className="mr-2" />
              <span>San Jose, CA</span>
            </div>
            <a
              href="tel:4088135199"
              className={`${colors.text.secondary} hover:text-blue-500 transition-colors flex items-center`}
            >
              <Phone size={18} className="mr-2" /> 408-813-5199
            </a>
            <a
              href="mailto:gkparab1@gmail.com"
              className={`${colors.text.secondary} hover:text-blue-500 transition-colors flex items-center`}
            >
              <Mail size={18} className="mr-2" /> gkparab1@gmail.com
            </a>
            <a
              href="https://gauravkparab.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.text.secondary} hover:text-blue-500 transition-colors flex items-center`}
            >
              <Globe size={18} className="mr-2" /> gauravkparab.com
            </a>
            <a
              href="https://linkedin.com/in/gparab"
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.text.secondary} hover:text-blue-500 transition-colors flex items-center`}
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="Linkedin"
                className="mr-2"
                width={18}
                height={18}
              />
              linkedin.com/in/gparab
            </a>
          </div>
        </motion.div>

        <Section
          id="experience"
          title="Technical Experience"
          icon={<Briefcase size={24} />}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
          colors={colors}
          content={
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  experience={exp}
                  colors={colors}
                  index={index}
                />
              ))}
            </div>
          }
        />

        <Section
          id="education"
          title="Education"
          icon={<GraduationCap size={24} />}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
          colors={colors}
          content={
            <motion.div
              className={`${colors.cardBg} p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${colors.text.primary}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.h3
                className="font-bold text-2xl mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                The Pennsylvania State University
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className={`${colors.text.secondary} text-lg font-semibold`}>
                  Bachelor of Science (B.S.), Computer Science
                </p>
                <p className={`${colors.text.secondary} mb-2`}>
                  Minor in ELD | GPA: 3.66
                </p>
                <p className={`${colors.text.tertiary} mb-4`}>
                  July 2022 – May 2026
                </p>
              </motion.div>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-medium text-lg mb-3">Relevant Coursework:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Computational Theory",
                    "Operating Systems",
                    "Computer Organization and Design",
                    "Object-Oriented Programming",
                    "Quantum Computing",
                  ].map((course, index) => (
                    <motion.div
                      key={course}
                      className={`${colors.skill.bg} p-2 rounded-md transition-colors duration-200 hover:${colors.skill.hoverBg}`}
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <p className={`${colors.text.secondary} text-sm`}>
                        {course}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          }
        />

        <Section
          id="skills"
          title="Technical Skills"
          icon={<Code size={24} />}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
          colors={colors}
          content={
            <div className="space-y-6">
              <SkillsVisualization skills={skills} colors={colors} />
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3
                    className={`font-semibold mb-3 capitalize text-lg ${colors.text.primary}`}
                  >
                    {category}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <SkillBubble key={skill} skill={skill} colors={colors} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          }
        />

        <Section
          id="projects"
          title="Projects"
          icon={<Terminal size={24} />}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
          colors={colors}
          content={
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} colors={colors} />
              ))}
            </div>
          }
        />

        <Section
          id="extracurricular"
          title="Extracurricular Activities"
          icon={<Award size={24} />}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
          colors={colors}
          content={
            <div className="space-y-6">
              <div>
                <h3
                  className={`font-semibold text-lg mb-2 ${colors.text.primary}`}
                >
                  Nittany AI Student Society
                </h3>
                <p className={colors.text.secondary}>
                  Actively engaged in workshops and bootcamps, collaborating
                  with fellow participants to further my understanding of
                  machine learning
                </p>
              </div>
              <div>
                <h3
                  className={`font-semibold text-lg mb-2 ${colors.text.primary}`}
                >
                  Club Tennis
                </h3>
                <p className={colors.text.secondary}>
                  Attended weekly tennis practices, interacting with club
                  members to refine my tennis skills and contribute to a
                  collaborative team environment
                </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default InteractiveResume;
