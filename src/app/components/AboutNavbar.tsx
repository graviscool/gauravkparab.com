import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown, Image, SplitButton } from "react-bootstrap";

export default function AboutNavbar() {
  return (
    <header>
      <Navbar
        expand="md"
        bg="primary"
        className="bg-body-tertiary mb-0"
        data-bs-theme="dark"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand className="ms-2" href="/">
            Gaurav Parab
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            className="bg-primary"
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
                <Nav.Link href="#background">Background Info</Nav.Link>
                <Nav.Link href="#interests">Interests</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
