import React,{useEffect, useState} from "react";
import {Container,Box, Typography,Paper, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, List, Button, TextField, Input, ListItemButton } from "@mui/material";
import { Stack } from "@mui/system";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import { useUser } from "../src/queries/AuthQuery";
import { User } from '../src/types/User';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { ProfileComponent } from "../src/components/pagesComponent/profile/ProfileComponent";
const Profile = ()=>{
    // プロフィール変更処理
    const [change, setChange] = useState(false)
    const changeProfile =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        setChange(!change);
    }
    const [user,setUser] = useState<User>()
    const data = useUser().data
    const getUser = ()=>{
        setUser(data);
    }
    useEffect(()=>{
        getUser()
    },[data])
    return(
        <>
            <NavbarLayout>
                <Container maxWidth="sm" sx={{height:600, marginTop:15}}>
                    <Box textAlign='center'>
                        <Stack>
                            <Paper elevation={3} sx={{height:600}} >
                                <Typography variant="h5" sx={{textAlign:'center', paddingTop:4,paddingBottom:3}}>
                                    プロフィール
                                </Typography>
                                <Avatar sx={{margin:'0 auto', marginBottom:2}} />
                                <Button onClick={e => changeProfile(e)}>
                                    プロフィールを変更する
                                </Button>
                                <Box pt={4}>
                                    <List sx={{width: '100%',
                                                margin:'auto',
                                                maxWidth: 360,
                                                bgcolor: 'background.paper',}}
                                    >
                                        <ProfileComponent name={user?.name} email={user?.email} changeState = {change}/>
                                    </List>
                                </Box>
                            </Paper>
                        </Stack>
                    </Box>
                </Container>
            </NavbarLayout>

        </>
    )

}

export default Profile
