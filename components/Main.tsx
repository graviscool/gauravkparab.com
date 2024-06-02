import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import '../styles/Main.module.css'

export default function Main() {
  return (
    <Container fluid className="bg-dark text-light">
      <div>
        <header>
          <h1>Hi I&apos;m Gaurav!</h1>
        </header>
        <main>
          <section id="about">
            <h2>About Me</h2>
            <p>
              Hi, I&apos;m Gaurav! I&apos;m a passionate web developer with
              experience in React and Next.js. I love building interactive and
              user-friendly websites.
            </p>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <CardGroup>
              <Card className="bg-dark text-light" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-light">
                    sub 1
                  </Card.Subtitle>
                  <Card.Text>example text 1</Card.Text>
                  <Card.Link href="#">Card Link 1</Card.Link>
                  <Card.Link href="#">Card Link 2</Card.Link>
                </Card.Body>
              </Card>
              <Card className="bg-dark text-light" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Subtitle className="mb-2 text-light">
                    sub 2
                  </Card.Subtitle>
                  <Card.Text>example text 2</Card.Text>
                  <Card.Link href="#">Card Link 1</Card.Link>
                  <Card.Link href="#">Card Link 2</Card.Link>
                </Card.Body>
              </Card>
              <Card className="bg-dark text-light" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project 3</Card.Title>
                  <Card.Subtitle className="mb-2 text-light">
                    sub 3
                  </Card.Subtitle>
                  <Card.Text>example text 3</Card.Text>
                  <Card.Link href="#">Card Link 1</Card.Link>
                  <Card.Link href="#">Card Link 2</Card.Link>
                </Card.Body>
              </Card>
            </CardGroup>

            {/* <ul>
              <li>
                <h3>Project 1</h3>
                <p>Description of project 1.</p>
              </li>
              <li>
                <h3>Project 2</h3>
                <p>Description of project 2.</p>
              </li>
              <li>
                <h3>Project 3</h3>
                <p>Description of project 3.</p>
              </li>
            </ul> */}
          </section>
          <section id="prevexp">
            <h2>Work Experience</h2>
            <ul>
              <li>
                <h3>Company A</h3>
                <p>Position: Web Developer</p>
                <p>Duration: 2019 - 2021</p>
                <p>
                  Responsibilities: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </li>
              <li>
                <h3>Company B</h3>
                <p>Position: Frontend Engineer</p>
                <p>Duration: 2017 - 2019</p>
                <p>
                  Responsibilities: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </li>
            </ul>
          </section>
          <section id="techstack">
            <h2>Dev Tools/Tech Stack</h2>
          </section>
          <section id="contact">
            <h2>Contact Me</h2>
            <p>
              If you have any questions or would just like to reach out, feel
              free to reach out to me at my email{" "}
              <a href="mailto:gkparab1@gmail.com" className="link-info">
                gkparab1@gmail.com
              </a>
            </p>
          </section>
        </main>
      </div>
    </Container>
  );
}
