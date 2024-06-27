"use client";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Toast,
} from "react-bootstrap";
import ContactNavbar from "../components/ContactNavbar";
import styles from "@/styles/Contact.module.css";
import ContactFooter from "../components/ContactFooter";

export default function Contact() {
  return (
    <>
      <Container fluid className="bg-secondary text-light">
        <ContactNavbar />
        <p className={`mt-3 mb-2 fs-2 ms-2 ${styles.contactText}`}>
          If you have any questions or would just like to reach out, feel free
          to reach out to me at my email{" "}
          <a href="mailto:gkparab1@gmail.com" className={styles.emailLink}>
            gkparab1@gmail.com
          </a>
          . You can also contact me on{" "}
          <a
            href="https://www.linkedin.com/in/gparab"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.linkedinLink}
          >
            Linkedin
          </a>
          . I look forward to hearing from you!
        </p>
        <br />
        <p>OR, you can fill out the contact form below:</p>
        <div className="bg-secondary vh-100">
          <Form onSubmit={sendContactEmail}>
            <Row className="g-2">
              <Col>
                <FormGroup controlId="formGroupText">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required name="name"></Form.Control>
                </FormGroup>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupTextarea">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required name="message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <ContactFooter />
    </>
  );
}

const sendContactEmail = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formD = new FormData(event.currentTarget);

  const name = formD.get("name") as string;
  const email = formD.get("email") as string;
  const message = formD.get("message") as string;

  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
};
