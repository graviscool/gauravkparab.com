"use client";
import NavigationBar from "@/components/NavigationBar";
import Main from "@/components/Main";
import "@/styles/global-bootstrap.css";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Main />
      <Footer />
    </>
  );
}
