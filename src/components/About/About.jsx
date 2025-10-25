import { Box, Typography, Button } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "background.default",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Hi, I'm Edwin 👩‍💻
      </Typography>
      <Typography variant="h5" color="text.secondary">
        I build modern, responsive web experiences.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        See My Projects
      </Button>
    </Box>
  );
}
