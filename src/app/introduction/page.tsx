"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "react-bootstrap/Container";
import styles from "@/styles/Introduction.module.css";
import IntroNavbar from "../components/IntroNavbar";

export default function Introduction() {
  return (
    <>
      <IntroNavbar />
      <Container fluid className={styles.introContainer}>
        <section id="namephoto">
          <div className="vh-100 bg-info"></div>
        </section>
        <section id="location">
          <div className="vh-100 overflow-hidden position-relative">
            <video autoPlay muted loop className={styles.backgroundVideo}>
              <source src="videos/sf_video_v2.mp4" type="video/mp4" />
            </video>
            <motion.h1
              initial={{ x: -100 }}
              whileInView={{ x: 200 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-info"
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
}
