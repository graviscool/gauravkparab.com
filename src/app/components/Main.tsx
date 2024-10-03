import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Row, Col, Toast, ToastContainer, Button, Form } from "react-bootstrap";
import styles from "@/styles/Main.module.css";
import { motion, useScroll } from "framer-motion";
import TypeIt from "typeit-react";
import { ParallaxBanner } from "react-scroll-parallax";
import Head from "next/head";
import TechStack from "./TechStack";

export default function Main({ darkMode }: Readonly<{ darkMode: boolean }>) {
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

  const [AIResponse, setAIResponse] = useState("");
  const handleAIRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("message") as string;

    const AIReq = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (AIReq.status == 500) {
      setAIResponse("An error occurred, please try again later.");
      return;
    }

    setAIResponse("");
    const reader = AIReq.body!.getReader();
    const decoder = new TextDecoder("utf-8");

    let read = false;

    while (!read) {
      const { value, done: readDone } = await reader.read();
      read = readDone;
      const curText = decoder.decode(value, { stream: true });

      setAIResponse((prevText) => prevText + curText);
    }
  };

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
                      .break({ delay: 2000 })
                      .type("A college student. 🎓")
                      .pause(1500)
                      .delete(18, { speed: 200 })
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
                      .delete(16, { speed: 200 })
                      .pause(1500)
                      .type(" bot developer.")
                      .pause(1500)
                      .delete(18, { speed: 500 })
                      .type("!")
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
            <motion.div
              className={`${styles.imageScrollProgressBar}`}
              style={{ scaleX: bgScrollProgress }}
            />
            <Form onSubmit={handleAIRequest} className="pt-2">
              <Row>
                <Col xs={"auto"}>
                  <Form.Label className="text-light p-1">
                    Ask AI about me:
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    className={darkMode ? "bg-dark text-light" : ""}
                    name="message"
                    type="text"
                    maxLength={50}
                    required
                  />
                </Col>
              </Row>
            </Form>
            <p className={darkMode ? "text-light p-2" : "text-dark p-2"}>
              {AIResponse}
            </p>
            <div>
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
                      <Card.Title>Dashboard</Card.Title>
                      <Card.Subtitle className="mb-2 text-light">
                        Next.js
                      </Card.Subtitle>
                      <Card.Text>
                        Created a dashboard for uses to view sensitive database
                        data. It used Discord OAuth to authenticated users and
                        check if they had the permissions to access the data.
                      </Card.Text>
                      {/* <Card.Link
                      >
                      </Card.Link> */}
                    </Card.Body>
                  </Card>
                  <Card
                    bg="secondary"
                    border="primary"
                    className={`mb-3 me-3 ${styles.projectCard}`}
                  >
                    <Card.Body>
                      <Card.Title>Monopoly</Card.Title>
                      <Card.Subtitle className="mb-2 text-light">
                        Java
                      </Card.Subtitle>
                      <Card.Text>
                        Built the game of Monopoly in Java using GUI, with two
                        other teammates. I wrote 30% of the code and assisted
                        with debugging, writing documentation, and submitting
                        reports. It was a great experience making my first
                        full-stack project.
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
                    className={`mb-3 ${styles.projectCard}`}
                  >
                    <Card.Body>
                      <Card.Title>Discord Bot</Card.Title>
                      <Card.Subtitle className="mb-3 text-light">
                        Node.js
                      </Card.Subtitle>
                      <Card.Text>
                        Built a bot that allowed moderators to perform tasks
                        efficiently and allowed the server management to
                        automate tasks such as role assignment and messages.
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
              {/* <a href="/#"> */}
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
              {/* </a> */}
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
                          I worked as a Learning Assistant for an entry level
                          Computer Science course at Penn State.
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
                        <Card.Title>Software Intern</Card.Title>
                        <Card.Text>
                          My first project based internship, in which I worked
                          with Python and API interactions.
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
                <TechStack darkMode={darkMode} />
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
