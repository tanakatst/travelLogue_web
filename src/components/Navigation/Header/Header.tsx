import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(circle, #399282 0%,  #525ca5 100%)",
        height: "75px",
        width: "100%",
      }}
    >
      <Stack height="100%" direction="row" alignItems="center" px={4}>
        <Typography variant="h5" fontWeight='bold' color='text.secondary'>TravelLogue</Typography>
      </Stack>
    </Box>
  );
};

export default Header;
