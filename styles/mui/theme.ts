import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

// mui theme typescript
declare module "@mui/material/styles" {
  interface Palette {
    bgColor: {
      gray: string;
      secondaryWhite: string;
      blue: string;
      white: string;
      charcoal: string;
      orange: string;
      bladOrange: string;
    };
    textColor: {
      black: string;
      white: string;
      fullBlack: string;
    };
  }
  interface PaletteOptions {
    bgColor?: {
      gray: string;
      blue: string;
      primaryWhite: string;
      secondaryWhite: string;
      charcoal: string;
      orange: string;
      bladOrange: string;
    };
    textColor?: {
      black: string;
      white: string;
      fullBlack: string;
    };
  }
}

const theme = createTheme({
  // TODO:テーマ設定を行います
  palette: {
    bgColor: {
      gray: "#6E6E6E",
      blue: "#4A70A5",
      primaryWhite: "#E6E6EB",
      secondaryWhite: "#EDEDED",
      charcoal: "#F4EADE",
      orange: "#ED8C72",
      bladOrange: "#E45934",
    },
    textColor: {
      black: "#585A5A",
      white: "#EFECEC",
      fullBlack: "#000",
    },
  },
  typography: {
    fontFamily: [
      // 'DotGothic16,sans-serif',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      // 'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
