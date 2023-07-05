import "@fontsource/public-sans";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  useQueries,
  useQuery,
} from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createContext, useContext, useEffect, useState } from "react";
import { lightTheme } from "../src/styles/mui/theme";
import { AppContext } from "next/app";
import App from "next/app";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {

  const [isThemeContextChanged, setIsThemeContextChanged] = useState(false);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={lightTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <CssBaseline /> */}
              <Component {...pageProps} />
              {/* <ToastContainer hideProgressBar={true}/> */}
            </LocalizationProvider>
          </ThemeProvider>
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
