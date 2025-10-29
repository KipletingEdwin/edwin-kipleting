import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Services","Projects", "Contacts"];

  const toggleDrawer = () => setMenuOpen(!menuOpen);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          //background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          color: "white",
          px: { xs: 2, md: 6 },
          py: 1,
        }}
      >
        {/* Framer Motion container for entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                letterSpacing: 1,
                cursor: "pointer",
                color: "#64b5f6"
              }}
            >
              Edwin<span style={{ color: "#64b5f6" }}>.</span>
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  backgroundColor = "white"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  <Button
                    sx={{
                      color: "white",
                      textTransform: "none",
                      borderRadius: "50px",
                      px: 2.5,
                      fontSize: "1rem",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.08)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}

            
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </motion.div>
      </AppBar>

      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: "#0a0a0a",
            color: "white",
            width: 220,
            pt: 2,
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item}
              onClick={toggleDrawer}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              <ListItemText
                primary={item}
                // primaryTypographyProps={{
                //   fontWeight: 500,
                //   fontSize: "1rem",
                // }}
              />
            </ListItemButton>
          ))}
        </List>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <Box sx={{ p: 2 }}>


        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
