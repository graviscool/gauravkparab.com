import { Col, Container, Nav, Row } from "react-bootstrap";

export default function BlurbFooter() {
  return (
    <footer className="footer bg-dark text-light mt-auto py-2">
      <Container fluid>
        <Row>
          <Col md={4}>
            <Nav>
              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="/contact" className="text-light">
                Contact
              </Nav.Link>
              <Nav.Link
                href="/documents/Gaurav_Parab_resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <p className="text-end">&copy; 2024 Gaurav Parab</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
