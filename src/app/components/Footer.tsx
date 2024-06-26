import styles from "@/styles/Footer.module.css";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light mt-auto py-2">
      <Container fluid>
        <Row>
          <Col md={4}>
            <Nav>
              <Nav.Link href="/blurb" className="text-light">
                Blurb
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
            {/* <Button
              variant="outline-primary"
              className="mr-1"
              style={{ justifyContent: "right" }}
              onClick={handleWebsiteInfoButtonClick}
            >
              Website Info
            </Button> */}
            <p className="text-end">&copy; 2024 Gaurav Parab</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const handleWebsiteInfoButtonClick = () => {};
