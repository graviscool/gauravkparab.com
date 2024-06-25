"use client";

import { Container } from "react-bootstrap";
import BlurbNavbar from "../components/BlurbNavbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <BlurbNavbar />
      <Container fluid className="vh-100 bg-dark text-light">
        <p>I&apos;m Gaurav Parab</p>
        <ul>
          <li>Location: San Jose, CA</li>
          <li>University: Pennsylvania State University</li>
        </ul>
      </Container>

      <Footer />
    </>
  );
}
