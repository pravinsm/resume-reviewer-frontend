import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
        placeItems: "center",
        backgroundColor: "#f7f7f7",
        padding: 3,
        flex: 1,
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "5rem", fontWeight: "bold", color: "#1976d2" }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginBottom: 2, fontSize: "1.2rem", color: "#555" }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{
          padding: "10px 20px",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "30px",
          textTransform: "none",
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
