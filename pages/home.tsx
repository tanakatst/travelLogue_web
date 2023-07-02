import { Box, Drawer, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import Header from "../src/components/Navigation/Header/Header";
import Navigation from "../src/layouts/NavbarLayout";
import PostCard from "../src/components/pagesComponent/home/myPost/PostCard";
import { title } from "process";
import MainFeature from "../src/components/pagesComponent/home/MainFeature/MainFeature";
import { pt } from "date-fns/locale";
import ShowPeoplePost from "../src/features/home/services/showPost/showPeoplePost";
import { useGetPosts, usePost } from "../src/queries/PostQuery";
import { Post, image } from "../src/features/home/types/Post";
import { post } from "../src/api/PostApi";

type Posts = Post[];
const Home = () => {
  const [open, setOpen] = useState(true);
  const user_post: Posts = useGetPosts()?.data?.data;
  return (
    <Box width="100%" height="100vh">
      <Stack width="100%" height="100%" direction="row">
        <Navigation />
        <Box sx={{ p: 2, width: "80%" }}>
          {/* <MainFeature /> */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            rowGap={10}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ width: "88%", p: { xs: 3, md: 6 } }}
          >
            {user_post?.map((post, index) => {
              return (
                <PostCard
                  key={index}
                  id={post?.id}
                  title={post?.title}
                  prefecture={post?.prefecture}
                  place_name={post?.place_name}
                />
              );
            })}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
