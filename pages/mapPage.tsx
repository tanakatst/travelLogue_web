import React,{useState} from 'react';
import { createTheme } from '@mui/material/styles';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import NavbarLayout from '../src/components/Navigation/NavbarLayout';
import Map from '../src/components/pagesComponent/map/Map';



const mdTheme = createTheme();

const mapPage = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
  <>
    <NavbarLayout>
      <Map />
    </NavbarLayout>
    </>
  );
}

export default mapPage;
