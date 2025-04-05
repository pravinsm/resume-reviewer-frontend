import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Box className="container">
        <Link to="/" className="logo">
          <Typography variant="h5" color="primary">
            Resume Reviewer
          </Typography>
        </Link>

        <Box className="nav-items">
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button size="small" variant="outlined" className="nav-button">
                Log In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button
              size="small"
              variant="outlined"
              color="default"
              className="nav-button"
              onClick={() => navigate("/dashboard")}
            >
              <DashboardOutlinedIcon sx={{ fontSize: 17 }} />
              <Box
                component="span"
                sx={{ display: { xs: "none", sm: "block" }, ml: 1 }}
              >
                Dashboard
              </Box>
            </Button>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "user-button",
                },
              }}
            />
          </SignedIn>
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;
