import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { FinalTheme } from "./Theme";
import { Box } from "@mui/material";

function Themesetter({ children }) {
  let theme = FinalTheme({ theme: "DEFAULT_THEME" });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box data-aos="zoom-in" data-aos-duration="250">
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default Themesetter;
