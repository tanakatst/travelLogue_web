import React from "react";
import { Avatar, Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import {
  Card,
  CardOverflow,
  Button as JoyButton,
  Typography as JoyTypography,
  IconButton as JoyIconButton,
} from "@mui/joy";
import { Place, Height } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
const PostCard = () => {
  const imageURL =
    "https://img.freepik.com/free-photo/yasaka-pagoda-and-sannen-zaka-street-in-kyoto-japan_335224-41.jpg";
  ("");

  const [hovered, setHovered] = React.useState(false);
  const theme = useTheme().palette;
  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
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
                <Typography fontWeight="bold">京都旅行</Typography>
                <Stack direction="row" alignItems="center" mt={0.3}>
                  <Place />
                  <JoyTypography level="body3">京都</JoyTypography>
                </Stack>
                <JoyTypography level="body3" mt={0.5}>
                  Added 25 May 2011
                </JoyTypography>
              </Box>
              <JoyIconButton variant="plain" color="neutral">
                <Avatar />
              </JoyIconButton>
            </Box>
            <Box display="flex" justifyContent="end">
              <JoyButton variant="plain" size="sm">
                詳細
              </JoyButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default PostCard;
