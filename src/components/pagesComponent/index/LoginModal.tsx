import React, {ChangeEvent, useState} from 'react';
import { useRouter } from 'next/router';
import { useLogin } from '../../../queries/AuthQuery';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
    <div>
            <Button   variant='contained' sx={{backgroundColor:'bgColor.blue'}} onClick={handleClickOpen}>
                ログイン
            </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ログイン</DialogTitle>
        <DialogContent>
          <DialogContentText>
            メールアドレスとパスワードを入力してください
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={changeEmail}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={changePassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleLogin}>ログイン</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginModal;
