"use client";
import { Navbar, Card, Container } from "react-bootstrap";
import ResumeNavbar from "@/src/app/components/ResumeNavbar";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Resume() {
  return (
    <>
      <ResumeNavbar />
      <Container fluid>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            date="2011 - present"
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </>
  );
}
