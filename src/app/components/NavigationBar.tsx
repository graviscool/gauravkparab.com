"use client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown, Image, SplitButton } from "react-bootstrap";
import { FormControlLabel, Switch } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@/src/contexts/ThemeContext";

const NextNavLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Nav.Link
      as={Link}
      {...props}
      href={href}
      className={`text-decoration-none ${className ?? ""}`.trim()}
    >
      {children}
    </Nav.Link>
  );
};

const NextBrandLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Navbar.Brand
      as={Link}
      {...props}
      href={href}
      className={`text-decoration-none ${className ?? ""}`.trim()}
    >
      {children}
    </Navbar.Brand>
  );
};

export default function NavigationBar() {
  const { isDark, setDark } = useTheme();

  return (
    <header>
      <a id="top" content="top of page"></a>
      <Navbar
        expand="md"
        bg={isDark ? "dark" : ""}
        className="bg-body-tertiary mb-0 z-1"
        data-bs-theme={isDark ? "dark" : "light"}
        // sticky="top"
        fixed="top"
        collapseOnSelect
      >
        <Container fluid>
          <NextBrandLink className="ms-2" href="/">
            Gaurav Parab
          </NextBrandLink>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            className="bg-dark"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fw-bolder">
                Navigation
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#prevexp">Experience</Nav.Link>
                <Nav.Link href="#techstack">Tech Stack</Nav.Link>
              </Nav>
              <Nav className="me-3">
                <SplitButton
                  title="View Resume"
                  variant="outline-success"
                  onClick={() => (window.location.href = "/resume")}
                >
                  <Dropdown.Item
                    href="https://resume.gauravkparab.com/Gaurav_Parab_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF Resume
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://resume.gauravkparab.com/Gaurav_Parab_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download PDF Resume
                  </Dropdown.Item>
                </SplitButton>
              </Nav>
              <Navbar.Brand
                href="https://www.linkedin.com/in/gparab"
                target="_blank"
                rel="noreferrer noopener"
                className="me-2"
                aria-label="Visit Gaurav's LinkedIn profile"
              >
                <Image
                  src="/images/linkedin-logo.png"
                  width={30}
                  height={30}
                  className="d-inline-block align-top"
                  alt="Linkedin"
                />
              </Navbar.Brand>
              <Navbar.Brand
                href="https://github.com/graviscool"
                target="_blank"
                rel="noreferrer noopener"
                className="me-0"
                aria-label="Visit Gaurav's GitHub profile"
              >
                <Image
                  src="/images/github-logo-white.png"
                  width="30"
                  height="30"
                  className={`d-inline-block align-top ${
                    !isDark ? "bg-dark opacity-25" : ""
                  }`}
                  alt="Github"
                />
              </Navbar.Brand>
              <Nav className="ms-2">
                <NextNavLink href="/contact">Get in Touch</NextNavLink>
              </Nav>
              <FormControlLabel
                value="Dark Mode Button"
                className={`ms-1 ${isDark ? "text-light" : "text-dark"}`}
                control={
                  <Switch
                    color="primary"
                    checked={isDark}
                    onChange={(e) => setDark(e.target.checked)}
                    slotProps={{ input: { "aria-label": "Toggle dark mode" } }}
                  />
                }
                label={isDark ? "Dark" : "Light"}
                labelPlacement="end"
              />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
