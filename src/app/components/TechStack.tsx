import { Card, CardGroup } from "react-bootstrap";
import styles from "@/styles/TechStack.module.css";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TechStack() {
  const techStackRef = useRef(null);
  const { scrollYProgress: techStackScrollProgress } = useScroll({
    target: techStackRef,
    offset: ["950px", "end"],
  });

  const techStackTranslateProgress = useTransform(
    techStackScrollProgress,
    [0, 1],
    ["-100%", "0%"]
  );

  return (
    <motion.div
      className="techstack-anim"
      style={{ translateX: techStackTranslateProgress }}
    >
      <CardGroup className="text-center mx-3">
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
    </motion.div>
  );
}
