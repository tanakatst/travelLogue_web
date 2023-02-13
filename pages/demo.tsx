import { Box } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react'
import Sidebar from '../src/components/pagesComponent/demo/Sidebar';
import Feed from '../src/components/pagesComponent/demo/Feed';
import RightBar from '../src/components/pagesComponent/demo/RightBar';
import Navbar from '../src/components/pagesComponent/demo/Navbar';

const demo = () => {
  return (
          <Box>
              <Navbar /> 
              <Stack direction='row' spacing={2} justifyContent='space-between'>
                  <Sidebar />
                  <Feed />
                  <RightBar />
              </Stack>
          </Box>
  )
}
export default demo;
