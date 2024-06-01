import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

export default function NavigationBar() {
  return (
    // <Container>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Gaurav Parab</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/documents/Gaurav_Parab_resume.pdf" download>
            Download Resume
          </Nav.Link>
        </Nav>
        <Navbar.Brand href="/linkedin">
          <img
            src="/images/linkedin-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Linkedin"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/github">
          <img
            src="/images/github-logo-white.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Github"
          />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="search..."
            className="me-auto"
            aria-label="search-box"
          ></Form.Control>
        </Form>
      </Container>
    </Navbar>
    // </Container>
  );
}
