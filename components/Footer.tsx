import styles from "@/styles/Footer.module.css";
import { Col, Container, Nav, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-dark text-light py-4`}>
      <Container fluid>
        <Row>
          <Col md={4}>
            <Nav>
              <Nav.Link href="#about" className="text-light">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-light">
                Contact
              </Nav.Link>
              <Nav.Link href="/sitemap.xml" className="text-light">
                Sitemap
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <p style={{ textAlign: "right" }}>&copy; 2024 Gaurav Parab</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
