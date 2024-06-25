"use client";
import { useRef } from "react";
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
import emailjs from "@emailjs/browser";
import styles from "@/styles/Contact.module.css";
import Footer from "../components/Footer";

export default function Contact() {
  const contactForm = useRef<HTMLFormElement>(null);

  //   const sendContactEmail = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     emailjs
  //       .sendForm("formal_gmail", "template_formal", contactForm.current!, {
  //         publicKey: "BgT2UkxSM0t0kALG6",
  //       })
  //       .then(
  //         () => {
  //           return (
  //             <Toast>
  //               <Toast.Header>
  //                 <img className="rounded me-2" alt="" />
  //                 <strong className="me-auto">Contact Request</strong>
  //                 <small>Now</small>
  //               </Toast.Header>
  //               <Toast.Body>
  //                 Your contact message was sent successfully.
  //               </Toast.Body>
  //             </Toast>
  //           );
  //         },
  //         (error) => {
  //           return (
  //             <Toast>
  //               <Toast.Header>
  //                 <img className="rounded me-2" alt="" />
  //                 <strong className="me-auto">Contact Request</strong>
  //                 <small>Now</small>
  //               </Toast.Header>
  //               <Toast.Body>Your submission was not successful.</Toast.Body>
  //             </Toast>
  //           );
  //         }
  //       );
  //   };

  return (
    <>
      <Container fluid className="bg-dark text-light">
        <ContactNavbar />
        <p className={`mt-3 mb-2 fs-2 ${styles.contactText}`}>
          If you have any questions or would just like to reach out, feel free
          to reach out to me at my email{" "}
          <a href="mailto:gkparab1@gmail.com" className={styles.emailLink}>
            gkparab1@gmail.com
          </a>{" "}
          or fill out the form below. You can also contact me on{" "}
          <a
            href="https://www.linkedin.com/in/gparab"
            className={styles.linkedinLink}
          >
            Linkedin
          </a>
          . I look forward to hearing from you!
        </p>
        <div className="bg-dark vh-100">
          {/* <Form ref={contactForm} onSubmit={sendContactEmail}>
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
            <Form.Control as="textarea" rows={2} required name="message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
        </div>
      </Container>
      <Footer />
    </>
  );
}
