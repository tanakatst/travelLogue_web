import React from "react";
import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { useTheme, Icon, Box, ListItemText } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "next/link";
import path from "path";
import { Url, UrlObject } from "url";

const NavbarButton = ({
  id,
  name,
  icon,
  path,
  isSelected,
  setIsSelected,
}: {
  id: number;
  path: string | null;
  icon: ReactJSXElement | boolean;
  name: string;
  isSelected: number;
  setIsSelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      {path ? (
        <Link href={path}>
          <ListItemButton
            sx={{
              height: "64px",
              borderRadius: "24px",
              backgroundColor: isSelected === id ? "prime.20" : "inherit",
              "&:hover": { backgroundColor: "prime.20", cursor: "pointer" },
            }}
            onClick={() => setIsSelected(id)}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText sx={{ fontWeight: "bold" }}>
              <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
            </ListItemText>
          </ListItemButton>
        </Link>
      ) : (
        <ListItemButton
          sx={{
            height: "64px",
            borderRadius: "24px",
            backgroundColor: isSelected === id ? "prime.20" : "inherit",
            "&:hover": { backgroundColor: "prime.20", cursor: "pointer" },
          }}
          onClick={() => setIsSelected(id)}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText sx={{ fontWeight: "bold" }}>
            <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
          </ListItemText>
        </ListItemButton>
      )}
    </>
  );
};

export default NavbarButton;
