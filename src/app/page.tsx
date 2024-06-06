"use client";
import NavigationBar from "@/components/NavigationBar";
import Main from "@/components/Main";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import { Alert } from "react-bootstrap";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <Alert variant="warning" className="mb-0">
        This website is still a work in progress! See the main page{" "}
        <Alert.Link href="https://gauravkparab.com">here</Alert.Link>.
      </Alert>
      <NavigationBar />
      <Main />
      <Footer />
    </>
  );
}
