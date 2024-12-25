import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown, Image, SplitButton } from "react-bootstrap";
import { FormControlLabel, Switch } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function NavigationBar({
  dark,
  setDark,
}: Readonly<{
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}>) {
  return (
    <header>
      <a id="top" content="top of page"></a>
      <Navbar
        expand="md"
        bg={dark ? "dark" : ""}
        className="bg-body-tertiary mb-0 z-1"
        data-bs-theme={dark ? "dark" : "light"}
        // sticky="top"
        fixed="top"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand className="ms-2" href="/">
            Gaurav Parab
          </Navbar.Brand>
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
                {/* <Nav.Link href="/blurb">Blurb</Nav.Link> */}
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#prevexp">Experience</Nav.Link>
              </Nav>
              <Nav className="me-3">
                <SplitButton
                  title="View Resume"
                  variant="outline-success"
                  href="/resume"
                >
                  <Dropdown.Item
                    href="/documents/Gaurav_Parab_resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View PDF Resume
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/documents/Gaurav_Parab_resume.pdf"
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
              <Nav className="ms-2">
                <Nav.Link href="/contact">Contact Me</Nav.Link>
              </Nav>
              <FormControlLabel
                value="Dark Mode Button"
                className="ms-1"
                control={
                  <Switch
                    color="primary"
                    checked={dark}
                    onChange={(e) => setDark(e.target.checked)}
                  />
                }
                label={dark ? "Dark" : "Light"}
                labelPlacement="end"
              />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
