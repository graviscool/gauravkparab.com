"use client";
import NavigationBar from "@/src/app/components/NavigationBar";
import Main from "@/src/app/components/Main";
import Footer from "@/src/app/components/Footer";
import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function Home() {
  const [dark, setDark] = useState(true);

  const setGlobalDarkMode = () => {
    setDark(!dark);
    localStorage.setItem("darkMode", JSON.stringify(!dark));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setDark(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  return (
    <>
      <noscript>
        <ToastContainer position="top-center">
          <Toast className="mt-2" bg="danger">
            <Toast.Header>
              <strong className="me-auto">JavaScript is disabled!</strong>
              <small>now</small>
            </Toast.Header>
            <Toast.Body>
              Please enable Javascript to use the full functionality of this
              website. Some features may not work as expected.
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </noscript>
      <NavigationBar dark={dark} setDark={setGlobalDarkMode} />
      <Main darkMode={dark} />
      <Footer page="home" />
    </>
  );
}
