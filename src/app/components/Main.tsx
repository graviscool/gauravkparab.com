"use client";
import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Row, Col, Button } from "react-bootstrap";
import styles from "@/styles/Main.module.css";
import { motion, useScroll } from "framer-motion";
import TypeIt from "typeit-react";
import { ParallaxBanner } from "react-scroll-parallax";
import Head from "next/head";
import TechStack from "./TechStack";
import { useTheme } from "@/src/contexts/ThemeContext";

const profExperiences = [
  {
    company: "Amazon Web Services (AWS)",
    title: "Software Development Engineer Intern",
    description: "Amazon EC2",
    date: "June 2025 - August 2025",
  },
  {
    company: "General Dynamics Electric Boat",
    title: "Tactical Software Engineer Co-op",
    description:
      "Internal tooling & software for the US Navy's nuclear submarines.",
    date: "January 2025 - May 2025",
  },
  {
    company: "The Pennsylvania State University",
    title: "Teaching Assistant",
    description:
      "Assisted teaching operations for an entry level Python course at Penn State.",
    date: "August 2022 - December 2023",
  },
  {
    company: "Special Order Systems",
    title: "Software Intern",
    description:
      "Project based software internship, in which I worked with Python and APIs.",
    date: "July 2021 - December 2021",
  },
];

export default function Main() {
  const { isDark: darkMode } = useTheme();
  const [typeItInstance, setTypeItInstance] = useState<any>(null);
  const [typeFreezeText, setTypeFreezeText] = useState("Pause Animation");
  const freezeOrUnfreezeText = () => {
    if (typeItInstance.is("frozen")) {
      typeItInstance.unfreeze();
      setTypeFreezeText("Pause Animation");
    } else {
      typeItInstance.freeze();
      setTypeFreezeText("Resume Animation");
    }
  };

  const bgImageSection = useRef(null);
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
        className={`${darkMode ? "p-0 bg-dark" : styles.mainContainerLight}`}
      >
        <div className="overflow-hidden">
          <main>
            <div ref={bgImageSection}>
              <div className="vw-100 position-relative">
                <ParallaxBanner
                  layers={[{ image: "images/sf-night.webp", speed: -20 }]}
                  className={`${styles.bgImage} vh-100`}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 100,
                  top: 100,
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outline-warning"
                  size="sm"
                  className={styles.pauseTypeButton}
                  id="pauseTypeButton"
                  onClick={() => {
                    freezeOrUnfreezeText();
                  }}
                  disabled={typeFreezeText == "Animation Complete"}
                >
                  {typeFreezeText}
                </Button>
                <TypeIt
                  as="h1"
                  getBeforeInit={(instance) => {
                    // setTypeItInstance(instance);
                    instance
                      .pause(750)
                      .type("Hi! I'm Gaurav.")
                      .break({ delay: 2000 })
                      .type("A college student 🎓")
                      .pause(1500)
                      .delete(17, { speed: 200 })
                      .pause(1500)
                      .type("web developer.")
                      .pause(1500)
                      .delete(14, { speed: 200 })
                      .pause(1500)
                      .type("AI enthusiast.")
                      .pause(500)
                      .move(-15)
                      .type("n")
                      .pause(200)
                      .move(16)
                      .pause(1500)
                      .delete(19, { speed: 200 })
                      .type("!")
                      .exec((_instance) => {
                        setTypeFreezeText("Animation Complete");
                        document.getElementById(
                          "pauseTypeButton",
                        )!.style.opacity = "0.2";
                      });

                    return instance;
                  }}
                  getAfterInit={(instance) => {
                    setTypeItInstance(instance);
                    return instance;
                  }}
                  options={{
                    speed: 75,
                    waitUntilVisible: true,
                  }}
                  className={`${styles.introHi} mb-4`}
                />
              </div>
            </div>
            <div>
              <motion.div
                className={`${styles.imageScrollProgressBar}`}
                style={{ scaleX: bgScrollProgress }}
              />
              <section id="prevexp">
                <div className="d-flex">
                  <h2
                    className={`${
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    }`}
                  >
                    Professional Experience
                  </h2>
                </div>
                <div
                  className={`${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-4 mx-3`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profExperiences.map((job, index) => (
                      <div
                        key={index}
                        className={`${
                          darkMode ? "bg-gray-800" : "bg-white"
                        } rounded-lg shadow-lg overflow-hidden ${
                          styles.workExpCard
                        }`}
                      >
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {job.company}
                          </h3>
                          <h4 className="text-lg font-medium mb-2">
                            {job.title}
                          </h4>
                          <p
                            className={`mb-4 ${
                              darkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {job.description}
                          </p>
                          <p className="text-sm text-gray-500">{job.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section id="projects">
                <div className="d-flex">
                  <h2
                    className={`${
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    } mt-5`}
                  >
                    Projects
                  </h2>
                </div>
                <div className="px-3">
                  <Row md={3} className="g-3">
                    <Col xs={12} md={6} lg={4}>
                      <Card
                        text={darkMode ? "light" : "dark"}
                        border="primary"
                        className={`mb-3 w-100 ${
                          darkMode ? styles.expCard : styles.expCardLight
                        } ${styles.projectCard}`}
                      >
                        <Card.Header>Web Application</Card.Header>
                        <Card.Body>
                          <Card.Title>Dashboard</Card.Title>
                          <Card.Text>
                            Created a dashboard for users to view sensitive
                            database data. Implemented Discord OAuth for
                            authentication.
                          </Card.Text>
                          <Card.Footer className="d-flex justify-content-between align-items-center">
                            <span className="text-success">
                              Technologies: Next.js, React
                            </span>
                            <Card.Link className={"text-secondary"}>
                              Private Project
                            </Card.Link>
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                      <Card
                        text={darkMode ? "light" : "dark"}
                        border="primary"
                        className={`mb-3 w-100 ${
                          darkMode ? styles.expCard : styles.expCardLight
                        } ${styles.projectCard}`}
                      >
                        <Card.Header>Java Game Development</Card.Header>
                        <Card.Body>
                          <Card.Title>Monopoly</Card.Title>
                          <Card.Text>
                            Built a GUI-based game of Monopoly in Java. First
                            full-stack project experience.
                          </Card.Text>
                          <Card.Footer className="d-flex justify-content-between align-items-center">
                            <span className="text-success">
                              Technology: Java
                            </span>
                            <Card.Link
                              href="/projectfiles/MonopolyProject.jar"
                              className={`${
                                darkMode ? "text-info" : "text-primary"
                              }`}
                            >
                              JAR file
                            </Card.Link>
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                      <Card
                        text={darkMode ? "light" : "dark"}
                        border="primary"
                        className={`mb-3 w-100 ${
                          darkMode ? styles.expCard : styles.expCardLight
                        } ${styles.projectCard}`}
                      >
                        <Card.Header>Node.js Development</Card.Header>
                        <Card.Body>
                          <Card.Title>Discord Bot</Card.Title>
                          <Card.Text>
                            Built a bot to streamline server management and
                            tasks by automating moderator tasks and role
                            assignments.
                          </Card.Text>
                          <Card.Footer className="d-flex justify-content-between align-items-center">
                            <span className="text-success">
                              Technology: Node.js
                            </span>
                            <Card.Link
                              href="https://github.com/The-English-Hub-Dev/The-English-Hub"
                              target="_blank"
                              rel="noreferrer noopener"
                              className={`${
                                darkMode ? "text-info" : "text-primary"
                              }`}
                            >
                              GitHub Link
                            </Card.Link>
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </section>
              <section id="techstack">
                <div className="d-flex">
                  <h2
                    className={`${
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    }`}
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
