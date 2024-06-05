import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown, Image, SplitButton } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <header>
      <Navbar
        expand="lg"
        bg="dark"
        className="bg-body-tertiary mb-0"
        data-bs-theme="dark"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand href="/">Gaurav Parab</Navbar.Brand>
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#prevexp">Previous Experience</Nav.Link>
              </Nav>
              <Nav className="me-3">
                <SplitButton
                  title="View Resume"
                  variant="outline-success"
                  href="/documents/Gaurav_Parab_resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Dropdown.Item
                    href="/documents/Gaurav_Parab_resume.pdf"
                    download
                  >
                    Download Resume
                  </Dropdown.Item>
                </SplitButton>
              </Nav>
              <Navbar.Brand
                href="/linkedin"
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
                href="/github"
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
                <Nav.Link href="#contact">Contact Me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
