import Container from "react-bootstrap/Container";

export default function Contact() {
  return (
    <Container fluid className="bg-dark text-light">
      <h2>Contact Me</h2>
      <p>
        If you have any questions or would just like to reach out, feel free to
        reach out to me at my email
        <a href="mailto:gkparab1@gmail.com" className="link-info">
          gkparab1@gmail.com
        </a>{" "}
        or on{" "}
        <a href="https://www.linkedin.com/in/gparab" className="link-info">
          Linkedin
        </a>
        . I look forward to hearing from you!
      </p>
    </Container>
  );
}