"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  const [dark404, setDark404] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setDark404(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  return (
    <>
      <title>404 - Page Not Found</title>
      <Container
        fluid
        className={`${
          dark404 ? "bg-dark text-light" : ""
        } d-flex flex-column justify-content-center align-items-center vh-100`}
      >
        <h1 className="text-center">
          <span className="text-danger">404</span>{" "}
          <span className="text-danger">|</span>{" "}
          <span
            style={{ fontSize: "1.6rem", fontWeight: "bold" }}
            className="text-danger"
          >
            Page Not Found
          </span>
        </h1>
        <small className="text-gray-500 font-medium">
          Where do you want to go?
        </small>
        <nav className="flex gap-4">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
          <Link
            href="/resume"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/gparab"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            Linkedin
          </Link>
          <Link
            href="https://github.com/graviscool"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            Github
          </Link>
        </nav>
      </Container>
    </>
  );
}
