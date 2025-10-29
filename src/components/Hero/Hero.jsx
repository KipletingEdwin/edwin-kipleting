import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
<Box
      id="home"
      sx={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "background.default",
        px: 2, 
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Hi, I’m Edwin 👋
      </Typography>

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: 600 }}
      >
        I build modern, responsive web applications using ReactJs, AngularJs,Material UI and Ruby on Rails
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Link to="work" smooth={true} duration={500} offset={-70}>
          <Button variant="contained" color="primary" size="large">
            View My Work
          </Button>
        </Link>

        <Link to="contacts" smooth={true} duration={500} offset={-70}>
          <Button variant="outlined" color="primary" size="large">
            Contact Me
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero;

