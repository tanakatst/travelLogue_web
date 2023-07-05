import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import AuthenticateComponent from "./LoginForm";

const LoginUI = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "55%",
          px: 3,
          pb: 3,
          position: isSmallScreen ? "absolute" : "relative",
          zIndex: 2,
        }}
      >
        <Stack justifyContent="center" sx={{ height: "80px" }}>
          <Typography variant="h5">TravelLogue</Typography>
        </Stack>
        <AuthenticateComponent />
      </Box>
    </>
  );
};

export { LoginUI };
