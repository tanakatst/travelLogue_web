import React, {ChangeEvent, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, SubmitHandler,  Controller } from 'react-hook-form';
import { register } from '../../../api/AuthApi';
import { useRouter } from 'next/router';

type RegisterParams = {
    username: string
    email:string
    password:string
    confirmPass:string
}
type SubmitParams = {
    username: string
    email:string
    password:string
}

const validationRules = {
    username:{
        required: '名前を入力してください',
        minLength:{value: 2, message:'名前は2文字以上、15文字以内で入力してください' },
        maxLength:{value:40 , message:'名前は2文字以上、40文字以内で入力してください'}
    },
    email:{
        required: 'メールアドレスを入力してください。',
        maxLength:{value:255, message:'メールアドレスは255文字以上で入力してください。'},
        pattern:{value:/^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/, message:'入力形式がメールアドレスではありません。'},
    },
    password:{
        required:'パスワードを入力してください。',
        minLength:{value:8, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
        maxLength:{value:24, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
        pattern:{ value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\-]{8,24}$/, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
    },
    confirmPass:{
        required:'確認用パスワードを入力してください。',
        minLength:{value:8, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
        maxLength:{value:24, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
        pattern:{ value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\-]{8,24}$/, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
    }
}

const RegisterModal= ()=> {
    // 登録後、ページを飛ばす為のルーター
    const router = useRouter();

    // モーダルの機能
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
//
// 新規登録機能
  const {control, handleSubmit,trigger,getValues} = useForm(
      {
          defaultValues:{
            username: '',
            email:'',
            password:'',
            confirmPass:''
          }
      }
  )


  const onSubmit:SubmitHandler<RegisterParams> = (data)=>{
      register(data);
      setOpen(false);
      router.push('/home');

  }
    return (
      <>
      <div style={{margin:'auto',textAlign:'center', alignItems:'center' }}>

        <Button variant='contained' sx={{ mx:'auto', my:'auto', backgroundColor:'bgColor.blue'}}  onClick={handleClickOpen}>
                新規登録
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>アカウント新規登録</DialogTitle>
            <DialogContent>
            <DialogContentText>
                メールアドレスとパスワードを入力してください
            </DialogContentText>
            <Controller
                name='username'
                control={control}
                rules={validationRules.username}
                render={({field, fieldState})=> (
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="ユーザー名"
                    type="username"
                    fullWidth
                    variant="standard"
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
               // {required: })
                />
                )}
            />
            <Controller
                name='email'
                control={control}
                rules={validationRules.email}
                render={({field, fieldState})=>(
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="メールアドレス"
                    type="email"
                    fullWidth
                    variant="standard"
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    // {...register('email')}
                />
                )}
            />
            <Controller
            name='password'
            control={control}
            rules={{
                required:'パスワードを入力してください。',
                minLength:{value:8, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
                maxLength:{value:24, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
                pattern:{ value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\-]{8,24}$/, message:'パスワードは半角英数字を最低1つずつ含めた8文字以上24文字以内（記号ハイフンのみ）で入力してください。'},
                validate:{message: value => value === getValues('confirmPass')? undefined : 'パスワードが確認用パスワードと一致しません。' }
            }}
            render = {({field,fieldState})=>(
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="パスワード"
                    type="password"
                    fullWidth
                    variant="standard"
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                                     // {...register('password')}
                />
            )}
            />
            <Controller
            name='confirmPass'
            control={control}
            rules={validationRules.confirmPass}
            render={({field,fieldState})=>(
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="パスワード確認"
                    type="password"
                    fullWidth
                    variant="standard"
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    // {...register('confirmPass')}
                />

            )}
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>キャンセル</Button>
                <Button onClick={handleSubmit(onSubmit)}>登録</Button>
            </DialogActions>
        </Dialog>
    </div>

    </>
  );
}

export default RegisterModal;
