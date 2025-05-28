import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Mail,
  Terminal,
  MapPin,
} from "lucide-react";
import { Section } from "./resume/Section";
import { SkillBubble } from "./resume/SkillBubble";
import { ExperienceCard } from "./resume/ExperienceCard";
import { ProjectCard } from "./resume/ProjectCard";
import { SkillsVisualization } from "./resume/SkillsVisualization";
import Image from "next/image";

const InteractiveResume = ({ darkMode }: { darkMode: boolean }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
    languages: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C",
      "HTML/CSS",
      "Verilog",
      "Bash",
      "C++",
      "R",
    ],
    tools: ["Git", "Node.js", "Docker", "React", "Next.js", "MongoDB"],
    "Non-Technical": ["Tennis", "Photography", "Hindi", "Marathi", "Spanish"],
  };

  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Amazon Web Services (AWS)",
      location: "Arlington, VA",
      date: "", // TODO update
      details: [
        "Incoming Summer 2025",
      ],
    },
    {
      title: "Tactical Software Engineering Co-op",
      company: "General Dynamics Electric Boat",
      location: "Groton, CT",
      date: "January 2025 - May 2025",
      details: [
        "Internal Tooling and software for the US Navy's upcoming fleet of submarines.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Pennsylvania State University",
      location: "University Park, PA",
      date: "August 2022 - December 2023",
      details: [
        "Led weekly Python programming recitations for approximately 200 students.",
        "Conducted review sessions and code reviews, ensuring clarity in programming concepts.",
        "Conducted code reviews for 100+ Python assignments per week, providing valuable feedback",
      ],
    },
    {
      title: "Software Intern",
      company: "Special Order Systems",
      location: "Sacramento, CA",
      date: "July 2021 - December 2021",
      details: [
        "Developed security solutions for California state beaches, ensuring data integrity and safety.",
        "Automated weather data retrieval processes, improving efficiency and accuracy.",
      ],
    },
  ];

  const projects = [
    {
      title: "React/Next.js Dashboard",
      date: "July 2024 - Present",
      tech: "React, Next.js, OAuth",
      details: [
        "Designed a secure dashboard for managing sensitive punishment documents with Discord OAuth integration.",
        "Focused on enhancing user experience for server administrators.",
      ],
    },
    {
      title: "JBOD System",
      date: "September 2023 - December 2023",
      tech: "C",
      details: [
        "Created a simulated multi-disk system with read and write capabilities",
        "Implemented networking features to enable server communication.",
        "Focused on optimizing system performance and debugging complex issues.",
      ],
    },
    {
      title: "Monopoly Board Game",
      date: "May 2022",
      tech: "Java",
      details: [
        "Collaborated with a team to create a GUI-based Monopoly board game.",
        "Implemented gameplay mechanics and interactive features.",
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
          <div className="flex justify-center space-x-6 mb-4">
            <MapPin size={18} className={`mr-2 ${colors.text.secondary}`} />
            <span className={`${colors.text.secondary} ms-0`}>
              San Jose, CA
            </span>
            <a
              href="mailto:gkparab1@gmail.com"
              className={`${colors.text.secondary} hover:text-blue-500 transition-colors flex items-center`}
            >
              <Mail size={18} className="mr-2" /> gkparab1@gmail.com
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
              // whileHover={{ scale: 1.02 }}
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
                  Minor in Engineering Leadership Development |
                  GPA: 3.66
                </p>
                <p className={`${colors.text.tertiary} mb-4`}>
                  July 2022 - May 2026 (expected)
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
                    "Data Structures and Algorithms",
                    "Computational Theory",
                    "Systems Programming",
                    "Computer Organization and Design",
                    "OOP with Web-Based Applications",
                    "Digital Design",
                    "Computing with Quantum Computers",
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
                      <SkillBubble
                        key={skill}
                        skill={skill}
                        colors={colors}
                        // setHoveredSkill={setHoveredSkill}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          }
        />

        <Section
          id="experience"
          title="Professional Experience"
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
                  with fellow participants to further understanding of machine
                  learning and artificial intelligence applications.
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
                  members to refine tennis skills and contribute to a
                  collaborative team environment.
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
