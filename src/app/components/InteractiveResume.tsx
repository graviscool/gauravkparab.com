import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Languages,
  Terminal,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

const InteractiveResume = ({ darkMode }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const theme = darkMode ? "dark" : "light";
  const bgClass = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  const cardBgClass = darkMode ? "bg-dark" : "bg-white";
  const borderClass = darkMode ? "border-secondary" : "border-primary";
  const textMutedClass = darkMode ? "text-light opacity-75" : "text-muted";
  const headerBgClass = darkMode ? "bg-secondary" : "bg-primary";

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
      "C++ (Basic)",
      "R (Basic)",
    ],
    tools: ["Git", "Node.js", "Docker", "React", "Next.js", "MongoDB"],
    nonTechnical: ["Tennis", "Photography", "Hindi", "Marathi", "Spanish"],
  };

  const experiences = [
    {
      title: "Tactical Software Engineering Co-op",
      company: "General Dynamics Electric Boat",
      location: "New London, CT",
      date: "January 2025 - May 2025",
      details: ["Incoming Winter 2025"],
    },
    {
      title: "Teaching Assistant",
      company: "The Pennsylvania State University",
      location: "University Park, PA",
      date: "August 2022 – December 2023",
      details: [
        "Facilitated weekly recitation for ~200 students learning Python programming fundamentals",
        "Led three weekly review sessions to help students understand new material",
        "Conducted code reviews for 100+ Python assignments per week",
      ],
    },
    {
      title: "Software Intern",
      company: "Special Order Systems",
      location: "Sacramento, CA",
      date: "July 2021 – December 2021",
      details: [
        "Developed API-based security system solutions for California state beaches, improving efficiency by 10%",
        "Created Python scripts to automate weather data retrieval via APIs",
      ],
    },
  ];

  const projects = [
    {
      title: "Dashboard",
      tech: "React, Next.js",
      date: "July 2024 – Present",
      details: [
        "Designed a responsive dashboard to securely display over 200 sensitive punishment documents",
        "Used Discord OAuth to lock sensitive data behind authentication",
      ],
    },
    {
      title: "JBOD System",
      tech: "C",
      date: "September 2023 – December 2023",
      details: [
        "Created a simulated multi-disk system with read and write capabilities",
        "Implemented networking which enabled server communication with the system",
      ],
    },
    {
      title: "Monopoly Board Game",
      tech: "Java",
      date: "May 2022",
      details: [
        "Collaborated with 3 teammates to create a full-stack Monopoly project",
        "Developed 40% of the codebase for the GUI-based game",
      ],
    },
  ];

  const Section = ({ title, icon, content, id }) => (
    <motion.div
      className={`card mb-4 ${cardBgClass} border ${borderClass} w-100`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`card-header d-flex justify-content-between align-items-center ${headerBgClass} text-white cursor-pointer`}
        onClick={() => setExpandedSection(expandedSection === id ? null : id)}
        whileHover={{ scale: 1.01 }}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex align-items-center gap-2">
          {icon}
          <h5 className="mb-0">{title}</h5>
        </div>
        {expandedSection === id ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </motion.div>

      <AnimatePresence>
        {expandedSection === id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="card-body"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className={`container-fluid p-0 ${bgClass}`}>
      <div className="container-fluid px-4 py-5">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-4 fw-bold mb-3">Gaurav Parab</h1>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a
              href="mailto:gkparab1@gmail.com"
              className={`${
                darkMode ? "text-light" : "text-primary"
              } text-decoration-none`}
            >
              gkparab1@gmail.com
            </a>
            <a
              href="https://gauravkparab.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode ? "text-light" : "text-primary"
              } text-decoration-none d-flex align-items-center`}
            >
              gauravkparab.com <ExternalLink size={16} className="ms-1" />
            </a>
            <a
              href="https://linkedin.com/in/gparab"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode ? "text-light" : "text-primary"
              } text-decoration-none d-flex align-items-center`}
            >
              LinkedIn <ExternalLink size={16} className="ms-1" />
            </a>
          </div>
        </motion.div>

        {/* Education */}
        <Section
          id="education"
          title="Education"
          icon={<GraduationCap size={24} />}
          content={
            <div>
              <h3 className="h5 fw-bold">The Pennsylvania State University</h3>
              <p className={`${textMutedClass} mb-1`}>
                Bachelor of Science (B.S.), Computer Science
              </p>
              <p className={`${textMutedClass} mb-1`}>
                Minor in Cybersecurity | GPA: 3.66
              </p>
              <p className={`${textMutedClass} mb-3`}>July 2022 – May 2026</p>
              <div>
                <p className="fw-bold mb-1">Relevant Coursework:</p>
                <p className={textMutedClass}>
                  Data Structures and Algorithms, Computational Theory, Systems
                  Programming, Computer Organization and Design, OOP with
                  Web-Based Applications, Digital Design, Computing with Quantum
                  Computers
                </p>
              </div>
            </div>
          }
        />

        {/* Skills */}
        <Section
          id="skills"
          title="Technical Skills"
          icon={<Code size={24} />}
          content={
            <div className="row g-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="col-12">
                  <h3 className="h6 fw-bold text-capitalize mb-3">
                    {category}:
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <motion.span
                        key={skill}
                        className={`badge ${
                          darkMode ? "bg-secondary" : "bg-primary"
                        } p-2`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          }
        />

        {/* Experience */}
        <Section
          id="experience"
          title="Professional Experience"
          icon={<Briefcase size={24} />}
          content={
            <div className="d-flex flex-column gap-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`border-start border-4 ${borderClass} ps-4`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="h5 fw-bold mb-1">{exp.title}</h3>
                  <p className={`${textMutedClass} mb-1`}>
                    {exp.company} - {exp.location}
                  </p>
                  <p className={`${textMutedClass} small mb-2`}>{exp.date}</p>
                  <ul className="list-unstyled">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="mb-1">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          }
        />

        {/* Projects */}
        <Section
          id="projects"
          title="Projects"
          icon={<Terminal size={24} />}
          content={
            <div className="row g-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="col-12"
                  whileHover={{ scale: 1.01 }}
                >
                  <div
                    className={`card h-100 ${cardBgClass} border ${borderClass}`}
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h3 className="h5 fw-bold mb-0">{project.title}</h3>
                        <span className={`${textMutedClass} small`}>
                          {project.date}
                        </span>
                      </div>
                      <p
                        className={`${
                          darkMode ? "text-light" : "text-primary"
                        } small mb-2`}
                      >
                        {project.tech}
                      </p>
                      <ul className="list-unstyled mb-0">
                        {project.details.map((detail, i) => (
                          <li key={i} className="mb-1">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          }
        />

        {/* Extracurricular */}
        <Section
          id="extracurricular"
          title="Extracurricular Activities"
          icon={<Award size={24} />}
          content={
            <div className="row g-4">
              <div className="col-12">
                <h3 className="h5 fw-bold">Nittany AI Student Society</h3>
                <p className={textMutedClass}>
                  Actively engaged in workshops and bootcamps, collaborating
                  with fellow participants to further understanding of machine
                  learning
                </p>
              </div>
              <div className="col-12">
                <h3 className="h5 fw-bold">Club Tennis</h3>
                <p className={textMutedClass}>
                  Attended weekly tennis practices, interacting with club
                  members to refine tennis skills and contribute to a
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
