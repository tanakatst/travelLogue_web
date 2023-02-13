import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, Box, Card, Divider, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, Image, StarBorder } from '@mui/icons-material';
import {Collapse} from '@mui/material';
import { Inbox } from '@mui/icons-material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ExpandLess } from '@mui/icons-material';

type Props = {
    username: string
}
const RightBar= (props:Props) => {
    const username = props.username


    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

  return (
    <>
    <Box paddingTop={5}>
        <Card sx={{ borderRadius:2, boxShadow:10 }}>
            <Avatar sx={{margin:'0 auto', marginTop:3}}/>
            <Typography  fontWeight={800} variant='h6' textAlign='center' p={3}>
                {username}
            </Typography>
            <List sx={{paddingTop:1}}>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Image />
                    </ListItemIcon>
                    <ListItemText primary="旅行プロフィール" />
                    </ListItemButton>
                </ListItem>
                <Divider  />
                <ListItem disablePadding>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                        <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="写真" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
            </List>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box>
                    <Card>
                        <ImageList sx={{ width:'80%',height:300, margin:'auto'}} cols={3} >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    </Card>
                </Box>
            </Collapse>
        </Card>
        <Divider orientation='horizontal' sx={{marginY:'20px'}} color='#bdbdbd'/>
        {/* <Typography variant='h5' textAlign='center' fontWeight={700} sx={{paddingTop:4}}>
            写真一覧
        </Typography> */}

    </Box>
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
export default RightBar;
