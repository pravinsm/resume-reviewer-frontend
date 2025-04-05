import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { avatars, features, steps } from "../data/landing";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="main-landing">
      <section className="hero">
        <Box className="container">
          <Box
            sx={{
              display: "flex",
              gap: 8,
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              placeContent: "space-between",
            }}
          >
            <Box className="hero-left">
              <Typography variant="h2" gutterBottom>
                AI-Powered Resume Analysis for Modern Recruiters
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: "1.25rem" }}
                gutterBottom
              >
                Resume Reviewer uses Meta Llama 3.3 AI to analyze resumes
                against job descriptions, providing accurate match scores and
                detailed candidate summaries.
              </Typography>

              <Box display="flex" gap={2} mt={4} mb={2}>
                <Button
                  disableElevation
                  variant="contained"
                  onClick={() => navigate("/sign-in")}
                >
                  Get Started
                </Button>
                <Button variant="outlined" onClick={() => navigate("/sign-in")}>
                  Watch demo
                </Button>
              </Box>

              <Box className="teams-avatar">
                <AvatarGroup max={4}>
                  {avatars.map((avatar) => (
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      key={avatar.name}
                      alt={avatar.name}
                      src={avatar.url}
                    />
                  ))}
                </AvatarGroup>
                <Typography variant="body2">
                  Trusted by 500+ recruitment teams worldwide
                </Typography>
              </Box>
            </Box>
            <Box className="hero-right">
              <img src="images/hero.png" alt="" />
            </Box>
          </Box>
        </Box>
      </section>

      <section className="features">
        <Box className="container">
          <Typography variant="h4" textAlign="center" gutterBottom>
            Streamline Your Recruitment Process
          </Typography>
          <Typography variant="body1" textAlign="center" mb={6}>
            Resume Reviewer transforms how you evaluate candidates with powerful
            AI-driven features
          </Typography>

          <Box className="grid-cards">
            {features.map((feature) => (
              <Card
                key={feature.name}
                variant="outlined"
                className="feature-card"
              >
                {feature.icon}
                <Typography variant="h6" gutterBottom>
                  {feature.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {feature.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </section>

      <section className="how-it-works">
        <Box className="container">
          <Typography variant="h4" textAlign="center" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="body1" textAlign="center" mb={6}>
            Our streamlined process makes it easy to analyze and compare
            candidates
          </Typography>

          <Box className="grid-steps">
            {steps.map((step) => (
              <Box className="step-card">
                <Box>{step.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {step.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box mx={"auto"} mt={12} maxWidth={"768px"}>
            <img
              className="how-it-works-image"
              src="/images/howitworks.png"
              alt=""
            />
          </Box>
        </Box>
      </section>

      <section className="banner">
        <Box
          className="container"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography variant="h4" textAlign="center" gutterBottom>
            Ready to Transform Your Hiring Process?
          </Typography>
          <Typography variant="body1" textAlign="center" mb={3}>
            Join hundreds of companies using Resume Reviewer to find the perfect
            candidates faster
          </Typography>
          <Button
            size="large"
            variant="contained"
            disableElevation
            onClick={() => navigate("/sign-in")}
          >
            Start Free Trial
          </Button>
        </Box>
      </section>

      <footer>
        <p>&copy; 2025 Resume Reviewer. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
