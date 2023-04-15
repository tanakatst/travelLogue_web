import { ReactNode, createContext, useContext, useState } from "react";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
} from "@mui/material/styles";
import { lightTheme, darkTheme } from "../../../styles/mui/theme";
import MyApp from "../../../pages/_app";

const defaultTheme = "light";
export const ThemeContext = createContext({
  theme: defaultTheme,
  toggleColorMode: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const toggleColorMode = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleColorMode }}>
      <MaterialCssVarsProvider
        theme={theme == "light" ? lightTheme : darkTheme}
      >
        {children}
      </MaterialCssVarsProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
