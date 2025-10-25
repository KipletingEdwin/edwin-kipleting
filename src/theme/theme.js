import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#ff4081",
        }, background: {
            default: "#99f9f9",
        },
      },
      typography: {
        fontFamily: '"Outfit", sans-serif',
      },
});

export default theme;