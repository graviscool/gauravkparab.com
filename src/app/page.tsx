"use client";
import NavigationBar from "@/src/app/components/NavigationBar";
import Main from "@/src/app/components/Main";
import Footer from "@/src/app/components/Footer";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <>
      <NavigationBar dark={dark} setDark={setDark} />
      <Main darkMode={dark} />
      <Footer darkMode={dark}/>
    </>
  );
}
