
import Link from 'next/link';
// import NavbarLayout from '~/components/Navigation/NavbarLayout';
import style from '../src/styles/scss/moduleCss/index.module.scss'
import axios from 'axios';
import { NextPage } from 'next/types';
import IndexNav from '../src/components/Navigation/IndexNavbar';
import RegisterModal from '../src/components/pagesComponent/index/RegisterModal';
import Example from '../src/components/pagesComponent/index/example';
import { Box, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
const Home: NextPage = () => {



  return (
      <>
        <Box>
            <Box className={style.main} style={{height:'100vh'}}>
                <IndexNav />
                <Box style={{position:'absolute', width:'100%',textAlign:'center', margin:'0 ,auto'}}>
                    <Container  sx={{ width:'100%',textAlign:'center', margin:'0 ,auto'}}>
                        <Box sx={{height:500, color:'#fff', width:'100%', paddingTop:'9%'}} >
                            <Typography variant='h4' style={{textAlign: 'center' , width:'100%', fontWeight:'bold'}}>TravelLogue</Typography>
                            <Typography variant='h6'  sx={{textAlign: 'center', paddingBottom:4, zIndex:1,}}>
                                日本国内での旅行をより楽しいものにするために、旅ログを書いて、日本一周を残そう
                            </Typography>
                            <RegisterModal />
                        </Box>

                    </Container>
                </Box>
                <Stack direction='row' justifyContent='center' sx={{marginTop:'67vh'}}>
                    <Box width='60%' height='40vh' sx={{background:'rgba(74,112,165,1) !important', borderRadius:'10px', zIndex:1}}>
                        <Container maxWidth='lg' sx={{height:'80%'}}>
                            <Box sx={{paddingY:'4%'}}>
                            </Box>
                        </Container>
                    </Box>
                </Stack>
            </Box>
        </Box>
            <Example/>
      </>

  )
}

export default Home;
