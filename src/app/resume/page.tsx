"use client";
import ResumeNavbar from "@/src/app/components/ResumeNavbar";
import { useEffect, useState } from "react";
import styles from "../../../styles/Resume.module.css";
import InteractiveResume from "../components/InteractiveResume";

export default function Resume() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDark(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  return (
    <>
      <ResumeNavbar setDark={setIsDark} />
      {/* <InteractiveResume darkMode={false} /> */}
      <InteractiveResume darkMode={isDark} />
    </>
  );
}
