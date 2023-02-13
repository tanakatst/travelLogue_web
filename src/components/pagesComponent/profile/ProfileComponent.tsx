import React from 'react';
import { ListItem, ListItemAvatar, Avatar, TextField, ListItemButton, Divider, Typography, Button } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material';
import Email from '@mui/icons-material/Email';
import DriveFileRenameOutline from '@mui/icons-material/DriveFileRenameOutline';
import { Password } from '@mui/icons-material';



const ProfileComponent = ({name, email, changeState}:{name:string | undefined, email: string |undefined , changeState: boolean}) =>{
    const profileName = (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <DriveFileRenameOutline/>
                </Avatar>
            </ListItemAvatar>
            {name?
            <Typography>{name}</Typography>
            :null
            }
        </ListItem>
    )
    const profileEmail = (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Email />
                </Avatar>
            </ListItemAvatar>
            {email?
            <Typography>{email}</Typography>
            :null
            }
        </ListItem>

    )
    const profilePassword = (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Password/>
                </Avatar>
            </ListItemAvatar>
        <Typography>パスワードを忘れてしまった方は、「プロフィールを変更」から変えてください。</Typography>
        </ListItem>
    )
    const changeProfileName = (
        <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <DriveFileRenameOutline/>
                        </Avatar>
                    </ListItemAvatar>
                        {name?
                        <TextField
                        fullWidth
                        id="outlined-helperText"
                        label='username'
                        defaultValue={name}
                        helperText="Some important text"
                        />
                        :null
                        }
        </ListItem>
    )
    const changeProfileEmail = (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Email />
                </Avatar>
            </ListItemAvatar>
            {email?
            <TextField
            fullWidth
            id="outlined-helperText"
            label='email'
            defaultValue={email}
            helperText="Some important text"
            />
            :null
            }
        </ListItem>

    )
    const changeProfilePassword = (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Password/>
                </Avatar>
            </ListItemAvatar>
            <ListItemButton color="#0e38b7">パスワードを変更する場合はこちらから</ListItemButton>
        </ListItem>
    )

    return (
        <>
        {changeState ?
        <>
            {changeProfileName}
            <Divider />
            {changeProfileEmail}
            <Divider />
            {changeProfilePassword}
            <Button>変更する</Button>
        </>
        :
        <>
            {profileName}
            <Divider/>
            {profileEmail}
            <Divider />
            {profilePassword}
        </>
    }

        </>
    )
}




export {ProfileComponent};
