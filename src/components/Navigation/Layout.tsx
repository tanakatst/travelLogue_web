import * as React from "react";
import Box, { BoxProps } from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import { useTheme } from "@mui/material";

function Root(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)",
          },
          gridTemplateRows: "64px 1fr",
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Header(props: BoxProps) {
  const theme = useTheme().palette;
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          background:
            "radial-gradient(circle, #399282 0%,  #525ca5 100%)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          // borderBottom: '1px solid',
          boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.35)",
          // backgroundColor:theme.bgColor.charcoal,
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SideNav(props: BoxProps) {
  const theme = useTheme().palette;
  return (
    <Box
      component="nav"
      className="Navigation"
      {...props}
      sx={[
        {
          ml: 1,
          mt: 2,
          p: 2,
          // bgcolor: theme.bgColor.primaryA,
          // backgroundColor:theme.bgColor.secondaryWhite,
          borderRight: "1px ",
          borderColor: "divider",
          borderRadius: 8,
          display: {
            xs: "none",
            sm: "initial",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SidePane(props: BoxProps) {
  return (
    <Box
      className="Inbox"
      {...props}
      sx={[
        {
          bgcolor: "background.surface",
          borderRight: "1px solid",
          borderColor: "divider",
          display: {
            xs: "none",
            md: "initial",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props: BoxProps) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
}

function SideDrawer({
  onClose,
  ...props
}: BoxProps & { onClose: React.MouseEventHandler<HTMLDivElement> }) {
  return (
    <Box
      {...props}
      sx={[
        { position: "fixed", zIndex: 1200, width: "100%", height: "100%" },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Box
        role="button"
        onClick={onClose}
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: (theme) =>
            `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
        }}
      />
      <Sheet
        sx={{
          minWidth: 256,
          width: "max-content",
          height: "100%",
          p: 2,
          boxShadow: "lg",
          bgcolor: "background.surface",
        }}
      >
        {props.children}
      </Sheet>
    </Box>
  );
}

export default {
  Root,
  Header,
  SideNav,
  SidePane,
  SideDrawer,
  Main,
};
