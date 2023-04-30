import * as React from "react";
import {
  CssVarsProvider,
  useColorScheme as useJoyColorScheme,
} from "@mui/joy/styles";
import {
  Grid,
  useColorScheme as useMaterialColorScheme,
  Box as MuiBox,
} from "@mui/material";
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
import { useTheme } from "../src/hooks/context/themeContext";
import { useTheme as materialTheme } from "@mui/material";
import RightBar from "../src/components/pagesComponent/home/RightBar";
import { Add } from "@mui/icons-material";
import CreatePost from "../src/components/pagesComponent/home/createPost/CreatePost";
import { useQuery } from "react-query";
import { useUser } from "../src/queries/AuthQuery";
import { getUser } from "../src/api/AuthApi";
import { useGetPosts } from "../src/queries/PostQuery";
// import CreatePost from "../src/components/pagesComponent/home/createPost";

function ColorSchemeToggle() {
  const { theme, toggleColorMode } = useTheme();
  const { mode, setMode: setMaterialMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();
  const [mounted, setMounted] = React.useState(false);
  const muiTheme = materialTheme().palette;
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <IconButton
        sx={{ color: muiTheme.primary.contrastText }}
        size="sm"
        variant="outlined"
      />
    );
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      sx={{ color: muiTheme.primary.contrastText }}
      onClick={() => {
        toggleColorMode();
        if (theme === "light") {
          setMaterialMode("dark");
          setJoyMode("dark");
        } else {
          setMaterialMode("light");
          setJoyMode("light");
        }
      }}
    >
      {theme === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = materialTheme().palette;
  const user = useUser();
  const posts = useGetPosts().data?.data;

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
                sx={{ color: theme.primary.contrastText, cursor: "pointer" }}
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
                  sx={{ color: theme.text.secondary }}
                >
                  /
                </Typography>
              </IconButton>
            }
            sx={{
              flexBasis: "500px",
              backgroundColor: theme.primary.contrastText,
              color: "black",
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
            {/* <CreatePost /> */}
            <IconButton
              size="sm"
              variant="outlined"
              sx={{ display: { xs: "inline-flex", sm: "none" } }}
            >
              <SearchRoundedIcon />
            </IconButton>
            <CreatePost />
            <IconButton
              size="sm"
              variant="outlined"
              sx={{ color: theme.primary.contrastText }}
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
              {posts?.map((post: any, key: any) => (
                <PostCard
                  id={post.id}
                  title={post.title}
                  prefecture={post.prefecture}
                  place_name={post.place_name}
                />
              ))}
            </Grid>
          </Box>
        </Layout.Main>
        <RightBar />
      </Layout.Root>
    </CssVarsProvider>
  );
}
