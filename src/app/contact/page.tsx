"use client";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import ContactNavbar from "../components/ContactNavbar";
import styles from "@/styles/Contact.module.css";
import ContactFooter from "../components/ContactFooter";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showSuccessfulSubmitToast, setShowSuccessfulSubmitToast] =
    useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  return (
    <>
      <title>Contact Me - Gaurav Parab</title>
      <Container fluid className="bg-dark text-info vh-100">
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
              onSubmit={(event) =>
                sendContactEmail(
                  event,
                  setShowSuccessfulSubmitToast,
                  setShowErrorToast
                )
              }
              className={`me-2 mt-3 text-warning d-grid ${styles.contactForm}`}
              id="contactform"
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
              <Button variant="primary" type="submit" id="contact_submitbutton">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <ToastContainer position="bottom-end" className="text-light">
          <Toast
            bg="success"
            show={showSuccessfulSubmitToast}
            onClose={() => setShowSuccessfulSubmitToast(false)}
            delay={7500}
            autohide
            className="mb-2"
          >
            <Toast.Header>
              <strong className="me-auto">Request Sent</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>Your contact request was successfully sent!</Toast.Body>
          </Toast>
          <Toast
            bg="danger"
            show={showErrorToast}
            onClose={() => setShowErrorToast(false)}
            delay={10000}
            autohide
            className="mb-2"
          >
            <Toast.Header>
              <strong className="me-auto">Request Unsuccessful</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>
              Your contact request was not sent successfully. Please send an
              email or linkedin request manually.
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
      <ContactFooter />
    </>
  );
}

const sendContactEmail = async (
  event: React.FormEvent<HTMLFormElement>,
  setShowSuccessful: React.Dispatch<React.SetStateAction<boolean>>,
  setShowError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();

  document.getElementById("contact_submitbutton")!.innerText = "Sending...";
  document
    .getElementById("contact_submitbutton")!
    .setAttribute("disabled", "true");

  const formD = new FormData(event.currentTarget);

  const name = formD.get("name") as string;
  const email = formD.get("email") as string;
  const message = formD.get("message") as string;

  await emailjs
    .send(
      "contact_send",
      "template_contact",
      { name: name, email: email, message: message },
      {
        publicKey: "BgT2UkxSM0t0kALG6",
      }
    )
    .then(() => {
      setShowSuccessful(true);
      document
        .getElementById("contact_submitbutton")!
        .classList.remove("btn-primary");
      document
        .getElementById("contact_submitbutton")!
        .classList.add("btn-success");
      document.getElementById("contact_submitbutton")!.innerText = "Sent!";
    })
    .catch(() => {
      setShowError(true);
      document
        .getElementById("contact_submitbutton")!
        .classList.remove("btn-primary");
      document
        .getElementById("contact_submitbutton")!
        .classList.add("btn-danger");
      document
        .getElementById("contact_submitbutton")!
        .setAttribute("variant", "danger");
      document.getElementById("contact_submitbutton")!.innerText = "Not Sent!";
    });

  (document.getElementById("contactform") as HTMLFormElement)!.reset();
  document.getElementById("contact_submitbutton")!.removeAttribute("disabled");

  await new Promise((r) => setTimeout(r, 2000));
  document
    .getElementById("contact_submitbutton")!
    .classList.remove("btn-success", "btn-danger");
  document.getElementById("contact_submitbutton")!.classList.add("btn-primary");
  document.getElementById("contact_submitbutton")!.innerText = "Submit";
};
