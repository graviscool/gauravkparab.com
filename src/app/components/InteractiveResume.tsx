import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Award, ChevronDown, ChevronUp, Mail, Globe, Linkedin, Moon, Sun, Terminal } from 'lucide-react';
import { Section } from './resume/Section';
import { SkillBubble } from './resume/SkillBubble';
import { ExperienceCard } from './resume/ExperienceCard';
import { ProjectCard } from './resume/ProjectCard';
import { SkillsVisualization } from './resume/SkillsVisualization';

const InteractiveResume = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const colors = {
    background: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    cardHover: darkMode ? 'bg-gray-700' : 'bg-gray-100',
    text: {
      primary: darkMode ? 'text-gray-100' : 'text-gray-800',
      secondary: darkMode ? 'text-gray-300' : 'text-gray-600',
      tertiary: darkMode ? 'text-gray-400' : 'text-gray-500'
    },
    accent: {
      primary: darkMode ? 'from-blue-400 to-teal-400' : 'from-blue-500 to-teal-500',
      secondary: darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-500 to-pink-500'
    },
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    skill: {
      bg: darkMode ? 'bg-gray-700' : 'bg-gray-200',
      hoverBg: darkMode ? 'bg-gray-600' : 'bg-gray-300'
    },
    project: {
      bg: darkMode ? 'bg-gray-800' : 'bg-gray-100',
      hoverBg: darkMode ? 'bg-gray-700' : 'bg-white'
    }
  };

  const skills = {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'HTML/CSS', 'Verilog', 'Bash', 'C++ (Basic)', 'R (Basic)'],
    tools: ['Git', 'Node.js', 'Docker', 'React', 'Next.js', 'MongoDB'],
    nonTechnical: ['Tennis', 'Photography', 'Hindi', 'Marathi', 'Spanish']
  };

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Vercel",
      location: "Remote",
      date: "May 2023 - August 2023",
      details: [
        "Developed and maintained features for Next.js, improving developer experience and performance.",
        "Collaborated with cross-functional teams to implement new functionalities and resolve issues.",
        "Contributed to open-source projects and participated in code reviews."
      ]
    },
    {
      title: "Research Assistant",
      company: "Penn State University",
      location: "University Park, PA",
      date: "September 2022 - Present",
      details: [
        "Assisted in developing machine learning models for natural language processing tasks.",
        "Implemented data preprocessing pipelines and conducted experiments to improve model accuracy.",
        "Presented research findings at departmental seminars and contributed to academic publications."
      ]
    }
  ];

  const projects = [
    {
      title: "AI-Powered Chess Tutor",
      date: "January 2023 - Present",
      tech: "Python, TensorFlow, React",
      details: [
        "Developed a machine learning model to analyze chess games and provide personalized feedback.",
        "Created a web interface for users to upload games and receive analysis.",
        "Implemented real-time game analysis using WebSockets."
      ]
    },
    {
      title: "Blockchain-based Voting System",
      date: "September 2022 - December 2022",
      tech: "Solidity, Ethereum, Web3.js, React",
      details: [
        "Designed and implemented a secure, transparent voting system using blockchain technology.",
        "Developed smart contracts to manage voter registration, vote casting, and vote counting.",
        "Created a user-friendly front-end interface for voters and election administrators."
      ]
    }
  ];

  return (
    <div className={`${colors.background} min-h-screen transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${colors.accent.secondary} bg-clip-text text-transparent`}>
            Gaurav Parab
          </h1>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:gkparab1@gmail.com" 
               className={`${colors.text.secondary} hover:text-blue-500 transition-colors flex items-center`}>
              <Mail size={18} className="mr-2" /> gkparab1@gmail.com
            </a>
            <a href="https://gauravkparab.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className={`${colors.text.secondary} hover:text-blue-500 transition-colors flex items-center`}>
              <Globe size={18} className="mr-2" /> gauravkparab.com
            </a>
            <a href="https://linkedin.com/in/gparab" 
               target="_blank" 
               rel="noopener noreferrer" 
               className={`${colors.text.secondary} hover:text-blue-500 transition-colors flex items-center`}>
              <Linkedin size={18} className="mr-2" /> LinkedIn
            </a>
          </div>
          <p className={`${colors.text.secondary} max-w-2xl mx-auto`}>
            Passionate Computer Science student at Penn State University, specializing in software development and AI. 
            Seeking opportunities to apply my skills in innovative tech projects.
          </p>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-0 right-0 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </motion.div>

        {/* Main Content */}
        <Section
          id="education"
          title="Education"
          icon={<GraduationCap size={24} />}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
          colors={colors}
          content={
            <div className={colors.text.primary}>
              <h3 className="font-semibold text-xl mb-2">The Pennsylvania State University</h3>
              <p className={`${colors.text.secondary} text-lg`}>Bachelor of Science (B.S.), Computer Science</p>
              <p className={`${colors.text.secondary} mb-2`}>Minor in Cybersecurity | GPA: 3.66</p>
              <p className={`${colors.text.tertiary} mb-4`}>July 2022 – May 2026</p>
              <div className="mt-4">
                <p className="font-medium text-lg mb-2">Relevant Coursework:</p>
                <ul className={`${colors.text.secondary} list-disc list-inside`}>
                  <li>Data Structures and Algorithms</li>
                  <li>Computational Theory</li>
                  <li>Systems Programming</li>
                  <li>Computer Organization and Design</li>
                  <li>OOP with Web-Based Applications</li>
                  <li>Digital Design</li>
                  <li>Computing with Quantum Computers</li>
                </ul>
              </div>
            </div>
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
                  <h3 className={`font-semibold mb-3 capitalize text-lg ${colors.text.primary}`}>{category}:</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <SkillBubble
                        key={skill}
                        skill={skill}
                        colors={colors}
                        setHoveredSkill={setHoveredSkill}
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
                <ExperienceCard key={index} experience={exp} colors={colors} index={index} />
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
                <h3 className={`font-semibold text-lg mb-2 ${colors.text.primary}`}>Nittany AI Student Society</h3>
                <p className={colors.text.secondary}>
                  Actively engaged in workshops and bootcamps, collaborating with fellow participants 
                  to further understanding of machine learning and artificial intelligence applications.
                </p>
              </div>
              <div>
                <h3 className={`font-semibold text-lg mb-2 ${colors.text.primary}`}>Club Tennis</h3>
                <p className={colors.text.secondary}>
                  Attended weekly tennis practices, interacting with club members to refine tennis 
                  skills and contribute to a collaborative team environment. Participated in inter-college tournaments.
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

