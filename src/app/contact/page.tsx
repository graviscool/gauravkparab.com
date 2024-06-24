"use client";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import ContactNavbar from "../components/ContactNavbar";

export default function Contact() {
  return (
    <Container fluid className="bg-dark text-light">
      <ContactNavbar />
      <p className="my-2">
        If you have any questions or would just like to reach out, feel free to
        reach out to me at my email{" "}
        <a href="mailto:gkparab1@gmail.com" className="link-danger">
          gkparab1@gmail.com
        </a>{" "}
        or fill out the form below. You can also contact me on{" "}
        <a href="https://www.linkedin.com/in/gparab" className="link-primary">
          Linkedin
        </a>
        . I look forward to hearing from you!
      </p>
      <div className="bg-dark" style={{ height: "100vh" }}>
        <Form>
          <Row className="g-2">
            <Col>
              <FormGroup controlId="formGroupText">
                <Form.Label>Name</Form.Label>
                <Form.Control required></Form.Control>
              </FormGroup>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formGroupTextarea">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={2} required />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleContactSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

const handleContactSubmit = () => {}; // TODO handlesubmit
