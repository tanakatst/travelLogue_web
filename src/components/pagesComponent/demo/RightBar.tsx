import React, { Component } from 'react'
import { Box } from '@mui/material';

export default class RightBar extends Component {
  render() {
    return (
      <Box bgcolor='green' p={2} flex={2} sx={{display:{xs:'none', sm:'block '}}}>RightBar</Box>
    )
  }
}
