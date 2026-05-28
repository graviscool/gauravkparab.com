"use client";
import ResumeNavbar from "@/src/app/components/ResumeNavbar";
import { useState } from "react";
import InteractiveResume from "../components/InteractiveResume";
import Footer from "../components/Footer";
import { getStoredDarkMode } from "@/lib/theme";

export default function Resume() {
  const [isDark, setIsDark] = useState(getStoredDarkMode);

  return (
    <>
      <title>Resume - Gaurav Parab</title>
      <ResumeNavbar setDark={setIsDark} />
      <InteractiveResume darkMode={isDark} />
      <Footer page="resume" />
    </>
  );
}
