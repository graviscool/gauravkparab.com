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
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <>
      <Container fluid className="bg-dark text-info">
        <ContactNavbar />
        <Row>
          <Col>
            <h1 className={`mt-4 ${styles.connectText}`}>
              Let&apos;s Connect!
            </h1>
            <div className="text-light">
              <p className={`mt-3 mb-2 fs-2 ms-2 ${styles.contactText}`}>
                Email
                <br />
                <a href="mailto:gkparab1@gmail.com" className="text-light">
                  gkparab1@gmail.com
                </a>
                <br />
                <br />
                Linkedin
                <br />
                <a
                  href="https://www.linkedin.com/in/gparab"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-light"
                >
                  https://linkedin.com/in/gparab
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <Form
              onSubmit={sendContactEmail}
              className="me-2 mt-3 pt-5 text-success"
            >
              <Row className="g-2">
                <Col>
                  <FormGroup controlId="formGroupText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      name="name"
                      className={styles.formField}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      className={styles.formField}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formGroupTextarea">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  required
                  name="message"
                  className={styles.formField}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <div className="bg-dark vh-100"></div>
      </Container>
      <ContactFooter />
    </>
  );
}

const sendContactEmail = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formD = new FormData(event.currentTarget);

  const name = formD.get("name") as string;
  const email = formD.get("email") as string;
  const message = formD.get("message") as string;

  await emailjs.send(
    "contact_send",
    "template_contact",
    { name: name, email: email, message: message },
    {
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
    }
  );
};
