// src/components/Work.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function Work() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, Vite, and Material UI to showcase my projects and skills.",
      image: "/projects/portfolio.jpg", // Add your image in public/projects/
      link: "https://your-portfolio-link.com",
    },
    {
      title: "E-commerce App",
      description:
        "A responsive e-commerce web app with product listings, shopping cart, and checkout flow using React.",
      image: "/projects/ecommerce.jpg",
      link: "https://your-ecommerce-link.com",
    },
    {
      title: "Dashboard UI",
      description:
        "An analytics dashboard designed with Material UI and Chart.js for real-time data visualization.",
      image: "/projects/dashboard.jpg",
      link: "https://your-dashboard-link.com",
    },
  ];

  return (
    <Box
      id="work"
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
        My Work
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold" mb={1}>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
