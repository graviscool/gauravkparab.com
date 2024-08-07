"use client";
import { Navbar, Card, Container } from "react-bootstrap";
import ResumeNavigationBar from "@/src/app/components/ResumeNavbar";
import { permanentRedirect } from "next/navigation";
export default function Resume() {
  return permanentRedirect("/documents/Gaurav_Parab_Resume.pdf");
  // return (
  //   <>
  //     <ResumeNavigationBar />
  //     <p>This page is currently a work in progress.</p>
  //   </>
  // );
}
