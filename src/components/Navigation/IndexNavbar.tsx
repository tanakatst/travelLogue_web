import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import LoginModal from '../pagesComponent/index/LoginModal';
const IndexNav =()=> {
    // モーダルの挙動
  return (
    <Box sx={{ flexGrow: 1 , paddingTop:3}}>
    <AppBar position="static" color='transparent' elevation={0}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color:'textColor.white'}}>
          TravelLogue
        </Typography>
        <LoginModal />
      </Toolbar>
    </AppBar>
  </Box>
  );
}
export default IndexNav;
