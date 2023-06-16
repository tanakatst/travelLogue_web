import { PaletteColorOptions, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ThemeOptions } from "@mui/material/styles";
// mui theme typescript

type Color = {
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
}
declare module "@mui/material/styles" {
  interface Palette {
    prime: Color;
    second:Color;
    bgColor: {
      primaryTransparent: string;
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
    prime: Color;
    second:Color;
    bgColor?: {
      primaryTransparent: string;
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
    // メインカラー
    prime: {
      0: "#F3FEFF",
      10: "#d4f5f4",
      20: "#71E4E2",
      30: "#52DEDC",
      40: "#37D9D7",
      50: "#26C9C7",
      60: "#21B1AF",
      70: "#1D9C9A",
      80: "#288988",
      90: "#1A6F6D",
      100: "#004140",
    },
    // サブカラー
    second:{
      0: "#FFFFFF",
      10: "#FEF5DD",
      20: "#FDE9B7",
      30: "#FCDF94",
      40: "#FBD574",
      50: "#FACC57",
      60: "#F9C33A",
      70: "#F8BB1F",
      80: "#F6B308",
      90: "#E0A307",
      100: "#CC9406",
    },
    bgColor: {
      primaryTransparent: "#E6E6EB",
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
  typography: {},
});

// import { ThemeOptions } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // メインカラー
    prime: {
      0: "#F3FEFF",
      10: "#93EBE9",
      20: "#71E4E2",
      30: "#52DEDC",
      40: "#37D9D7",
      50: "#26C9C7",
      60: "#21B1AF",
      70: "#1D9C9A",
      80: "#288988",
      90: "#1A6F6D",
      100: "#004140",
    },
    // サブカラー
    second:{
      0: "#FFFFFF",
      10: "#FEF5DD",
      20: "#FDE9B7",
      30: "#FCDF94",
      40: "#FBD574",
      50: "#FACC57",
      60: "#F9C33A",
      70: "#F8BB1F",
      80: "#F6B308",
      90: "#E0A307",
      100: "#CC9406",
    },
    bgColor: {
      primaryTransparent: "rgba(40,91,148,0.3)",
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
