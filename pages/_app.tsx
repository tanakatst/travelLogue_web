import "@fontsource/public-sans";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

import colors from "@mui/joy/colors";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
const queryClient = new QueryClient();
import { CssBaseline } from "@mui/material";

import { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "../src/hooks/context/themeContext";
import { ThemeProvider as ThemeContextProvider } from "../src/hooks/context/themeContext";
import { AppContext } from "next/app";
import App from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleColorMode } = useTheme();
  const [isThemeContextChanged, setIsThemeContextChanged] = useState(false);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <CssBaseline />
            <Component {...pageProps} />
            {/* <ToastContainer hideProgressBar={true}/> */}
          </ThemeContextProvider>
        </QueryClientProvider>
      </StyledEngineProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
