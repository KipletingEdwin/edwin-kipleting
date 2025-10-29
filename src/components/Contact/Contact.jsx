// src/components/Contact.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data — you can later integrate EmailJS, Formspree, or a backend
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo form for now)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      id="contacts"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 12 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        fontWeight="bold"
        mb={4}
      >
        Get In Touch
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        mb={6}
        maxWidth="600px"
        mx="auto"
      >
        Whether you have a question, a project idea, or just want to say hi — my inbox is always open. I’ll try my best to get back to you!
      </Typography>

      {/* Contact Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "600px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Your Message"
          name="message"
          multiline
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Send Message
        </Button>
      </Box>

      {/* Social Links */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        mt={6}
      >
        <IconButton
          color="primary"
          component="a"
          href="https://github.com/yourusername"
          target="_blank"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://linkedin.com/in/yourusername"
          target="_blank"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="mailto:your.email@example.com"
        >
          <Email fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}
