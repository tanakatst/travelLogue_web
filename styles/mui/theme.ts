import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ThemeOptions } from "@mui/material/styles";
// mui theme typescript
declare module "@mui/material/styles" {
  interface Palette {
    bgColor: {
      gray: string;
      primaryWhite: string;
      secondaryWhite: string;
      blue: string;
      white: string;
      charcoal: string;
      orange: string;
      bladBlue:string;
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
      bladBlue:string;
      bladOrange: string;
    };
    textColor?: {
      black: string;
      white: string;
      fullBlack: string;
    };
  }
}

export const theme = createTheme({
  // TODO:テーマ設定を行います
  palette: {
    bgColor: {
      gray: "#6E6E6E",
      blue: "#4A70A5",
      primaryWhite: "#E6E6EB",
      secondaryWhite: "#EDEDED",
      charcoal: "#F4EADE",
      orange: "#ED8C72",
      bladBlue:"#1C2B80",
      bladOrange: "#E45934",
    },
    textColor: {
      black: "#585A5A",
      white: "#EFECEC",
      fullBlack: "#000",
    },
    
    // mode: 'dark',
    // primary: {
    //   main: '#134577',
    // },
    // secondary: {
    //   main: '#f59700',
    //   contrastText: 'rgba(255,255,255,0.87)',
    // },
    // warning: {
    //   main: '#ed9302',
    // },
    // info: {
    //   main: '#02b2d1',
    // },
    // text: {
    //   primary: '#ece9e9',
    // },
    // error: {
    //   main: '#ff5f58',
    // },
    // background: {
    //   paper: '#2d2d2d',
    // },
    
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

const themeOptions: ThemeOptions = {
  palette: {
    
  },
};

export default theme;
