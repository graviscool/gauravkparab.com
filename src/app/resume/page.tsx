"use client";
import { Navbar, Card, Container } from "react-bootstrap";
import ResumeNavbar from "@/src/app/components/ResumeNavbar";
import { motion } from "framer-motion";
import "./page.css";

export default function Resume() {
  return (
    <>
      <ResumeNavbar />
      <Container fluid className="bg-dark text-light overflow-hidden">
        <h1>Summary</h1>
        <motion.div
          initial={{ translateX: "-100%" }}
          animate={{ translateX: "50%" }}
        >
          <p>summary here...</p>
        </motion.div>
      </Container>
      {/* <div className="interactive-resume">
        <header className="resume-header">
          <h1>Interactive Resume</h1>
        </header>

        <section className="resume-summary">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2>Summary</h2>
            <p>
              A brief introduction about yourself, highlighting your key skills
              and career objectives.
            </p>
          </motion.div>
        </section>

        <section className="resume-experience">
          <h2>Experience</h2>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="job">
              <h3>Job Title</h3>
              <h4>Company Name</h4>
              <p>Duration</p>
              <p>
                Description of your role, achievements, and responsibilities.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="resume-education">
          <h2>Education</h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="education-item">
              <h3>Degree</h3>
              <h4>Institution Name</h4>
              <p>Duration</p>
              <p>
                Details about your education, relevant coursework, and
                achievements.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="resume-skills">
          <h2>Skills</h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>Skill 4</li>
          </motion.ul>
        </section>

        <section className="resume-projects">
          <h2>Projects</h2>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="project">
              <h3>Project Title</h3>
              <p>
                Brief description of the project, technologies used, and your
                role.
              </p>
            </div>
          </motion.div>
        </section>

        <footer className="resume-footer">
          <p>Contact information or any other relevant information.</p>
        </footer>
      </div> */}
    </>
  );
}
