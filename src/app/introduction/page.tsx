"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "react-bootstrap/Container";
import styles from "@/styles/Introduction.module.css";
import IntroNavbar from "../components/IntroNavbar";
import { useRef } from "react";

export default function Introduction() {
  const { scrollYProgress: totalScrollProgress } = useScroll();

  const namephotoSection = useRef(null);
  const { scrollYProgress: namephotoScrollYProgress } = useScroll({
    target: namephotoSection,
    offset: ["start", "end 0.20"],
  });

  const locationSection = useRef(null);
  const { scrollYProgress: locationScrollYProgress } = useScroll({
    target: locationSection,
    offset: ["start", "end 0.20"],
  });

  const educationSection = useRef(null);
  const { scrollYProgress: educationScrollYProgress } = useScroll({
    target: educationSection,
    offset: ["start", "end 0.20"],
  });

  return (
    <>
      <motion.div
        className={styles.scrollProgressTop}
        style={{ scaleX: totalScrollProgress }}
      />
      <IntroNavbar />
      <Container fluid className={styles.introContainer}>
        <section id="namephoto">
          <div
            className="vh-100 bg-dark d-flex flex-column"
            ref={namephotoSection}
          >
            <motion.div
              className={`${styles.scrollProgressSection} mt-auto`}
              style={{ scaleX: namephotoScrollYProgress }}
            />
          </div>
        </section>
        <section id="location">
          <div
            className="vh-100 overflow-hidden position-relative d-flex flex-column"
            ref={locationSection}
          >
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
            <motion.div
              className={`${styles.scrollProgressSection} mt-auto`}
              style={{ scaleX: locationScrollYProgress }}
            />
          </div>
        </section>
        <section id="education">
          <div className="vh-100 bg-secondary d-flex flex-column" ref={educationSection}>
            <motion.div
              className={`${styles.scrollProgressSection} mt-auto`}
              style={{ scaleX: educationScrollYProgress }}
            />
          </div>
        </section>
        <section id="hobbies">
          <div className="vh-100 bg-primary">
          </div>
        </section>
      </Container>
    </>
  );
}
