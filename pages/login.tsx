import React from 'react';
import { Box } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import {LoginUI} from '../src/features/authentication/services/login/LoginUI';


const Login = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div style={{ position: 'relative' }}>
    <LoginUI  isSmallScreen={isSmallScreen}/>


    <Backdrop
      open={isSmallScreen}
      style={{
        zIndex: 1,
        color: '#fff',
        opacity: isSmallScreen ? 0.5 : 0,
      }}
    >
      右のコンポーネント
    </Backdrop>
  </div>
 
  )
}

export default Login;