import React, { Component } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home } from '@mui/icons-material';



export default class Sidebar extends Component {
  render() {
    return (
      <Box  p={2} flex={1} sx={{display: {xs:'none', sm:'block'}}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="HomePage" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="MarketPlace" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Friends"/>
                </ListItemButton>
            </ListItem>
        </List>
      </Box>
    )
  }
}
