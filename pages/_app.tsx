import '@fontsource/public-sans';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../hooks/AuthContext'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {StyledEngineProvider, ThemeProvider} from '@mui/material/styles'
import theme from '../styles/mui/theme';
import { useEffect } from 'react';
const queryClient = new QueryClient()



function MyApp({ Component, pageProps }: AppProps) {
    // ページ遷移制御(isAuth true:false)
    // const {isAuth , setIsAuth}  = useAuth()
    // const router = useRouter()
    // isAuth?

  return (
      <>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                    {/* <ToastContainer hideProgressBar={true}/> */}
                    </QueryClientProvider>
                </StyledEngineProvider>
            </ThemeProvider>
      </>
  )
}
export default MyApp;
