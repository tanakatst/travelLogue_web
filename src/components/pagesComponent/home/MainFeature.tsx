import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import style from '../../../styles/scss/home.module.scss';
import { CssVarsProvider } from '@mui/joy';
import { deepmerge } from '@mui/utils';
import { joyTheme, muiTheme } from '../../../styles/mui/JoytMaterialMixed';
import Sheet from '@mui/joy/Sheet';
export default function MainFeature() {
    const color = '#'
  return (
    <CssVarsProvider theme={deepmerge(muiTheme, joyTheme)}>
        <Grid container  borderRadius={5}>
        <Grid item md={12}>
            <Sheet
            variant='soft'
            // color='primary'
            sx={{
                borderRadius:15,
                width:'98%',
                margin:'0 auto',
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
            }}
            >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                旅ログ
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
                旅行でいった場所や、都道府県、思った事を記して、記録をしよう
            </Typography>
            <Link variant="subtitle1" href="#">
                見本
            </Link>
            </Sheet>
        </Grid>
        </Grid>
    </CssVarsProvider>
  );
}
