
import React,{ReactNode} from 'react';
import Avatar from '@mui/joy/Avatar';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Sheet from '@mui/joy/Sheet';
import PieChart from '@mui/icons-material/PieChart';
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import { CssVarsProvider } from '@mui/joy';
import theme from '../../../styles/mui/theme';
import { deepmerge } from '@mui/utils';
import { joyTheme, muiTheme } from '../../styles/mui/JoytMaterialMixed';
import { Grid, Typography, chipClasses } from '@mui/material';
import { useLogout } from '../../queries/AuthQuery';
type Props = {
    children: ReactNode
}


const NavbarLayout = ({children, ...props}: Props) => {
    // ログアウトonclickで発火させる
    const logout = useLogout()
  return (
      <CssVarsProvider theme={(deepmerge(muiTheme, joyTheme))}>
        <Grid container xs={12}>
            <Grid xs={2} sx={{display:{xs:'none', md:'block'}}}>
                <Box sx={{ paddingTop:2, height:'100%',borderRadius:5 ,boxShadow:'9px 2px 2px #02485acf' }}>
                <Sheet
                    variant="solid"
                    color="info"
                    invertedColors
                    sx={(theme) => ({
                    borderRadius:5,
                    height:'100%',
                    minHeight:'100vh',
                    p: 2,
                    ml: -3,
                    my: -3,
                    // background: `linear-gradient(to top, '#3a9bb3', '#1fb6dc' 25%, '#07cdff' 75%)`,
                    background:'#3a9bb3'
                    })}
                >
                    <Box textAlign='center'>
                        <Typography variant='h6' fontFamily='cursive' >
                            TravelLogue
                        </Typography>
                    </Box>
                    <List
                    sx={{
                        '--List-item-radius': '8px',
                        '--List-gap': '4px',
                        flexGrow: 0,
                        minWidth: '100%',
                    }}
                    >
                    <Link href='/home'>
                        <ListItemButton selected>
                            <ListItemDecorator>
                            <Home />
                            </ListItemDecorator>
                            ホーム
                        </ListItemButton>
                    </Link>
                    <Link href='/travelPlan'>
                        <ListItemButton>
                            <ListItemDecorator>
                            <Tour/>
                            </ListItemDecorator>
                            旅行計画
                        </ListItemButton>
                    </Link>
                    <Link href='/mapPage'>
                        <ListItemButton>
                            <ListItemDecorator>
                                <Map />
                            </ListItemDecorator>
                                旅行記録マップ
                        </ListItemButton>
                    </Link>
                    <Link href='/profile'>
                        <ListItemButton>
                            <ListItemDecorator>
                            <PersonIcon />
                            </ListItemDecorator>
                            プロフィール
                        </ListItemButton>
                    </Link>
                    <ListItem nested>
                        <ListSubheader>Shortcuts</ListSubheader>
                        <List>
                        <ListItemButton>Tasks</ListItemButton>
                        <ListItemButton>Reports</ListItemButton>
                        <ListItemButton>Settings</ListItemButton>
                        </List>
                    </ListItem>
                    <Link href='/profile'>
                        <ListItemButton  onClick={()=> logout.mutate()}>
                            <ListItemDecorator>
                            <PersonIcon />
                            </ListItemDecorator>
                            ログアウト
                        </ListItemButton>
                    </Link>
                    </List>
                    <Card variant="soft" row sx={{ mt: 1, mb: 2 }}>
                    <CircularProgress value={35} determinate thickness={2} size="md">
                        35%
                    </CircularProgress>
                    <CardContent sx={{ ml: 2 }}>
                        <Typography fontSize="xs">Last update: 22/12/22</Typography>
                        <Chip
                        size="sm"
                        variant="outlined"
                        sx={{ alignSelf: 'flex-start', mt: 1 }}
                        >
                        Active
                        </Chip>
                    </CardContent>
                    </Card>
                    <Divider sx={{ mt: 'auto', mb: 2, mx: -2 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar src="/static/images/avatar/2.jpg" size="lg" />
                    <Typography sx={{ flex: 1 }}>Jerry Wilson</Typography>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    </Box>
                </Sheet>
                </Box>
            </Grid>
            <Grid xs={10}>
                <Box {...props}>
                    {children}
                </Box>
            </Grid>
        </Grid>
    </CssVarsProvider>
  );
}
export default NavbarLayout

// 旧バージョン↓

                            // import * as React from 'react';
                            // import { useLogout } from '../../queries/AuthQuery';
                            // import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
                            // import Box from '@mui/material/Box';
                            // import MuiDrawer from '@mui/material/Drawer';
                            // import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
                            // import Toolbar from '@mui/material/Toolbar';
                            // import List from '@mui/material/List';
                            // import CssBaseline from '@mui/material/CssBaseline';
                            // import Typography from '@mui/material/Typography';
                            // import Divider from '@mui/material/Divider';
                            // import IconButton from '@mui/material/IconButton';
                            // import MenuIcon from '@mui/icons-material/Menu';
                            // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
                            // import ChevronRightIcon from '@mui/icons-material/ChevronRight';
                            // import ListItem from '@mui/material/ListItem';
                            // import ListItemButton from '@mui/material/ListItemButton';
                            // import ListItemIcon from '@mui/material/ListItemIcon';
                            // import ListItemText from '@mui/material/ListItemText';
                            // import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
                            // import MapIcon from '@mui/icons-material/Map';
                            // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
                            // import LogoutIcon from '@mui/icons-material/Logout';
                            // import Link from 'next/link';
import mapPage from '../../../pages/mapPage';
import Link from 'next/link';
import { Home, LogoutOutlined, Map, Tour } from '@mui/icons-material';
import { borderRadius } from '@mui/system';


                            // type LayoutProps = Required<{
                            //     readonly children: React.ReactElement
                            //   }>

                            // const drawerWidth = 240;
                            // const openedMixin = (theme: Theme): CSSObject => ({
                            //   width: drawerWidth,
                            //   transition: theme.transitions.create('width', {
                            //     easing: theme.transitions.easing.sharp,
                            //     duration: theme.transitions.duration.enteringScreen,
                            //   }),
                            //   overflowX: 'hidden',
                            // });

                            // const closedMixin = (theme: Theme): CSSObject => ({
                            //   transition: theme.transitions.create('width', {
                            //     easing: theme.transitions.easing.sharp,
                            //     duration: theme.transitions.duration.leavingScreen,
                            //   }),
                            //   overflowX: 'hidden',
                            //   width: `calc(${theme.spacing(7)} + 1px)`,
                            //   [theme.breakpoints.up('sm')]: {
                            //     width: `calc(${theme.spacing(8)} + 1px)`,
                            //   },
                            // });

                            // const DrawerHeader = styled('div')(({ theme }) => ({
                            //   display: 'flex',
                            //   alignItems: 'center',
                            //   justifyContent: 'flex-end',
                            //   padding: theme.spacing(0, 1),
                            //   // necessary for content to be below app bar
                            //   ...theme.mixins.toolbar,
                            // }));

                            // interface AppBarProps extends MuiAppBarProps {
                            //   open?: boolean;
                            // }

                            // const AppBar = styled(MuiAppBar, {
                            //   shouldForwardProp: (prop) => prop !== 'open',
                            // })<AppBarProps>(({ theme, open }) => ({
                            //   zIndex: theme.zIndex.drawer + 1,
                            //   transition: theme.transitions.create(['width', 'margin'], {
                            //     easing: theme.transitions.easing.sharp,
                            //     duration: theme.transitions.duration.leavingScreen,
                            //   }),
                            //   ...(open && {
                            //     marginLeft: drawerWidth,
                            //     width: `calc(100% - ${drawerWidth}px)`,
                            //     transition: theme.transitions.create(['width', 'margin'], {
                            //       easing: theme.transitions.easing.sharp,
                            //       duration: theme.transitions.duration.enteringScreen,
                            //     }),
                            //   }),
                            // }));

                            // const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
                            //   ({ theme, open }) => ({
                            //     width: drawerWidth,
                            //     flexShrink: 0,
                            //     whiteSpace: 'nowrap',
                            //     boxSizing: 'border-box',
                            //     ...(open && {
                            //       ...openedMixin(theme),
                            //       '& .MuiDrawer-paper': openedMixin(theme),
                            //     }),
                            //     ...(!open && {
                            //       ...closedMixin(theme),
                            //       '& .MuiDrawer-paper': closedMixin(theme),
                            //     }),
                            //   }),
                            // );

                            // const NavbarLayout=()=> {

                            //     const theme = useTheme();
                            //     const [open, setOpen] = React.useState(false);
                            //     const handleDrawerOpen = () => {
                            //         setOpen(true);
                            //     };

                            //     const handleDrawerClose = () => {
                            //         setOpen(false);
                            //     };

                            //     // ログアウト時のイベント
                            //     const logout = useLogout()

                            //     return (
                            //         <Box sx={{ display: 'flex' }}>
                            //         <CssBaseline />
                            //         <AppBar position="fixed" open={open}>
                            //             <Toolbar>
                            //             <IconButton
                            //                 color="inherit"
                            //                 aria-label="open drawer"
                            //                 onClick={handleDrawerOpen}
                            //                 edge="start"
                            //                 sx={{
                            //                 marginRight: 5,
                            //                 ...(open && { display: 'none' }),
                            //                 display:{xs:'none',sm:'block '}
                            //                 }}
                            //             >
                            //                 <MenuIcon />
                            //             </IconButton>
                            //             <Typography variant="h6" noWrap component="div">
                            //                 TraveLogue
                            //             </Typography>
                            //             </Toolbar>
                            //         </AppBar>

                            //         <Drawer variant="permanent"  open={open} sx={{display:{xs:'none',sm:'block'}}} >
                            //             <Box>
                            //                 <DrawerHeader >
                            //                     <IconButton onClick={handleDrawerClose}>
                            //                         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            //                     </IconButton>
                            //                 </DrawerHeader>
                            //                 <Divider />
                            //                 <List>
                            //                     <ListItem  disablePadding sx={{ display: 'block',borderRadius:2,":hover":{backgroundColor:'#5cd1ef',color:'#fff'} }}>
                            //                         <Link href='/home'>
                            //                             <ListItemButton
                            //                                 sx={{
                            //                                     minHeight: 48,
                            //                                     justifyContent: open ? 'initial' : 'center',
                            //                                     px: 2.5,
                            //                                 }}
                            //                                 >
                            //                                 <ListItemIcon
                            //                                 sx={{
                            //                                     minWidth: 0,
                            //                                     mr: open ? 3 : 'auto',
                            //                                     justifyContent: 'center',
                            //                                 }}
                            //                                 >
                            //                                 <InsertPhotoIcon />
                            //                                 </ListItemIcon>
                            //                                 <ListItemText primary='旅ログ' sx={{ opacity: open ? 1 : 0 }} />
                            //                             </ListItemButton>
                            //                         </Link>
                            //                     </ListItem>
                            //                 </List>
                            //                 <List>
                            //                     <ListItem  disablePadding sx={{ display: 'block', borderRadius:2,":hover":{backgroundColor:'#5cd1ef',color:'#fff'} }} >
                            //                     <Link href='/mapPage'>
                            //                         <ListItemButton
                            //                             sx={{
                            //                             minHeight: 48,
                            //                             justifyContent: open ? 'initial' : 'center',
                            //                             px: 2.5,
                            //                         }}
                            //                         >
                            //                             <ListItemIcon
                            //                             sx={{
                            //                                 minWidth: 0,
                            //                                 mr: open ? 3 : 'auto',
                            //                                 justifyContent: 'center',
                            //                             }}
                            //                             >
                            //                                 <MapIcon />
                            //                             </ListItemIcon>
                            //                             <ListItemText primary='経験値マップ' sx={{ opacity: open ? 1 : 0 }} />
                            //                         </ListItemButton>
                            //                     </Link>
                            //                     </ListItem>
                            //                 </List>
                            //                 <List>
                            //                     <ListItem  disablePadding sx={{ display: 'block', borderRadius:2,":hover":{backgroundColor:'#5cd1ef',color:'#fff'} }} >
                            //                     <Link href='/travelPlan'>
                            //                         <ListItemButton
                            //                             sx={{
                            //                             minHeight: 48,
                            //                             justifyContent: open ? 'initial' : 'center',
                            //                             px: 2.5,
                            //                         }}
                            //                         >
                            //                             <ListItemIcon
                            //                             sx={{
                            //                                 minWidth: 0,
                            //                                 mr: open ? 3 : 'auto',
                            //                                 justifyContent: 'center',
                            //                             }}
                            //                             >
                            //                                 <MapIcon />
                            //                             </ListItemIcon>
                            //                             <ListItemText primary='旅行計画リスト' sx={{ opacity: open ? 1 : 0 }} />
                            //                         </ListItemButton>
                            //                     </Link>
                            //                     </ListItem>
                            //                 </List>
                            //                 <List>
                            //                     <ListItem  disablePadding sx={{ display: 'block',borderRadius:2,":hover":{backgroundColor:'#5cd1ef',color:'#fff'} }}>
                            //                     <Link href='/profile'>
                            //                         <ListItemButton
                            //                             sx={{
                            //                                 minHeight: 48,
                            //                                 justifyContent: open ? 'initial' : 'center',
                            //                                 px: 2.5,
                            //                             }}
                            //                             >
                            //                             <ListItemIcon
                            //                             sx={{
                            //                                 minWidth: 0,
                            //                                 mr: open ? 3 : 'auto',
                            //                                 justifyContent: 'center',
                            //                             }}
                            //                             >
                            //                             <AccountCircleIcon />
                            //                             </ListItemIcon>
                            //                             <ListItemText primary='プロフィール' sx={{ opacity: open ? 1 : 0 }} />
                            //                         </ListItemButton>
                            //                     </Link>
                            //                     </ListItem>
                            //                 </List>
                            //                 <Divider />
                            //                 <List>
                            //                     <ListItem disablePadding sx={{ display: 'block' }}>
                            //                     <ListItemButton
                            //                         sx={{
                            //                             minHeight: 48,
                            //                             justifyContent: open ? 'initial' : 'center',
                            //                             px: 2.5,
                            //                         }}
                            //                         onClick={()=> {
                            //                             logout.mutate()}
                            //                         }
                            //                         >
                            //                         <ListItemIcon
                            //                         sx={{
                            //                             minWidth: 0,
                            //                             mr: open ? 3 : 'auto',
                            //                             justifyContent: 'center',
                            //                         }}
                            //                         >
                            //                             <LogoutIcon />
                            //                         </ListItemIcon>
                            //                         <ListItemText primary='ログアウト' sx={{ opacity: open ? 1 : 0 }} />
                            //                     </ListItemButton>
                            //                     </ListItem>
                            //                 </List>
                            //             </Box>
                            //         </Drawer>
                            //         {/* <Box>
                            //             {children}
                            //         </Box> */}
                            //         </Box>
                            //     );
                            // }
                            // export default NavbarLayout
