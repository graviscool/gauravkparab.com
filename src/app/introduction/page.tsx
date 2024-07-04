"use client";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import styles from "@/styles/Introduction.module.css";
import IntroNavbar from "../components/IntroNavbar";

const Introduction = () => {
  return (
    <>
      <IntroNavbar />
      <Container fluid className={styles.introContainer}>
        <section id="namephoto">
          <div className="vh-100 bg-info"></div>
        </section>
        <section id="location">
          <div className="vh-100 bg-danger">
            <motion.h1
              initial={{ x: -100 }}
              whileInView={{ x: 200 }}
              transition={{ delay: 0.2 }}
            >
              Based in the San Francisco Bay Area
            </motion.h1>
          </div>
        </section>
        <section id="education">
          <div className="vh-100 bg-secondary"></div>
        </section>
        <section id="hobbies">
          <div className="vh-100 bg-primary"></div>
        </section>
      </Container>
    </>
  );
};

export default Introduction;
