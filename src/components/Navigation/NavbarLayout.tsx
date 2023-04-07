import * as React from "react";
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
import { AccountCircle, AirplaneTicket, Home, House } from "@mui/icons-material";
import { muiTheme } from "../../styles/mui/JoytMaterialMixed";
import Profile from '../../../pages/profile';

export default function Navigation() {
  const materialTheme = useTheme().palette;
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
            "& .JoyListItemButton-root": { py: "11px", px:'15px' },
          }}
        >
          <ListItem>
            <ListItemButton
              sx={{
                color:materialTheme.textColor.white,
                backgroundColor: materialTheme.bgColor.blue,
                borderRadius: 8,
                ':hover':{backgroundColor:materialTheme.bgColor.bladBlue, color:materialTheme.textColor.white}
              }}
            >
              <ListItemDecorator sx={{color: materialTheme.textColor.white,':hover':{backgroundColor:materialTheme.bgColor.blue, color:materialTheme.textColor.white}}}>
                <Home />
              </ListItemDecorator>
              <ListItemContent sx={{fontWeight:'bold',pl:1}}>Home</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={{
                color:materialTheme.textColor.black,
                backgroundColor: materialTheme.bgColor.white,
                borderRadius: 8,
                ':hover':{backgroundColor:materialTheme.bgColor.bladBlue, color:materialTheme.textColor.white}
              }}
            >
              <ListItemDecorator sx={{color: materialTheme.textColor.black,':hover':{backgroundColor:materialTheme.bgColor.blue, color:materialTheme.textColor.white}}}>
                <AirplaneTicket />
              </ListItemDecorator>
              <ListItemContent sx={{fontWeight:'bold',pl:1}}>Plan</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={{
                color:materialTheme.textColor.black,
                backgroundColor: materialTheme.bgColor.white,
                borderRadius: 8,
                ':hover':{backgroundColor:materialTheme.bgColor.bladBlue, color:materialTheme.textColor.white}
              }}
            >
              <ListItemDecorator sx={{color: materialTheme.textColor.black,':hover':{backgroundColor:materialTheme.bgColor.blue, color:materialTheme.textColor.white}}}>
                <AccountCircle />
              </ListItemDecorator>
              <ListItemContent sx={{fontWeight:'bold',pl:1}}>Profile</ListItemContent>
            </ListItemButton>
          </ListItem>
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
