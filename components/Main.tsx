import React from "react";

const Main = () => {
  return (
    <div className="main-container">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hi, I'm Gaurav! I'm a passionate web developer with experience in
            React and Next.js. I love building interactive and user-friendly
            websites.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
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
          </ul>
        </section>
        <section>
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
        <section>
          <h2>Contact Me</h2>
          <p>
            If you have any questions or would like to work together, feel free
            to reach out to me. You can find my contact information below.
          </p>
        </section>
      </main>
      <style jsx>{`
        .main-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        header {
          text-align: center;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 24px;
          color: #333;
        }

        section {
          margin-bottom: 40px;
        }

        h2 {
          font-size: 20px;
          color: #333;
          margin-bottom: 10px;
        }

        p {
          color: #666;
          line-height: 1.5;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 20px;
        }

        h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 5px;
        }

        footer {
          text-align: center;
          margin-top: 40px;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default Main;
