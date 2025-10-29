// src/components/About.jsx
import React from "react";
import { Box, Typography, Grid, Chip, Stack } from "@mui/material";
//import ProfilePic from "../assets/profile.jpg"; // optional, can reuse your Hero image

export default function About() {
  const skills = [
    "React",
    "Material UI",
    "JavaScript (ES6+)",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.paper",
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        fontWeight="bold"
        mb={6}
      >
        About Me
      </Typography>

      <Grid container spacing={6} alignItems="center">
        {/* Image */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
           // src={ProfilePic}
            alt="Edwin"
            sx={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: 3,
            }}
          />
        </Grid>

        {/* Text Content */}
        <Grid item xs={12} md={7}>
          <Typography variant="h6" color="text.secondary" mb={3}>
            Hello! I’m Edwin — a passionate frontend developer who loves
            creating visually appealing, user-friendly, and high-performance web
            applications. I enjoy transforming ideas into reality through clean
            and modern code.
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={4}>
            I specialize in React, Material UI, and building responsive designs.
            I’m constantly learning and experimenting with new technologies to
            improve my craft.
          </Typography>

          <Typography
            variant="h6"
            color="text.primary"
            fontWeight="bold"
            mb={2}
          >
            Technologies I use:
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
