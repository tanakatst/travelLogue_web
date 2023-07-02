import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  IconButton,
  Typography,
  ListSubheader,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react";
import NavbarButton from "./components/NavbarButton";
import {
  Home,
  Logout,
  Menu as MenuIcon,
  Person,
  TravelExplore,
} from "@mui/icons-material";
const Navigation = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (isOpen: boolean) => (event: any) => {
    setOpen(isOpen);
  };
  return (
    <Box
      sx={{
        p: 2,
        width: "300px",
        height: "100%",
        // backgroundColor: "background.paper",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          p: 3,
          width: "100%",
          height: "100%",
          backgroundColor: "prime.10",
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}
        >
          TravelLogue
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ pt: 3, width: "100%" }}
        >
          <List sx={{ width: "100%" }}>
            <ListSubheader
              sx={{ pb: 1, backgroundColor: "prime.10", fontWeight: "bold" }}
            >
              ダッシュボード
            </ListSubheader>
            {["ホーム", "旅行計画", "プロフィール"].map((name, index) => (
              <NavbarButton
                icon={
                  index === 0 ? (
                    <Home />
                  ) : index === 1 ? (
                    <TravelExplore />
                  ) : (
                    <Person />
                  )
                }
                path={
                  index === 0
                    ? "/home"
                    : index === 1
                    ? "/makePlan"
                    : index === 2
                    ? "/profile"
                    : null
                }
                key={index}
                id={index}
                name={name}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              />
            ))}
            <Divider />
            <Box sx={{ pt: 3 }}>
              <NavbarButton
                icon={<Logout />}
                name="ログアウト"
                path={null}
                id={3}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              />
            </Box>
          </List>
        </Stack>
        {/* <NavbarButton id={1} name="おはよう" isSelected={true} /> */}
      </Stack>
    </Box>
  );
};

export default Navigation;

// Toggle Bar
