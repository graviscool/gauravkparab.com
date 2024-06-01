import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Image } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      className="bg-body-tertiary mb-3"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">Gaurav Parab</Navbar.Brand>
        <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          className="bg-dark"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-light fw-bolder">
              Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto text-light">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#prevexp">Previous Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="me-auto text-light">
              <Nav.Link href="/documents/Gaurav_Parab_resume.pdf" download>
                Download Resume
              </Nav.Link>
            </Nav>

            <Navbar.Brand href="/linkedin">
              <Image
                src="/images/linkedin-logo.png"
                width={30}
                height={30}
                className="d-inline-block align-top"
                alt="Linkedin"
              />
            </Navbar.Brand>
            <Navbar.Brand href="/github">
              <Image
                src="/images/github-logo-white.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Github"
              />
            </Navbar.Brand>
            <Form className="d-flex" id="search">
              <Form.Control
                type="search"
                placeholder="search..."
                className="me-2"
                aria-label="search-box"
              ></Form.Control>
            </Form>
            <Button
              variant="outline-info"
              onClick={(e) => alert(`Searching hasn't been implemented yet`)}
            >
              Search
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
