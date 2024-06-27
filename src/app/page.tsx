"use client";
import NavigationBar from "@/src/app/components/NavigationBar";
import Main from "@/src/app/components/Main";
import styles from "@/styles/Home.module.css";
import Footer from "@/src/app/components/Footer";
import { Alert } from "react-bootstrap";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Main />
      <Footer />
    </>
  );
}
