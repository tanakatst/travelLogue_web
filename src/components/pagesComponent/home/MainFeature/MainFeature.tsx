import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import style from "../../../styles/scss/home.module.scss";
import { CssVarsProvider } from "@mui/joy";
import { deepmerge } from "@mui/utils";
import { joyTheme, muiTheme } from "../../../../styles/mui/JoytMaterialMixed";
import Sheet from "@mui/joy/Sheet";
export default function MainFeature() {
  const color = "#";
  return (
    <CssVarsProvider theme={deepmerge(muiTheme, joyTheme)}>
      <Grid container borderRadius={5}>
        <Grid item md={12}>
          <Sheet
            variant="soft"
            // color='primary'
            sx={{
              borderRadius: 15,
              height: "220px",
              width: "88%",
              margin: "0 auto",
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              sx={{ textAlign: "center", fontWeight: "bold" }}
              gutterBottom
            >
              TravelLogueは、あなたの旅行をより楽しく充実させるためのハブです
            </Typography>
          </Sheet>
        </Grid>
      </Grid>
    </CssVarsProvider>
  );
}
