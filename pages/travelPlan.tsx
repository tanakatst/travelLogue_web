import { Container, Box, Card, Typography, Grid } from '@mui/material';
import React from 'react';
import NavbarLayout from '../src/components/Navigation/NavbarLayout';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/joy';
import PeoplePlan from '../src/components/pagesComponent/travel_plan/peoplePlan';
import Link from 'next/link';
import { CssVarsProvider, Sheet } from '@mui/joy';
import theme from '../styles/mui/theme';
import { deepmerge } from '@mui/utils';
import { joyTheme, muiTheme } from '../src/styles/mui/JoytMaterialMixed';

const travelPlan = () => {
    return (
        <Box>
            <NavbarLayout>
                <CssVarsProvider theme={deepmerge(joyTheme, muiTheme)}>
                    <Container maxWidth='lg' sx={{mt:3, height:'100vh'}}>
                        <Sheet  variant='soft' sx={{height:'30%', boxShadow:'9px 9px 2px #02485acf',borderRadius:5}} >
                            <Card sx={{height:'100%', backgroundColor:'#46abc4bd', textAlign:'center'}}>
                                <Typography variant='h6' color='#fff' fontWeight='bold' textAlign='center' marginY='50px'>
                                    旅行の計画簡単に立てて共有しよう
                                </Typography>
                                <Link href='/makePlan'>
                                    <Button variant='soft' color='primary' sx={{boxShadow:'3px 3px 2px #02485acf'}}>
                                        旅行計画をする
                                    </Button>
                                </Link>

                            </Card>


                        </Sheet>
                        <Sheet  variant='soft' sx={{height:'60%', boxShadow:'9px 9px 2px #02485acf',borderRadius:5,marginTop:6}} >
                            <Card sx={{height:'100%', textAlign:'center'}}>
                            <Typography variant='h5'  textAlign='center' >
                                    みんなの旅行プラン
                                </Typography>
                                <PeoplePlan />
                            </Card>
                        </Sheet>
                    </Container>
                </CssVarsProvider>
            </NavbarLayout>
        </Box>
    )
}

export default travelPlan;
