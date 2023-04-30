import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ThemeOptions } from "@mui/material/styles";
// mui theme typescript
declare module "@mui/material/styles" {
  interface Palette {
    bgColor: {
      primaryTransparent:string;
      gray: string;
      primaryWhite: string;
      secondaryWhite: string;
      blue: string;
      white: string;
      charcoal: string;
      orange: string;
      bladBlue: string;
      bladOrange: string;
    };
    textColor: {
      primary: string;
    };
  }
  interface PaletteOptions {
    bgColor?: {
      primaryTransparent:string;
      gray: string;
      blue: string;
      primaryWhite: string;
      secondaryWhite: string;
      charcoal: string;
      orange: string;
      bladBlue: string;
      bladOrange: string;
    };
    textColor?: {
      primary: string;
      secondary: string;
    };
  }
}

export const lightTheme = createTheme({
  // TODO:テーマ設定を行います
  palette: {
    mode: "light",
    primary: {
      main: "#285b94",
    },
    secondary: {
      main: "#f59700",
      contrastText: "rgba(255,255,255,0.87)",
    },
    warning: {
      main: "#ed9302",
    },
    info: {
      main: "#02b2d1",
    },
    error: {
      main: "#ff5f58",
    },
    background: {
      paper: '#f5f5f5',
      default: '#e6e6e6',
    },
    text: {
      primary: "#313131",
      secondary: "#e6e6e6",
    },
    bgColor: {
      primaryTransparent:'#E6E6EB',
      gray: "#6E6E6E",
      blue: "#4A70A5",
      primaryWhite: "#E6E6EB",
      secondaryWhite: "#EDEDED",
      charcoal: "#F4EADE",
      orange: "#ED8C72",
      bladBlue: "#1C2B80",
      bladOrange: "#E45934",
    },
    textColor: {
      primary: "#585A5A",
      secondary: "#EFECEC",
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

// import { ThemeOptions } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#285b94",
      contrastText: "#e8e8e8",
      // light: "#1a4d71",
    },
    secondary: {
      main: "#f59700",
      contrastText: "rgba(255,255,255,0.87)",
    },
    warning: {
      main: "#ed9302",
    },
    info: {
      main: "#02b2d1",
    },
    error: {
      main: "#ff5f58",
    },
    background: {
      paper: "#292929",
    },
    text: {
      primary: "#e6e6e6",
      secondary: "#585A5A"
    },
    bgColor: {
      primaryTransparent:'rgba(40,91,148,0.3)',
      gray: "#6E6E6E",
      blue: "#4A70A5",
      primaryWhite: "#E6E6EB",
      secondaryWhite: "#EDEDED",
      charcoal: "#F4EADE",
      orange: "#ED8C72",
      bladBlue: "#1C2B80",
      bladOrange: "#E45934",
    },
    textColor: {
      primary: "#EFECEC",
      secondary: "#585A5A",
    },
  },
});
