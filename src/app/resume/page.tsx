"use client";
import ResumeNavbar from "@/src/app/components/ResumeNavbar";
import { useState } from "react";
import InteractiveResume from "../components/InteractiveResume";
import Footer from "../components/Footer";

export default function Resume() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  return (
    <>
      <title>Resume - Gaurav Parab</title>
      <ResumeNavbar setDark={setIsDark} />
      <InteractiveResume darkMode={isDark} />
      <Footer page="resume" />
    </>
  );
}
