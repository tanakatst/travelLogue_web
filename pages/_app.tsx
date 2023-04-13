import "@fontsource/public-sans";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
} from "@mui/material/styles";
import colors from "@mui/joy/colors";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
const queryClient = new QueryClient();

import theme from "../styles/mui/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <MaterialCssVarsProvider theme={theme}>
            {/* <JoyCssVarsProvider> */}
            <Component {...pageProps} />
            {/* </JoyCssVarsProvider> */}
          </MaterialCssVarsProvider>
          {/* <ToastContainer hideProgressBar={true}/> */}
        </QueryClientProvider>
      </StyledEngineProvider>
    </>
  );
}
export default MyApp;
