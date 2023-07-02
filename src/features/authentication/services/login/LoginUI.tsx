import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import AuthenticateComponent from "../../components/authenticateComponent";

const LoginUI = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "65%",
          px: 3,
          position: isSmallScreen ? "absolute" : "relative",
          zIndex: 2,
        }}
      >
        <Stack  justifyContent='center' sx={{ height: "80px" }}>
          <Typography variant="h5">
            TravelLogue
          </Typography>
        </Stack>
        <AuthenticateComponent />
      </Box>
    </>
  );
};

export { LoginUI };
