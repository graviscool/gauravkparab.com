import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Figure, Ratio } from "react-bootstrap";
import styles from "@/styles/Main.module.css";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";
import Image from "next/image";

export default function Main() {
  return (
    <Container fluid className={styles.mainContainer}>
      <div>
        <main>
          {/* <motion.h1
            initial={{ x: -1500 }}
            animate={{ x: 200 }}
            transition={{ duration: 0.8 }}
            className={`${styles.introHi} mb-4`}
          > */}
          <div className="container-fluid">
            <div
              style={{
                width: "100vw",
                height: "60vh",
                position: "relative",
              }}
            >
              <Image
                src="/images/sf-night.jpg"
                alt="sf-night"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              ></Image>
            </div>
            <div style={{ position: "absolute", left: 50, top: 100 }}>
              <TypeIt
                as="h1"
                getBeforeInit={(instance) => {
                  instance
                    .type("Hi!")
                    .pause(200)
                    .break({ delay: 500 })
                    .type("I'm Gaurav");
                  return instance;
                }}
                options={{
                  speed: 75,
                  waitUntilVisible: true,
                }}
                className={`${styles.introHi} mb-4 text-light`}
              />
            </div>
          </div>
          {/* <p>Hi! I&apos;m Gaurav</p> */}
          {/* </motion.h1> */}
          <div>
            <section id="about" className={styles.about}>
              <p>
                I&apos;m a rising junior majoring in Computer Science at Penn
                State University. I&apos;m aspiring to work in the software
                field. <br />I am currently looking for any software related
                intern opportunities in the near future. I would love to
                connect!
              </p>
            </section>
            <section id="projects">
              <h2>Projects</h2>
              <Card
                bg="secondary"
                border="primary"
                className={`mb-3 ${styles.projectCard}`}
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
                  <Card.Link href="#" className="text-dark">
                    Card Link 2
                  </Card.Link>
                </Card.Body>
              </Card>
              <Card
                bg="primary"
                border="info"
                className={`mb-3 ${styles.projectCard}`}
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
                  <Card.Link href="#" className="link-warning">
                    Card Link 2
                  </Card.Link>
                </Card.Body>
              </Card>
              <Card
                bg="info"
                border="success"
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
                  <Card.Link href="#" className="link-danger">
                    Card Link 2
                  </Card.Link>
                </Card.Body>
              </Card>
            </section>
            <section id="prevexp">
              <h2>Work Experience</h2>
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
                    • Interacted with and taught students in CMPSC 131
                    (Programming Fundamentals) recitation classes alongside
                    TA’s. <br />
                    • Held review sessions to help students understand the new
                    material presented in lectures. <br /> • Conducted code
                    reviews and helped grade homework, projects, and tests.
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
                  <Card.Text>Project intern description...</Card.Text>
                  <Card.Footer>July 2021 - December 2021</Card.Footer>
                </Card.Body>
              </Card>
            </section>
            <section id="techstack">
              <h2>Dev Tools/Tech Stack</h2>
              <Card className={styles.stackCard}>
                <Card.Img variant="top" src="/images/langs/python-icon.png" />
                <Card.Body>
                  <Card.Text>Python</Card.Text>
                </Card.Body>
              </Card>
              {/* <Figure>
              <Ratio aspectRatio="1x1">
                <Figure.Image src="/images/langs/python-icon.png" />
              </Ratio>
              <Figure.Caption className="text-light">Python</Figure.Caption>
            </Figure> */}
            </section>
            <section id="contact">
              <h2>Contact Me</h2>
              <p>
                If you have any questions or would just like to reach out, feel
                free to reach out to me at my email{" "}
                <a href="mailto:gkparab1@gmail.com" className="link-info">
                  gkparab1@gmail.com
                </a>{" "}
                or on{" "}
                <a
                  href="https://www.linkedin.com/in/gparab"
                  className="link-info"
                >
                  Linkedin
                </a>
                . I look forward to hearing from you!
              </p>
            </section>
          </div>
        </main>
      </div>
    </Container>
  );
}
