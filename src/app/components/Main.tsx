import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Row } from "react-bootstrap";
import styles from "@/styles/Main.module.css";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";
import { ParallaxBanner } from "react-scroll-parallax";
import Head from "next/head";

export default function Main() {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/sf-night.jpg" as="image" />
      </Head>
      <Container fluid className={styles.mainContainer}>
        <div>
          <main>
            {/* <motion.h1
            initial={{ x: -1500 }}
            animate={{ x: 200 }}
            transition={{ duration: 0.8 }}
            className={`${styles.introHi} mb-4`}
          > */}
            <div>
              <div className="vw-100 position-relative">
                <ParallaxBanner
                  layers={[{ image: "images/sf-night.jpg", speed: -20 }]}
                  // className="aspect-[2/1]"
                  style={{ left: -12 }}
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
                <TypeIt
                  as="h1"
                  getBeforeInit={(instance) => {
                    instance
                      .type("Hi! I'm Gaurav.")
                      .break({ delay: 500 })
                      .type("A college student.")
                      .exec(
                        (instance) =>
                          (instance.getElement().style.color = "green")
                      )
                      .pause(1500)
                      .delete(16, { speed: 200 })
                      .pause(1500)
                      .type("web developer.")
                      .pause(1500)
                      .delete(24, { speed: 200 })
                      .type("n ai enthusiast.")
                      .pause(1500)
                      .delete(18, { speed: 200 })
                      .exec(
                        (instance) =>
                          (instance.getElement().style.color = "blue")
                      )
                      .type(" bot developer.")
                      .pause(1500)
                      .delete(17, { speed: 200 })
                      .exec(
                        (instance) =>
                          (instance.getElement().style.color = "#add8e6")
                      );

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
              <section id="projects">
                <h2 className={styles.heading}>Projects</h2>
                <Row md={3}>
                  <Card
                    bg="secondary"
                    border="primary"
                    className={`mb-3 me-3 ms-4 ${styles.projectCard}`}
                  >
                    <Card.Body>
                      <Card.Title>Project 1</Card.Title>
                      <Card.Subtitle className="mb-2 text-light">
                        sub 1
                      </Card.Subtitle>
                      <Card.Text>example text 1</Card.Text>
                      <Card.Link href="#" className="text-dark">
                        Card Link 1
                      </Card.Link>
                    </Card.Body>
                  </Card>
                  <Card
                    bg="secondary"
                    border="primary"
                    className={`mb-3 me-3 ${styles.projectCard}`}
                  >
                    <Card.Body>
                      <Card.Title>Project 2</Card.Title>
                      <Card.Subtitle className="mb-2 text-light">
                        sub 2
                      </Card.Subtitle>
                      <Card.Text>example text 2</Card.Text>
                      <Card.Link href="#" className="link-warning">
                        Card Link 1
                      </Card.Link>
                    </Card.Body>
                  </Card>
                  <Card
                    bg="secondary"
                    border="primary"
                    className={`mb-3 ${styles.projectCard}`}
                  >
                    <Card.Body>
                      <Card.Title>Project 3</Card.Title>
                      <Card.Subtitle className="mb-2 text-light">
                        sub 3
                      </Card.Subtitle>
                      <Card.Text>example text 3</Card.Text>
                      <Card.Link href="#" className="link-danger">
                        Card Link 1
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Row>
              </section>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  height={200}
                  src="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=650px&langs_count=7"
                  alt="Top Languages used"
                />
              </div>
              <section id="prevexp">
                <h2 className={styles.heading}>Work Experience</h2>
                <Card
                  bg="light"
                  text="dark"
                  border="success"
                  className={`mb-3 ${styles.expCard}`}
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
                <Card
                  bg="light"
                  text="dark"
                  border="success"
                  className={`mb-2 ${styles.expCard}`}
                >
                  <Card.Header>Special Order Systems</Card.Header>
                  <Card.Body>
                    <Card.Title>Project Intern</Card.Title>
                    <Card.Text>
                      Assisted in the development of security system solutions
                      for California state beaches using API interactions in
                      Python and helped write code to connect to a weather API
                      and relay data to beach systems and personnel.
                    </Card.Text>
                    <Card.Footer>July 2021 - December 2021</Card.Footer>
                  </Card.Body>
                </Card>
              </section>
              <section id="techstack">
                <h2 className={styles.heading}>Dev Tools/Tech Stack</h2>
                <CardGroup className="text-center">
                  {/* <Row className="text-center"> */}
                  <Card
                    className={`${styles.stackCard} mx-md-2 my-sm-3`}
                    bg="info"
                    text="dark"
                    border="success"
                  >
                    <Card.Img variant="top" src="/images/langs/python.png" />
                    <Card.Body>
                      <Card.Text>Python</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    className={`${styles.stackCard} mx-md-2 my-sm-3`}
                    bg="info"
                    text="dark"
                    border="success"
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                    />
                    <Card.Body>
                      <Card.Text>Java</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    className={`${styles.stackCard} mx-md-2 my-sm-3`}
                    bg="info"
                    text="dark"
                    border="success"
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    />
                    <Card.Body>
                      <Card.Text>Javascript</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    className={`${styles.stackCard} mx-md-2 my-sm-3`}
                    bg="info"
                    text="dark"
                    border="success"
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                    />
                    <Card.Body>
                      <Card.Text>C</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    className={`${styles.stackCard} mx-md-2 my-sm-3`}
                    bg="info"
                    text="dark"
                    border="success"
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    />
                    <Card.Body>
                      <Card.Text>React</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    className={`${styles.stackCard} mx-md-2 my-sm-3`}
                    bg="info"
                    text="dark"
                    border="success"
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                    />
                    <Card.Body>
                      <Card.Text>HTML</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    className={`${styles.stackCard} mx-md-2 my-sm-3`}
                    bg="info"
                    text="dark"
                    border="success"
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                    />
                    <Card.Body>
                      <Card.Text>SQL</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    className={`${styles.stackCard} mx-md-2 my-sm-3`}
                    bg="info"
                    text="dark"
                    border="success"
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg"
                    />
                    <Card.Body>
                      <Card.Text>Linux</Card.Text>
                    </Card.Body>
                  </Card>
                  {/* </Row> */}
                </CardGroup>
              </section>
            </div>
          </main>
        </div>
      </Container>
    </>
  );
}
