import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { teal } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
const IndexNav = () => {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 3 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            color='text.secondary'
            sx={{ flexGrow: 1 }}
          >
            TravelLogue
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "bgColor.blue" }}
            onClick={() => router.push("/login")}
          >
            ログイン
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default IndexNav;
