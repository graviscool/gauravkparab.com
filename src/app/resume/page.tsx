"use client";
import ResumeNavbar from "@/src/app/components/ResumeNavbar";
import { useEffect, useState } from "react";
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
      <title>Resume - Gaurav Parab</title>
      <ResumeNavbar setDark={setIsDark} />
      <InteractiveResume darkMode={isDark} />
    </>
  );
}
