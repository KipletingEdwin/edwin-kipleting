// src/components/Services.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DevicesIcon from "@mui/icons-material/Devices";

export default function Services() {
  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Web Development",
      description:
        "I build responsive and high-performance web applications using modern frameworks like React and Material UI.",
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "UI/UX Design",
      description:
        "I focus on creating clean, intuitive, and user-friendly interfaces that provide a smooth user experience.",
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Responsive Design",
      description:
        "Every project I create looks great on all devices — from desktops to smartphones.",
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
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
        My Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                textAlign: "center",
                p: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                {service.icon}
                <Typography variant="h5" fontWeight="bold" mt={2} mb={1}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "center" }}>
                <Button variant="outlined" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
