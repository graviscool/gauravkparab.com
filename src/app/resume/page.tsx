"use client";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ResumeNavbar from "@/src/app/components/ResumeNavbar";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../../../styles/Resume.module.css";
import InteractiveResume from "../components/InteractiveResume";
import ResumePage from "../components/Rpage";

export default function Resume() {
  return (
    <>
      <ResumeNavbar />
      {/* <InteractiveResume darkMode={false} /> */}
      <ResumePage darkMode={false}/>
    </>
  );
}
