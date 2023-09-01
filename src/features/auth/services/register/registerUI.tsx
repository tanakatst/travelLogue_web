import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AuthenticateComponent from "../login/LoginForm";
import RegisterForm from "./registerForm";

const RegisterUI = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: isSmallScreen ? "100%" : "55%",
        position: isSmallScreen ? "absolute" : "relative",
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}
    >
      <Stack justifyContent="center" sx={{ height: "80px", px: 3 }}>
        <Typography variant="h5">TravelLogue</Typography>
      </Stack>
      <RegisterForm />
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Box>
  );
};

export default RegisterUI;
