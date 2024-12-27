import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown, SplitButton } from "react-bootstrap";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

export default function ResumeNavbar({
  setDark,
}: Readonly<{
  setDark: Dispatch<SetStateAction<boolean>>;
}>) {
  const [isDark, setIsDark] = useState(true);

  const setDarkMode = (newMode: boolean) => {
    setIsDark(newMode);
    setDark(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDark(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  return (
    <header>
      <Navbar
        expand="md"
        bg={isDark ? "dark" : ""}
        className="bg-body-tertiary mb-0"
        data-bs-theme={isDark ? "dark" : "light"}
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand className="ms-2" href="/">
            Gaurav Parab
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            className="bg-dark"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fw-bolder">
                Navigation
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
              <SplitButton
                title="View PDF Resume"
                variant="outline-primary"
                href="/documents/Gaurav_Parab_resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Dropdown.Item
                  href="/documents/Gaurav_Parab_resume.pdf"
                  download
                >
                  Download PDF Resume
                </Dropdown.Item>
              </SplitButton>
              <FormControlLabel
                value="Dark Mode Button"
                className={`ms-1 ${isDark ? "text-light" : "text-dark"}`}
                control={
                  <Switch
                    color="primary"
                    checked={isDark}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                }
                label={isDark ? "Dark" : "Light"}
                labelPlacement="end"
              />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
