import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  Dropdown,
  Image,
  SplitButton,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";

const NextNavLink = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <Nav.Link {...props}>{children}</Nav.Link>
    </Link>
  );
};

const NextBrandLink = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <Navbar.Brand {...props}>{children}</Navbar.Brand>
    </Link>
  );
};

export default function ContactNavbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDark(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  return (
    <header>
      <Navbar
        expand="md"
        bg={isDark ? "dark" : "light"}
        className="bg-body-tertiary mb-0"
        data-bs-theme={isDark ? "dark" : "light"}
        collapseOnSelect
      >
        <Container fluid>
          <NextBrandLink className="ms-2" href="/">
            Gaurav Parab
          </NextBrandLink>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            className="bg-dark"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
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
                <NextNavLink href="/">Home</NextNavLink>
                <NextNavLink href="/#projects">Projects</NextNavLink>
                <NextNavLink href="/#prevexp">Previous Experience</NextNavLink>
              </Nav>
              <Nav className="me-3">
                <Link href="/resume" passHref legacyBehavior>
                  <SplitButton
                    title="View Resume"
                    variant="outline-success"
                    href="/resume"
                  >
                    <Dropdown.Item href="/documents/Gaurav_Parab_resume.pdf">
                      View PDF Resume
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/documents/Gaurav_Parab_resume.pdf"
                      download
                    >
                      Download Resume
                    </Dropdown.Item>
                  </SplitButton>
                </Link>
              </Nav>
              <Navbar.Brand
                href="https://www.linkedin.com/in/gparab"
                target="_blank"
                rel="noreferrer noopener"
                className="me-2"
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
              >
                <Image
                  src="/images/github-logo-white.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Github"
                />
              </Navbar.Brand>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
