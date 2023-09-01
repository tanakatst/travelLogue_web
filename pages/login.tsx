import React from "react";
import { Box, Stack } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { LoginUI } from "../src/features/auth/services/login/LoginUI";

const Login = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Stack direction="row" sx={{ height: "100%" }}>
        <LoginUI isSmallScreen={isSmallScreen} />
        {!isSmallScreen ? (
          <Box
            width="45%"
            height="100vh"
            sx={{
              backgroundImage:
                "url(https://as1.ftcdn.net/v2/jpg/00/87/66/42/1000_F_87664267_45xxQy6OGChagfWodO5CacW6voy0AaV4.jpg)",
            }}
          ></Box>
        ) : null}
      </Stack>
      <Backdrop
        open={isSmallScreen}
        style={{
          backgroundImage:
            "url(https://as1.ftcdn.net/v2/jpg/00/87/66/42/1000_F_87664267_45xxQy6OGChagfWodO5CacW6voy0AaV4.jpg)",
          zIndex: -2,
          color: "#fff",
          opacity: isSmallScreen ? 0.1 : 0,
        }}
      ></Backdrop>
    </div>
  );
};

export default Login;
