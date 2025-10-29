import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import bgImage from "../../assets/laptop.jpg"; // replace with your background

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.9)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Hero Text */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {/* Large Layered Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "6rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Design
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontSize: { xs: "2.5rem", md: "5rem" },
              lineHeight: 1,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            clarity
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "6rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Impact
          </Typography>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              maxWidth: 500,
              mx: "auto",
              color: "rgba(255,255,255,0.7)",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Visual clarity that inspires action and fuels business results.
          </Typography>
        </motion.div>
      </Box>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <IconButton
          size="large"
          sx={{
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default Hero;
