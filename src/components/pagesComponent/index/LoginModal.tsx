import React, {ChangeEvent, useState} from 'react';
import { useRouter } from 'next/router';
import { useLogin } from '../../../queries/AuthQuery';
import Button from '@mui/material/Button';
import {CssVarsProvider, ModalClose, ModalDialog} from '@mui/joy';
import {Sheet} from '@mui/joy'
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link'
import { deepmerge } from '@mui/utils';
import { muiTheme } from '../../../styles/mui/JoytMaterialMixed';
import { joyTheme } from '../../../styles/mui/JoytMaterialMixed';
import Dialog from '@mui/material/Dialog'
import { Box, DialogContent, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Height } from '@mui/icons-material';



  // slide animation
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const LoginModal= ()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
    const login = useLogin();
    // stateの変更機能

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const changeEmail = (e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
    }
    const changePassword = (e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
    }

    const handleLogin =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        login.mutate({email, password})
        setOpen(false);
    }
  return (
    <>
      <Button variant='contained' sx={{backgroundColor: 'bgColor.blue'}} onClick={handleClickOpen}>
        ログイン
      </Button>
      <Dialog 
      open={open} 
      onClose={handleClose} 
      keepMounted
      TransitionComponent={Transition}
      sx={{backgroundColor:'transparent', borderRadius:20}}
      >
        <Box sx={{backgroundColor:'bgColor.blue', height:'70vh', padding:'5%'}}>
          <DialogTitle sx={{fontWeight:'bold', textAlign:'center', color:'textColor.white'}}>
            ログイン
          </DialogTitle>
          <DialogContent sx={{color: 'textColor.white'}}>
            メールアドレスとパスワードを入力してください
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
}

export default LoginModal;
