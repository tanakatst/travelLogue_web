import react, { useState } from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";

// Icons import
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Button } from "@mui/joy";
import { colors, useTheme } from "@mui/material";
import {
  AccountCircle,
  AirplaneTicket,
  Home,
  House,
} from "@mui/icons-material";

import NavbarButton from "./NavbarLIst/NavbarButton";

export default function Navigation() {
  const materialTheme = useTheme().palette;
  const [isSelected, setIsSelected] = useState(0);
  return (
    <List size="sm" sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}>
      <ListItem nested>
        <ListSubheader>
          Dashbord
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ "--IconButton-size": "24px", ml: "auto" }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            "--List-gap": "7px",
            "& .JoyListItemButton-root": { py: "11px", px: "15px" },
          }}
        >
          <NavbarButton
            id={0}
            name="Home"
            icon={<Home />}
            isSelected={isSelected == 0}
            setIsSelected={setIsSelected}
          />
          <NavbarButton
            id={1}
            name="Plan"
            icon={<AirplaneTicket />}
            isSelected={isSelected == 1}
            setIsSelected={setIsSelected}
          />
          <NavbarButton
            id={2}
            name="Profile"
            icon={<AccountCircle />}
            isSelected={isSelected == 2}
            setIsSelected={setIsSelected}
          />
        </List>
      </ListItem>

      <ListItem nested sx={{ mt: 2 }}>
        <ListSubheader>
          Tags
          <IconButton
            size="sm"
            color="primary"
            sx={{ "--IconButton-size": "24px", ml: "auto" }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-tags"
          size="sm"
          sx={{
            "--ListItemDecorator-size": "32px",
          }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "99px",
                    bgcolor: "primary.300",
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>Personal</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "99px",
                    bgcolor: "danger.400",
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>Work</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "99px",
                    bgcolor: "warning.500",
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>Travels</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "99px",
                    bgcolor: "success.400",
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>Concert tickets</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}
