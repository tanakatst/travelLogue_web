import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Badge, Icon, InputBase, Typography } from '@mui/material';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import theme from '../../../styles/mui/theme';
import Box from '@mui/material/Box';
import { borderRadius } from '@mui/system';
import Avatar from '@mui/material/Avatar';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
});

const Search = styled('div')(({theme})=>({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius:theme.shape.borderRadius ,
    width:'40%'
}));

const Icons = styled(Box)(({theme})=>({
    display:'none',
    alignItems:'center',
    gap:'20px',
    [theme.breakpoints.up('sm')]:{
        display:'flex'
    }
}));

const UserBox = styled(Box)(({theme})=>(
    {
        display:'none',
        alignItems:'center',
        gap:'10px',
        [theme.breakpoints.up('sm')]:{
            display:'flex'
        }

    }
))

export default class Navbar extends Component {
  render() {
    return (
      <AppBar position='sticky'>
          <StyledToolbar>
              <Typography variant='h6'  sx={{display:{xs:'none',sm:'block'}}}>
                  LAMA DEV
              </Typography>
              <Pets  sx={{display:{xs:'block',sm:'none'}}}/>
              <Search><InputBase placeholder='search'/></Search>
              <Icons>
                  <Badge badgeContent={4} color='error'>
                      <Mail />
                  </Badge>
                  <Badge badgeContent={2} color='error'>
                      <Notifications />
                  </Badge>
                  <Avatar sx={{width:30, height:30}} src=''/>
              </Icons>
          </StyledToolbar>
      </AppBar>
    )
  }
}
