"use client";
import { redirect } from "next/navigation";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/global-bootstrap.css";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <NavigationBar />
    </>
  );
}
