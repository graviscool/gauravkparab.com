import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Row, Col, Toast, ToastContainer, Button } from "react-bootstrap";
import styles from "@/styles/Main.module.css";
import { motion, useScroll } from "framer-motion";
import TypeIt, { TypeItProps } from "typeit-react";
import { ParallaxBanner } from "react-scroll-parallax";
import Head from "next/head";
import TechStack from "./TechStack";

export default function Main({ darkMode }: { darkMode: boolean }) {
  const [showMobileToast, setShowMobileToast] = useState(true);
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
        <link rel="preload" href="/images/sf-night.jpg" as="image" />
        <link rel="preload" href="/images/langs/python.png" as="image" />
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
                  layers={[{ image: "images/sf-night.jpg", speed: -20 }]}
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
                      .break({ delay: 500 })
                      .type("A college student. 🎓")
                      .exec(
                        (instance) =>
                          (instance.getElement().style.color = "green")
                      )
                      .pause(1500)
                      .delete(18, { speed: 200 })
                      .pause(1500)
                      .type("web developer.")
                      .pause(1500)
                      .delete(14, { speed: 200 })
                      .exec(
                        (instance) =>
                          (instance.getElement().style.color = "#add8e6")
                      )
                      .pause(1500)
                      .type("AI enthusiast.")
                      .pause(500)
                      .move(-15)
                      .type("n")
                      .pause(200)
                      .move(16)
                      .pause(1500)
                      .delete(16, { speed: 200 })
                      .pause(1500)
                      .type(" bot developer.")
                      .exec(
                        (instance) =>
                          (instance.getElement().style.color = "blue")
                      )
                      .pause(1500)
                      .delete(18, { speed: 500 })
                      .type("!")
                      .exec(
                        (instance) =>
                          (instance.getElement().style.color = "#add8e6")
                      )
                      .exec((_instance) => {
                        setTypeFreezeText("Animation Complete");
                        document.getElementById(
                          "pauseTypeButton"
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
              <section id="projects">
                <div className="d-flex">
                  <h2
                    className={`${
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    } mt-5`}
                  >
                    Projects
                  </h2>
                  <a
                    href="#top"
                    className={`${styles.topLink}`}
                    style={{ marginTop: "4.5rem" }}
                  >
                    top
                  </a>
                </div>
                <Row md={3}>
                  <Card
                    bg="secondary"
                    border="primary"
                    className={`mb-3 me-3 ms-4 ${styles.projectCard}`}
                  >
                    <Card.Body>
                      <Card.Title>Monopoly</Card.Title>
                      <Card.Subtitle className="mb-2 text-light">
                        Java
                      </Card.Subtitle>
                      <Card.Text>
                        A class project in which me and my groupmates built the
                        game of Monopoly from scratch in Java using GUIs. I
                        wrote 30% of the code and assisted with debugging,
                        writing documentation, and submitting reports.
                      </Card.Text>
                      <Card.Link
                        href="/projectfiles/MonopolyProject.jar"
                        className="text-dark"
                      >
                        JAR file
                      </Card.Link>
                    </Card.Body>
                  </Card>
                  <Card
                    bg="secondary"
                    border="primary"
                    className={`mb-3 me-3 ${styles.projectCard}`}
                  >
                    <Card.Body>
                      <Card.Title>Parser</Card.Title>
                      <Card.Subtitle className="mb-2 text-light">
                        Python
                      </Card.Subtitle>
                      <Card.Text>
                        Created an advanced parser system using a lexer to
                        generate parse tables from a certain provided grammar.
                      </Card.Text>
                      <Card.Link
                        href="https://github.com/graviscool/parser-project-2"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-warning"
                      >
                        Github Link
                      </Card.Link>
                    </Card.Body>
                  </Card>
                  <Card
                    bg="secondary"
                    border="primary"
                    className={`mb-3 ${styles.projectCard}`}
                  >
                    <Card.Body>
                      <Card.Title>Discord Bot</Card.Title>
                      <Card.Subtitle className="mb-3 text-light">
                        Node.js
                      </Card.Subtitle>
                      <Card.Text>
                        Built a bot from scratch that allowed moderators to
                        perform tasks efficiently and allowed the server
                        management to automate tasks such as role assignment and
                        messages.
                      </Card.Text>
                      <Card.Link
                        href="https://github.com/The-English-Hub-Dev/The-English-Hub"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-info"
                      >
                        GitHub Link
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Row>
              </section>
              <motion.div
                className={styles.topLang}
                initial={{ translateX: "-100%" }}
                whileInView={{ translateX: 0 }}
                viewport={{ once: true }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <picture>
                  <source
                    srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=300px&langs_count=7&disable_animations=true"
                    media="(max-width: 430px)"
                  />
                  <source
                    srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=400px&langs_count=7&disable_animations=true"
                    media="(max-width: 550px)"
                  />
                  <source
                    srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=500px&langs_count=7&disable_animations=true"
                    media="(max-width: 800px)"
                  />
                  <source
                    srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=700px&langs_count=7"
                    media="(max-width: 9999px)"
                  />

                  <img
                    height={200}
                    src="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&langs_count=7"
                    alt="Top Languages Used"
                  />
                </picture>
              </motion.div>
              <section id="prevexp">
                <div className="d-flex">
                  <h2
                    className={`${
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    }`}
                  >
                    Work Experience
                  </h2>
                  <a href="#top" className={`mt-4 ${styles.topLink}`}>
                    top
                  </a>
                </div>
                <Row>
                  <Col>
                    <Card
                      bg={`${darkMode ? "secondary" : "light"}`}
                      text={`${darkMode ? "light" : "dark"}`}
                      border="success"
                      className={`mb-3 ms-3 ${styles.expCard}`}
                    >
                      <Card.Header>Pennsylvania State University</Card.Header>
                      <Card.Body>
                        <Card.Title>Learning Assistant</Card.Title>
                        <Card.Text>
                          Assisted TA&apos;s in an entry level computer science
                          class along with holding reviews for students and
                          reviewing submitted code.
                        </Card.Text>
                        <Card.Footer>August 2022 - December 2023</Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      bg={`${darkMode ? "secondary" : "light"}`}
                      text={`${darkMode ? "light" : "dark"}`}
                      border="success"
                      className={`mb-2 me-3 ${styles.expCard}`}
                    >
                      <Card.Header>Special Order Systems</Card.Header>
                      <Card.Body>
                        <Card.Title>Project Intern</Card.Title>
                        <Card.Text>
                          Helped develop of security system solutions for
                          California state beaches using API interactions in
                          Python and helped write code to connect to a weather
                          API and relay data to beach systems and personnel.
                        </Card.Text>
                        <Card.Footer>July 2021 - December 2021</Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </section>
              <section id="techstack">
                <div className="d-flex">
                  <h2
                    className={`${
                      darkMode ? styles.headingTwoDark : styles.headingTwoLight
                    }`}
                  >
                    Dev Tools/Tech Stack
                  </h2>
                  <a href="#top" className={`mt-4 ${styles.topLink}`}>
                    top
                  </a>
                </div>
                <TechStack />
              </section>
            </div>
          </main>
        </div>
        <ToastContainer position="bottom-end">
          <Toast
            bg="warning"
            show={showMobileToast}
            onClose={() => setShowMobileToast(false)}
            delay={10_000}
            autohide
            className={styles.mobileToast}
          >
            <Toast.Header>
              <strong className="me-auto">Mobile Device Detected</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>
              This page is not yet optimized for mobile devices.
              <br /> For best experience, please use a computer to access this
              website.
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </>
  );
}
