import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Place, Height } from "@mui/icons-material";
// import Avatar from "@mui/material";

const PostCard = ({
  id,
  title,
  prefecture,
  place_name,
}: {
  id: number;
  title: string;
  prefecture: string;
  place_name: string;
}) => {
  const imageURL =
    "https://img.freepik.com/free-photo/yasaka-pagoda-and-sannen-zaka-street-in-kyoto-japan_335224-41.jpg";
  ("");

  // タイトル表示での最大文字列指定
  const maxChars = 10;
  const truncatedTitle = title.slice(0, maxChars);
  const [hovered, setHovered] = React.useState(false);
  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // cursor: "pointer",
          "&:hover": {
            transform: "scale(1.04)",
            transition: "transform 0.6s ease-in-out",
          },
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          src={imageURL}
          alt=""
          style={{
            borderRadius: "20px",
            width: "100%",
            maxHeight: "400px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            paddingBottom: 1,
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            minHeight="40%"
            width="90%"
            padding="4%"
            paddingLeft={3}
            bgcolor="background.paper"
            sx={{
              position: "absolute",
              top: "70%",
              display: "block",
              borderRadius: "20px",
              boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight="bold">
                  {title.length > maxChars ? truncatedTitle : title}
                  {title.length > maxChars && "..."}
                </Typography>
                <Stack direction="row" alignItems="center" mt={0.3}>
                  <Place />
                  <Typography>{place_name}</Typography>
                </Stack>
                <Typography mt={0.5}>Added 25 May 2011</Typography>
              </Box>
              {/* <IconButton>
                <Avatar />
              </IconButton> */}
            </Box>
            <Box display="flex" justifyContent="end">
              <Button>詳細</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default PostCard;
