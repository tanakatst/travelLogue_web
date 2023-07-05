import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Copyright, LockOutlined } from "@mui/icons-material";
import Link from "next/link";
import FormField from "../../../../components/atoms/FormField";

const AuthenticateComponent = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });

  return (
    <Box sx={{ height: "calc(100% - 80px)" }}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ width: "100%",mb:4, fontWeight:'bold' }}>
          ログイン
        </Typography>
        {/* <Avatar sx={{ m: 1, backgroundColor:'prime.40' }}>
          <LockOutlined />
        </Avatar> */}
        <Box
          component="form"
          noValidate
          sx={{
            width: "100%",
            mt: 1,
          }}
        >
          <FormLabel>Emailアドレス</FormLabel>
          <FormField
            name="email"
            fullWidth={true}
            label="emailアドレス"
            required={true}
            placeholder="sample@gmail.com"
          />
          <FormLabel>パスワード</FormLabel>
          <FormField
            name="password"
            fullWidth={true}
            label="パスワード"
            required={true}
            placeholder="*****"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="パスワードを記憶"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "prime.60" }}
          >
            サインイン
          </Button>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthenticateComponent;
