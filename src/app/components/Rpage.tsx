import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  School,
  Briefcase,
  Code,
  Award,
  User2,
} from "lucide-react";
import {
  Card,
  Typography,
  Box,
  Chip,
  IconButton,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const ResumePage = ({ darkMode = false }) => {
  const [activeSection, setActiveSection] = useState("education");

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#64ffda" : "#0088cc",
        light: darkMode ? "rgba(100, 255, 218, 0.1)" : "rgba(0, 136, 204, 0.1)",
      },
      background: {
        default: darkMode ? "#0a192f" : "#ffffff",
        paper: darkMode ? "#112240" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#e6f1ff" : "#333333",
        secondary: darkMode ? "#8892b0" : "#666666",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h3: {
        fontWeight: 700,
        letterSpacing: "-0.01em",
      },
      h5: {
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
      h6: {
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(10px)",
            backgroundColor: darkMode
              ? "rgba(17, 34, 64, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
            border: `1px solid ${
              darkMode ? "rgba(100, 255, 218, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }`,
            boxShadow: darkMode
              ? "0 10px 30px -10px rgba(2, 12, 27, 0.7)"
              : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode
              ? "rgba(100, 255, 218, 0.1)"
              : "rgba(0, 136, 204, 0.1)",
            border: "none",
            "&:hover": {
              backgroundColor: darkMode
                ? "rgba(100, 255, 218, 0.2)"
                : "rgba(0, 136, 204, 0.2)",
            },
          },
          label: {
            color: darkMode ? "#64ffda" : "#0088cc",
          },
        },
      },
    },
  });

  // Enhanced animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Enhanced card spring animation
  const cardSpring = useSpring({
    from: { transform: "scale(1)", opacity: 0.8 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { tension: 300, friction: 20 },
    reset: true,
  });

  const skills = {
    languages: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C",
      "HTML/CSS",
      "Verilog",
      "Bash",
      "C++ (Basic)",
      "R (Basic)",
    ],
    tools: ["Git", "Node.js", "Docker", "React", "Next.js", "MongoDB"],
    other: ["Tennis", "Photography", "Hindi", "Marathi", "Spanish"],
  };

  const sections = {
    about: {
      icon: <User2 />,
      content: (
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Computer Science student at Penn State University with a focus on
            cybersecurity. Passionate about building secure and scalable
            software solutions. Experienced in full-stack development, systems
            programming, and teaching.
          </Typography>
        </motion.div>
      ),
    },
    education: {
      icon: <School />,
      content: (
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: darkMode
                ? "rgba(17, 34, 64, 0.5)"
                : "rgba(0, 0, 0, 0.02)",
            }}
          >
            <Typography variant="h6" gutterBottom color="primary">
              The Pennsylvania State University
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Bachelor of Science (B.S.), Computer Science
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Minor in Cybersecurity | GPA: 3.66
            </Typography>
            <Typography variant="body2" color="text.secondary">
              July 2022 – May 2026
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" gutterBottom color="primary">
                Relevant Coursework
              </Typography>
              <Grid container spacing={1}>
                {[
                  "Data Structures and Algorithms",
                  "Computational Theory",
                  "Systems Programming",
                  "Computer Organization and Design",
                  "OOP with Web-Based Applications",
                  "Digital Design",
                  "Computing with Quantum Computers",
                ].map((course, index) => (
                  <Grid item key={index}>
                    <Chip
                      label={course}
                      size="small"
                      sx={{ borderRadius: 1 }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </motion.div>
      ),
    },
    experience: {
      icon: <Briefcase />,
      content: (
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          {[
            {
              company: "General Dynamics Electric Boat",
              role: "Tactical Software Engineering Co-op",
              date: "January 2025 - May 2025",
              details: ["Incoming Winter 2025"],
            },
            {
              company: "The Pennsylvania State University",
              role: "Teaching Assistant",
              date: "August 2022 – December 2023",
              details: [
                "Facilitated weekly recitation for ~200 students learning Python programming fundamentals",
                "Led three weekly review sessions",
                "Conducted code reviews for 100+ Python assignments per week",
              ],
            },
            {
              company: "Special Order Systems",
              role: "Software Intern",
              date: "July 2021 – December 2021",
              details: [
                "Developed API-based security system solutions for California state beaches",
                "Created Python scripts to automate weather data retrieval",
              ],
            },
          ].map((job, index) => (
            <Box
              key={index}
              sx={{
                mb: 4,
                p: 3,
                borderRadius: 2,
                backgroundColor: darkMode
                  ? "rgba(17, 34, 64, 0.5)"
                  : "rgba(0, 0, 0, 0.02)",
                "&:last-child": { mb: 0 },
              }}
            >
              <Typography variant="h6" color="primary">
                {job.company}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {job.role}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {job.date}
              </Typography>
              <Box
                component="ul"
                sx={{
                  pl: 2,
                  "& li": {
                    color: "text.secondary",
                    mb: 1,
                    "&:last-child": { mb: 0 },
                  },
                }}
              >
                {job.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </Box>
            </Box>
          ))}
        </motion.div>
      ),
    },
    projects: {
      icon: <Code />,
      content: (
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Grid container spacing={3}>
            {[
              {
                title: "Dashboard",
                tech: ["React", "Next.js"],
                date: "July 2024 – Present",
                description: [
                  "Designed a responsive dashboard to securely display sensitive documents",
                  "Used Discord OAuth for authentication",
                ],
              },
              {
                title: "JBOD System",
                tech: ["C"],
                date: "September 2023 – December 2023",
                description: [
                  "Created a simulated multi-disk system with read and write capabilities",
                  "Implemented networking for server communication",
                ],
              },
              {
                title: "Monopoly Board Game",
                tech: ["Java"],
                date: "May 2022",
                description: [
                  "Collaborated with 3 teammates to create a full-stack Monopoly project",
                  "Developed 40% of the codebase for the GUI-based game",
                ],
              },
            ].map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: darkMode
                      ? "rgba(17, 34, 64, 0.5)"
                      : "rgba(0, 0, 0, 0.02)",
                  }}
                >
                  <Typography variant="h6" color="primary">
                    {project.title}
                  </Typography>
                  <Box sx={{ my: 1 }}>
                    {project.tech.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {project.date}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      pl: 2,
                      "& li": {
                        color: "text.secondary",
                        mb: 1,
                        "&:last-child": { mb: 0 },
                      },
                    }}
                  >
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      ),
    },
    activities: {
      icon: <Award />,
      content: (
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Grid container spacing={3}>
            {[
              {
                title: "Nittany AI Student Society",
                description:
                  "Actively engaged in workshops and bootcamps, collaborating with fellow participants to further understanding of machine learning",
              },
              {
                title: "Club Tennis",
                description:
                  "Attended weekly tennis practices, interacting with club members to refine tennis skills and contribute to a collaborative team environment",
              },
            ].map((activity, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: darkMode
                      ? "rgba(17, 34, 64, 0.5)"
                      : "rgba(0, 0, 0, 0.02)",
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {activity.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activity.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      ),
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: 4,
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              background: darkMode
                ? "linear-gradient(to right, #64ffda, #0088cc)"
                : "linear-gradient(to right, #0088cc, #00bcd4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 4,
            }}
          >
            Gaurav Parab
          </Typography>
          <Grid container spacing={2} sx={{ mb: 6 }}>
            {[
              { icon: <Mail size={16} />, text: "gkparab1@gmail.com" },
              { icon: <Phone size={16} />, text: "408-813-5199" },
              { icon: <Linkedin size={16} />, text: "linkedin.com/in/gparab" },
            ].map((contact, index) => (
              <Grid item key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {contact.icon}
                  <Typography>{contact.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Skills
          </Typography>
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {Object.entries(skills).map(([category, items]) => (
              <Grid item xs={12} md={4} key={category}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: darkMode
                      ? "rgba(17, 34, 64, 0.5)"
                      : "rgba(0, 0, 0, 0.02)",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textTransform: "capitalize",
                      mb: 2,
                      color: "primary.main",
                    }}
                  >
                    {category}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {items.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        size="small"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Main Content */}
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {Object.entries(sections).map(([key, section]) => (
              <IconButton
                key={key}
                onClick={() => setActiveSection(key)}
                color={activeSection === key ? "primary" : "default"}
                sx={{
                  borderRadius: 2,
                  p: 2,
                  backgroundColor:
                    activeSection === key
                      ? darkMode
                        ? "rgba(100, 255, 218, 0.1)"
                        : "rgba(0, 136, 204, 0.1)"
                      : "transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: darkMode
                      ? "rgba(100, 255, 218, 0.2)"
                      : "rgba(0, 136, 204, 0.2)",
                  },
                }}
              >
                {section.icon}
              </IconButton>
            ))}
          </Box>

          <animated.div style={cardSpring}>
            <Card
              sx={{
                p: 3,
                borderRadius: 2,
              }}
            >
              {sections[activeSection].content}
            </Card>
          </animated.div>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ResumePage;
