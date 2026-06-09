"use client";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import styles from "@/styles/Main.module.css";
import { motion, useScroll, useInView } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
import Head from "next/head";
import TechStack from "./TechStack";
import { useTheme } from "@/src/contexts/ThemeContext";

interface Experience {
  company: string;
  title: string;
  description: string;
  /** Display string, e.g. "June 2025 – August 2025" */
  date: string;
  /** ISO-parseable date for the <time> element, e.g. "2025-06" */
  dateTime: string;
}

interface Project {
  category: string;
  name: string;
  description: string;
  technologies: string[];
  link?: { label: string; href: string };
  isPrivate?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Amazon Web Services (AWS)",
    title: "Software Development Engineer Intern",
    description: "Amazon EC2",
    date: "June 2025 – August 2025",
    dateTime: "2025-06",
  },
  {
    company: "General Dynamics Electric Boat",
    title: "Tactical Software Engineer Co-op",
    description:
      "Internal tooling & software for the US Navy's nuclear submarine program.",
    date: "January 2025 – May 2025",
    dateTime: "2025-01",
  },
  {
    company: "The Pennsylvania State University",
    title: "Teaching Assistant",
    description:
      "Assisted teaching operations for an entry-level Python course at Penn State.",
    date: "August 2022 – December 2023",
    dateTime: "2022-08",
  },
  {
    company: "Special Order Systems",
    title: "Software Intern",
    description:
      "Project-based internship building Python tooling and REST API integrations.",
    date: "July 2021 – December 2021",
    dateTime: "2021-07",
  },
];

const projects: Project[] = [
  {
    category: "Web Application",
    name: "Dashboard",
    description:
      "Built a role-gated dashboard for viewing sensitive database records, implementing Discord OAuth for authentication and granular access control.",
    technologies: ["Next.js", "React"],
    isPrivate: true,
  },
  {
    category: "Java Game Development",
    name: "Monopoly",
    description:
      "Fully playable GUI implementation of Monopoly in Java, including property management, trading, and computer opponents.",
    technologies: ["Java", "Swing"],
    link: { label: "Download JAR", href: "/projectfiles/MonopolyProject.jar" },
  },
  {
    category: "Node.js Development",
    name: "Discord Bot",
    description:
      "A a bot to streamline server management andtasks by automating moderator tasks and role assignments.",
    technologies: ["Node.js", "Discord.js"],
    link: {
      label: "GitHub",
      href: "https://github.com/The-English-Hub-Dev/The-English-Hub",
    },
  },
];

// ─── Shared animation variants ─────────────────────────────────────────────

/**
 * Reusable fade-up variant used by both card types.
 * The `custom` prop drives the stagger delay so each card
 * enters slightly after the previous one.
 */
const cardEntryVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

interface ExperienceCardProps {
  experience: Experience;
  darkMode: boolean;
  index: number;
}

function ExperienceCard({ experience, darkMode, index }: ExperienceCardProps) {
  const ref = useRef<HTMLElement>(null);
  // `once: true` means the animation fires once when the card enters the
  // viewport — it won't re-animate on scroll back up.
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.article
      ref={ref}
      variants={cardEntryVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className={`rounded-lg overflow-hidden ${
        darkMode
          ? "bg-gray-800 shadow-lg"
          : "bg-white shadow-md border border-gray-100"
      } ${styles.workExpCard}`}
    >
      <div className="p-6">
        {/* Date leads — recruiters scan chronologically */}
        <time
          dateTime={experience.dateTime}
          className={`text-xs font-mono tracking-widest uppercase block mb-3 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {experience.date}
        </time>
        <h3
          className={`text-lg font-bold mb-1 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {experience.company}
        </h3>
        <h4
          className={`text-sm font-semibold mb-3 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {experience.title}
        </h4>
        <p
          className={`text-sm leading-relaxed ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {experience.description}
        </p>
      </div>
    </motion.article>
  );
}

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
  index: number;
}

function ProjectCard({ project, darkMode, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const isExternal = project.link?.href.startsWith("http") ?? false;

  return (
    <motion.div
      ref={ref}
      variants={cardEntryVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className="h-full"
    >
      <Card
        text={darkMode ? "light" : "dark"}
        border="primary"
        className={`mb-3 w-100 h-100 ${
          darkMode ? styles.expCard : styles.expCardLight
        } ${styles.projectCard}`}
      >
        {/* Visually distinct category header */}
        <Card.Header
          className={`text-xs uppercase tracking-wider font-semibold py-2 ${
            darkMode
              ? "text-blue-300 bg-transparent border-blue-800"
              : "text-blue-600 bg-blue-50/60 border-blue-100"
          }`}
        >
          {project.category}
        </Card.Header>

        <Card.Body className="d-flex flex-column gap-2">
          <Card.Title className="mb-0">{project.name}</Card.Title>
          <Card.Text
            className={`flex-grow-1 text-sm mb-0 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {project.description}
          </Card.Text>

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto pt-2">
            {/* Technology pill badges — scannable at a glance */}
            <div className="d-flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    darkMode
                      ? "bg-blue-900/40 text-blue-300 border border-blue-800"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.isPrivate ? (
              <span
                className={`text-xs ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Private
              </span>
            ) : project.link ? (
              <a
                href={project.link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={`${project.link.label} for ${project.name}`}
                className={`text-sm font-medium no-underline ${
                  darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                {project.link.label} →
              </a>
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default function Main() {
  const { isDark: darkMode } = useTheme();

  const bgImageSection = useRef<HTMLDivElement>(null);
  const { scrollYProgress: bgScrollProgress } = useScroll({
    target: bgImageSection,
    offset: ["0.06 start", "1.05 start"],
  });

  return (
    <>
      <Head>
        <link rel="preload" href="/images/sf-night.webp" as="image" />
      </Head>
      <Container
        fluid
        className={darkMode ? "p-0 bg-dark" : styles.mainContainerLight}
      >
        <div className="overflow-hidden">
          <main>
            {/*
             * position-relative on the outer div so the hero content overlay
             * is positioned relative to the parallax section, not the viewport.
             */}
            <div ref={bgImageSection} className="position-relative">
              <ParallaxBanner
                layers={[{ image: "images/sf-night.webp", speed: -20 }]}
                className={`${styles.bgImage} vh-100 vw-100`}
              />

              {/* Dark gradient scrim for text readability */}
              <div className={styles.heroScrim} />

              <div
                className="position-absolute"
                style={{
                  top: "clamp(3.5rem, 10vh, 7rem)",
                  left: "clamp(1.25rem, 5vw, 6rem)",
                  maxWidth: "clamp(280px, 55vw, 680px)",
                }}
              >
                <h1 className={`${styles.introHi} mb-2`}>Gaurav Parab</h1>

                <p className={`${styles.heroSubtitle} mb-3`}>
                  Incoming SDE at AWS&nbsp;·&nbsp;Penn State Graduate&nbsp;
                </p>

                <p className={`${styles.heroBio} mb-4`}>
                  Recently graduated from Penn State, relocating to the DMV to
                  join AWS — focused on distributed systems and backend
                  infrastructure.
                </p>
              </div>

              {/* Bouncing scroll-down chevron — bottom-center of hero */}
              <motion.a
                href="#prevexp"
                aria-label="Scroll to content"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("prevexp")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="position-absolute"
                style={{
                  bottom: "2rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  textDecoration: "none",
                  zIndex: 10,
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </motion.a>
            </div>

            <div>
              <motion.div
                className={styles.imageScrollProgressBar}
                style={{ scaleX: bgScrollProgress }}
              />

              {/* aria-labelledby links the section to its visible heading,
                  giving screen reader users a named landmark to jump to. */}
              <section id="prevexp" aria-labelledby="exp-heading">
                <div className="d-flex">
                  <h2
                    id="exp-heading"
                    className={
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    }
                  >
                    Professional Experience
                  </h2>
                </div>
                <div
                  className={`${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-4 mx-3`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp, index) => (
                      <ExperienceCard
                        key={exp.company}
                        experience={exp}
                        darkMode={darkMode}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <section id="projects" aria-labelledby="projects-heading">
                <div className="d-flex">
                  <h2
                    id="projects-heading"
                    className={`${
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    } mt-5`}
                  >
                    Projects
                  </h2>
                </div>
                <div className="px-3">
                  <Row className="g-3">
                    {projects.map((project, index) => (
                      <Col xs={12} md={6} lg={4} key={project.name}>
                        <ProjectCard
                          project={project}
                          darkMode={darkMode}
                          index={index}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </section>

              <section id="techstack" aria-labelledby="techstack-heading">
                <div className="d-flex">
                  <h2
                    id="techstack-heading"
                    className={
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    }
                  >
                    Tech Stack
                  </h2>
                </div>
                <TechStack darkMode={darkMode} />
              </section>
            </div>
          </main>
        </div>
      </Container>
    </>
  );
}
