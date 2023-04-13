import * as React from "react";
import {
  CssVarsProvider,
  useColorScheme as useJoyColorScheme,
} from "@mui/joy/styles";
import { Grid, useColorScheme as useMaterialColorScheme } from "@mui/material";
import CssBaseline from "@mui/joy/CssBaseline";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";

// Icons import
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

// custom
import Layout from "../src/components/Navigation/Layout";
import Navigation from "../src/components/Navigation/NavbarLayout";
import { joyTheme, muiTheme } from "../src/styles/mui/JoytMaterialMixed";
import { deepmerge } from "@mui/utils";
import Link from "next/link";
import PostCard from "../src/components/pagesComponent/home/myPost/PostCard";

function ColorSchemeToggle() {
  const { mode, setMode: setMaterialMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="primary"
      onClick={() => {
        if (mode === "light") {
          setMaterialMode("dark");
          setJoyMode("dark");
        } else {
          setMaterialMode("light");
          setJoyMode("light");
        }
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function FilesExample() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <CssVarsProvider
      disableTransitionOnChange
      theme={deepmerge(muiTheme, joyTheme)}
    >
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(600px, 1fr) minmax(300px, 420px)",
          },
          ...(drawerOpen && {
            height: "100vh",
            overflow: "hidden",
          }),
        }}
      >
        <Layout.Header>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <IconButton
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <IconButton
                size="sm"
                variant="solid"
                sx={{ display: { xs: "none", sm: "inline-flex" } }}
              ></IconButton>
            </Link>
            <Link href="/">
              <Typography
                component="h1"
                fontWeight="xl"
                sx={{ color: "white", cursor: "pointer" }}
              >
                TravelLogue
              </Typography>
            </Link>
          </Box>
          <Input
            size="sm"
            placeholder="Search　Spot, Plan, and Anything..."
            startDecorator={<SearchRoundedIcon color="primary" />}
            endDecorator={
              <IconButton variant="outlined" size="sm" color="neutral">
                <Typography
                  fontWeight="lg"
                  fontSize="sm"
                  textColor="text.tertiary"
                >
                  /
                </Typography>
              </IconButton>
            }
            sx={{
              flexBasis: "500px",
              bgcolor: "white",
              color: "black",
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
            <IconButton
              size="sm"
              variant="outlined"
              color="primary"
              sx={{ display: { xs: "inline-flex", sm: "none" } }}
            >
              <SearchRoundedIcon />
            </IconButton>
            <IconButton
              size="sm"
              variant="outlined"
              color="primary"
              component="a"
              href="/blog/first-look-at-joy/"
            >
              <BookRoundedIcon />
            </IconButton>
            <ColorSchemeToggle />
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          <Box width="100%" px={4} flexGrow={1}>
            <Grid container columnSpacing={4} rowSpacing={12} pt={4}>
              {Array.from(Array(10).keys()).map((i) => (
                <PostCard key={i} />
              ))}
            </Grid>
          </Box>
        </Layout.Main>
        <Box my={4} mx={2}  sx={{borderRadius:'20px'}}>
        </Box>
        {/* <Sheet
          sx={{
            display: { xs: "none", sm: "initial" },
            borderLeft: "1px solid",
            borderColor: "neutral.outlinedBorder",
          }}
        >
          <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <Typography sx={{ flex: 1 }}>torres-del-paine.png</Typography>
            <IconButton variant="outlined" color="neutral" size="sm">
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ display: "flex" }}>
            <Button
              variant="soft"
              sx={{
                borderRadius: 0,
                borderBottom: "2px solid",
                borderColor: "primary.solidBg",
                flex: 1,
                py: "1rem",
              }}
            >
              Details
            </Button>
            <Button
              variant="plain"
              color="neutral"
              sx={{ borderRadius: 0, flex: 1, py: "1rem" }}
            >
              Activity
            </Button>
          </Box>
          <AspectRatio ratio="21/9">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=774"
            />
          </AspectRatio>
          <Box sx={{ p: 2, display: "flex", gap: 1, alignItems: "center" }}>
            <Typography level="body2" mr={1}>
              Shared with
            </Typography>
            <AvatarGroup size="sm" sx={{ "--Avatar-size": "24px" }}>
              <Avatar
                src="https://i.pravatar.cc/24?img=6"
                srcSet="https://i.pravatar.cc/48?img=6 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=7"
                srcSet="https://i.pravatar.cc/48?img=7 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=8"
                srcSet="https://i.pravatar.cc/48?img=8 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=9"
                srcSet="https://i.pravatar.cc/48?img=9 2x"
              />
            </AvatarGroup>
          </Box>
          <Divider />
          <Box
            sx={{
              gap: 2,
              p: 2,
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              "& > *:nth-child(odd)": { color: "text.secondary" },
            }}
          >
            <Typography level="body2">Type</Typography>
            <Typography level="body2" textColor="text.primary">
              Image
            </Typography>

            <Typography level="body2">Size</Typography>
            <Typography level="body2" textColor="text.primary">
              3,6 MB (3,258,385 bytes)
            </Typography>

            <Typography level="body2">Storage used</Typography>
            <Typography level="body2" textColor="text.primary">
              3,6 MB (3,258,385 bytes)
            </Typography>

            <Typography level="body2">Location</Typography>
            <Typography level="body2" textColor="text.primary">
              Travel pictures
            </Typography>

            <Typography level="body2">Owner</Typography>
            <Typography level="body2" textColor="text.primary">
              Michael Scott
            </Typography>

            <Typography level="body2">Modified</Typography>
            <Typography level="body2" textColor="text.primary">
              26 October 2016
            </Typography>

            <Typography level="body2">Created</Typography>
            <Typography level="body2" textColor="text.primary">
              5 August 2016
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ py: 2, px: 1 }}>
            <Button
              variant="plain"
              size="sm"
              endDecorator={<EditOutlinedIcon />}
            >
              Add a description
            </Button>
          </Box>
        </Sheet> */}
      </Layout.Root>
    </CssVarsProvider>
  );
}
