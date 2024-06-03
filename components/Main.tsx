import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Figure, Ratio } from "react-bootstrap";
import styles from "@/styles/Main.module.css";

export default function Main() {
  return (
    <Container fluid className={styles.mainContainer}>
      <div>
        <main>
          <p className={styles.introHi}>
            Hi! <br />
            I&apos;m Gaurav
          </p>
          <section id="about">
            <p>
              I&apos;m a rising junior majoring in Computer Science at Penn
              State University. I&apos;m aspiring to work in the software field.{" "}
              <br />I am currently looking for any software related intern
              opportunities in the near future. I would love to connect!
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
                <Card.Subtitle className="mb-2 text-light">sub 1</Card.Subtitle>
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
                <Card.Subtitle className="mb-2 text-light">sub 2</Card.Subtitle>
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
                <Card.Subtitle className="mb-2 text-light">sub 3</Card.Subtitle>
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
            <Card bg="body" className={`mb-3 ${styles.expCard}`}>
              <Card.Header>Company A</Card.Header>
              <Card.Body>
                <Card.Title>Learning Assistant</Card.Title>
                <Card.Text>Learning assistant description...</Card.Text>
                <Card.Footer>August 2022 - December 2023</Card.Footer>
              </Card.Body>
            </Card>
            <Card bg="body" className={styles.expCard}>
              <Card.Header>Company B</Card.Header>
              <Card.Body>
                <Card.Title>Project Intern</Card.Title>
                <Card.Text>Project intern description...</Card.Text>
                <Card.Footer>July 2021 - December 2021</Card.Footer>
              </Card.Body>
            </Card>
          </section>
          <section id="techstack">
            <h2>Dev Tools/Tech Stack</h2>
            <Figure>
              <Ratio aspectRatio="1x1">
                <Figure.Image src="/images/langs/python-icon.png" />
              </Ratio>
              <Figure.Caption className="text-light">Python</Figure.Caption>
            </Figure>
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
        </main>
      </div>
    </Container>
  );
}
