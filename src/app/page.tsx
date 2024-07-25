"use client";
import NavigationBar from "@/src/app/components/NavigationBar";
import Main from "@/src/app/components/Main";
import styles from "@/styles/Home.module.css";
import Footer from "@/src/app/components/Footer";
import { Alert } from "react-bootstrap";
import { ParallaxBanner } from "react-scroll-parallax";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <NavigationBar dark={dark} setDark={setDark} />
      <Main darkMode={dark} />
      <Footer />
    </>
  );
}
