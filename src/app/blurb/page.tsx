"use client";

import { Container } from "react-bootstrap";
import BlurbNavbar from "../components/BlurbNavbar";
import BlurbFooter from "../components/BlurbFooter";

export default function About() {
  return (
    <>
      <BlurbNavbar />
      <div>
        <Container fluid className="vh-100 bg-secondary">
          <p>I&apos;m Gaurav Parab</p>
          <ul>
            <li>Location: San Jose, CA</li>
            <li>University: Pennsylvania State University</li>
            <li>Major: Computer Science</li>
            <li>Free Time Activities: Tennis, Hiking, Photography </li>
          </ul>
        </Container>
      </div>
      <BlurbFooter />
    </>
  );
}
