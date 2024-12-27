import { Card, CardGroup, Col, Row } from "react-bootstrap";
import styles from "@/styles/TechStack.module.css";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TechStack({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="px-3 pb-3">
      {/* <Row className="text-center"> */}
      <Row className="g-3">
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1 ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
            border="success"
          >
            <Card.Img
              variant="top"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            />
            <Card.Body>
              <Card.Text>Python</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1 rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
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
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
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
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
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
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
            border="success"
          >
            <Card.Img
              variant="top"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />
            <Card.Body>
              <Card.Text>Next.js</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
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
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
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
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
            border ="success"
          >
            <Card.Img
              variant="top"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
            />
            <Card.Body>
              <Card.Text>SQL</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
            border="success"
          >
            <Card.Img
              variant="top"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
            />
            <Card.Body>
              <Card.Text>MongoDB</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
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
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
            border="success"
          >
            <Card.Img
              variant="top"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-plain.svg"
            />
            <Card.Body>
              <Card.Text>Bash</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card
            className={`${styles.stackCard} rounded-1  ${
              darkMode ? styles.bgCardDark : "bg-info"
            }`}
            text="light"
            border="success"
          >
            <Card.Img
              variant="top"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
            />
            <Card.Body>
              <Card.Text>Docker</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
