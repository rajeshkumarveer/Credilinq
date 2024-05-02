"use client";
import { createTheme } from "@mui/material/styles";
import _ from "lodash";
import { typography, components } from "./MIComponentOverride";

const baseTheme = {
  palette: {
    primary: {
      // main: "#67c2c4",
      // light: "#a8dcdd",
      // dark: "#26A8AB",
      main: "#e46a76",
      light: "#f3beb3",
      dark: "#df4829",
      contrastText: "#ffffff",
    },
    // secondary: {
    //   main: "#fbd77d",
    //   light: "#fde9b5",
    //   dark: "#ffc846",
    //   contrastText: "#ffffff",
    // }, 
    secondary: {
      main: "#bc86d2",
      light: "#c1adc9",
      dark: "#926fa0",
      contrastText: "#ffffff",
    },
    success: {
      main: "#67c47c",
      light: "#a8ddac",
      dark: "#26ab59",
      contrastText: "#ffffff",
    },
    danger: {
      main: "#ab2626",
      light: "#c46767",
    },
    info: {
      main: "#bc86d2",
      light: "#c1adc9",
      dark: "#926fa0",
      contrastText: "#ffffff",
    },
    error: {
      main: "#e46a76",
      light: "#f3beb3",
      dark: "#df4829",
    },
    warning: {
      main: "#fbd77d",
      light: "#fde9b5",
      dark: "#ffc846",
      contrastText: "#ffffff",
    },
    text: {
      secondary: "#777e89",
      danger: "#fc4b6c",
    },
    grey: {
      A100: "#ecf0f2",
      A200: "#99abb4",
      A400: "#767e89",
      A700: "#e6f4ff",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "rgba(0, 0, 0, 0.03)",
    },
    background: {
      default: "#fafbfb",
    },
  },
  mixins: {
    toolbar: {
      color: "#949db2",
      "@media(min-width:1280px)": {
        minHeight: "64px",
        padding: "0 30px",
      },
      "@media(max-width:1280px)": {
        minHeight: "64px",
      },
    },
  },
  components,
  typography,
};

const themesOptions = [
  {
    name: "DEFAULT_THEME",
    palette: {
      primary: {
        main: "#601A79",
        light: "#601A79",
        dark: "#601A79",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#601A79",
        light: "#601A79",
        dark: "#601A79",
        contrastText: "#ffffff",
      },
    },
  },
];

export const FinalTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);
  const baseMode = {
    palette: {
      mode: 'light',
      background: {
        default: "#fafbfb",
        dark: "#ffffff",
        paper:  "#ffffff",
      },
      text: {
        primary:"rgba(0, 0, 0, 0.87)",
        secondary:  "#777e89",
      },
    },
  };

  return createTheme(_.merge({}, baseTheme, baseMode, themeOptions, {}));
};
