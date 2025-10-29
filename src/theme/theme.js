import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: "#ea580c",
        },
        // primary: {
        //     main: "#1f2d41",
        // },
        secondary: {
            main: "#171717",
        },
         background: {
            default: "#171717",
        },
      },
      typography: {
        fontFamily: '"IBM Plex Sans", sans-serif',
      },
});

export default theme;