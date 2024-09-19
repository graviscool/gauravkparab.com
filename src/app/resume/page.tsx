"use client";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ResumeNavbar from "@/src/app/components/ResumeNavbar";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../../../styles/Resume.module.css";

export default function Resume() {
  const sections = [
    {
      id: "education",
      title: "Education",
      content: (
        <p>
          <strong>The Pennsylvania State University</strong>&nbsp;University Park, PA <br />
          Bachelor of Science (B.S.), Computer Science July
          2022 - May 2026 • Relevant Coursework: Data Structures and Algorithms,
          Systems Programming, Computer Organization and Design, OOP with
          Web-Based Applications, Digital Design, HTML and CSS in depth
        </p>
      ),
    },
    {
      id: "techexp",
      title: "Technical Experience",
      content: "Your work experience goes here...",
    },
    {
      id: "projects",
      title: "Projects",
      content: "Your educational background goes here...",
    },
    {
      id: "extracurricular",
      title: "Extracurricular Activities",
      content: "Your skills go here...",
    },
    {
      id: "skills",
      title: "Relevant Skills",
      content: (
        <p>
          <strong>Languages</strong>: Python, Java, JavaScript, TypeScript, C,
          HTML/CSS, Verilog, Bash, C++ (Basic), R (Basic) Developer
          <br />
          <strong>Tools/Frameworks</strong>: Visual Studio Code, Git, Node.js,
          Docker, React, Next.js, MongoDB
          <br />
          <strong>Non-Technical</strong>: Tennis, Photography, Hindi, Marathi,
          Spanish
        </p>
      ),
    },
  ];

  const [activeSection, setActiveSection] = useState("education");

  return (
    <>
      <ResumeNavbar />
      <Container fluid className={styles.container}>
        <Row className="justify-content-center">
          <Col md={3} className="mb-4 mt-4">
            <Card className={styles.profileCard}>
              <Card.Body>
                <Card.Title className={`text-center ${styles.name}`}>
                  Gaurav Parab
                </Card.Title>
                <Card.Img
                  variant="top"
                  src="/images/profPhoto.png"
                  className={`rounded-circle mx-auto d-block ${styles.profileImage} mb-4`}
                />
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={
                      activeSection === section.id
                        ? "primary"
                        : "outline-primary"
                    }
                    className={`w-100 ${styles.sectionButton}`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.title}
                  </Button>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={9}>
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`${styles.contentCard} mt-4`}>
                <Card.Body>
                  <Card.Title className={styles.sectionTitle}>
                    {sections.find((s) => s.id === activeSection)?.title}
                  </Card.Title>
                  <Card.Text className={styles.sectionContent}>
                    {sections.find((s) => s.id === activeSection)?.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
