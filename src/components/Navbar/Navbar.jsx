import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const Navbar = () => {
  const menuItems = ["Home", "About", "Services", "Work", "Contacts"];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        //  color='default'
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Edwin
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((menuItem) => (
              <Button key={menuItem} color="inherit">
                {menuItem}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}

      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 150 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {menuItems.map((menuItem) => (
              <ListItemButton onClick={toggleDrawer}>
                <ListItemText primary={menuItem} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
