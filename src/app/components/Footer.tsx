import styles from "@/styles/Footer.module.css";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer
      className={`footer ${
        darkMode ? `${styles.bgDarkFooter} text-light` : "bg-dark text-light"
      } mt-auto pt-0`}
    >
      <Container fluid>
        <Row>
          {/* <Col md={4}>
            <Nav> */}
          {/* <Nav.Link href="/blurb" className="text-light">
                Blurb
              </Nav.Link> */}
          {/* <Nav.Link href="/contact" className="text-light">
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
          </Col> */}
          <Col>
            {/* <Button
              variant="outline-primary"
              className="mr-1"
              style={{ justifyContent: "right" }}
              onClick={handleWebsiteInfoButtonClick}
            >
              Website Info
            </Button> */}
            <div className="text-end mb-0 mt-0">
              <a href="#top" className={`${styles.topLink} link-info`}>
                top
              </a>
              <p>&copy; {new Date().getFullYear()} Gaurav Parab</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const handleWebsiteInfoButtonClick = () => {};
