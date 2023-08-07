import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
  Stack,
} from "@mui/material";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Copyright, LockOutlined } from "@mui/icons-material";
import Link from "next/link";
import FormField from "../../../../components/atoms/FormField";
import AuthenticateTextFieldMolecule from "../../components/AuthenticateMolecules";
import { ContainedSubmitButtonAtom } from "../../../../components/atoms/button";
import { LoginParams } from "../../types/Authenticate";
import { useLogin } from "../../../../queries/AuthQuery";
import { pt } from "date-fns/locale";

const validationRules = {
  email: {
    required: "メールアドレスを入力してください。",
    maxLength: {
      value: 255,
      message: "メールアドレスは255文字以上で入力してください。",
    },
    pattern: {
      value:
        /^\s*[\w\-.+]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*\.[a-zA-Z]{2,}\s*$/,
      message: "入力形式がメールアドレスではありません",
    },
  },
  password: {
    required: "パスワードを入力してください。",
    minLength: {
      value: 8,
      message:
        "パスワードは全角・半角英数字を最低1つずつ含めた8文字以上24文字以内（記号はハイフンのみ）で入力してください。",
    },
    maxLength: {
      value: 24,
      message:
        "パスワードは全角・半角英数字を最低1つずつ含めた8文字以上24文字以内（記号はハイフンのみ）で入力してください。",
    },
    pattern: {
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\-]{8,24}$/,
      message:
        "パスワードは全角・半角英数字を最低1つずつ含めた8文字以上24文字以内（記号はハイフンのみ）で入力してください。",
    },
  },
};
const AuthenticateComponent = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const login = useLogin();
  const onSubmit: SubmitHandler<LoginParams> = async (data: LoginParams) => {
    const params: LoginParams = {
      email: data.email,
      password: data.password,
    };

    login.mutate(params);
  };

  return (
    <Box
      sx={{
        height: "calc(100% - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "90%",
          px: 4,
        }}
      >
        <Box></Box>
        <Typography
          component="h1"
          variant="h5"
          sx={{ width: "100%", mb: 4, fontWeight: "bold" }}
        >
          ログイン
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <AuthenticateTextFieldMolecule
            name="email"
            fullWidth={true}
            label="email"
            rule={validationRules.email}
            control={control}
            required={true}
            placeholder="sample@gmail.com"
            hasLabel={true}
            py={7}
          />
          <AuthenticateTextFieldMolecule
            name="password"
            fullWidth={true}
            label="パスワード"
            rule={validationRules.password}
            required={true}
            control={control}
            placeholder="sample@gmail.com"
            hasLabel={true}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ px: "10px" }}
          >
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="パスワードを記憶"
            />

            <Link href="register">パスワードをお忘れの方</Link>
          </Stack>
          <Stack direction="column" justifyContent="space-between" pt={8}>
            <ContainedSubmitButtonAtom
              fullWidth
              label="ログイン"
              sx={{
                height: "30%",
                width: "80%",
                margin: "auto",
                fontSize: "1.2rem",
                fontWeight: "bold",
                backgroundColor: "prime.60",
                "&:hover": {
                  backgroundColor: "prime.70",
                },
              }}
            />
            <ContainedSubmitButtonAtom
              fullWidth
              label="まだアカウントを持っていない方はこちら"
              sx={{
                height: "30%",
                width: "80%",
                margin: "auto",
                fontSize: "1.2rem",
                fontWeight: "bold",
                backgroundColor: "second.60",
                "&:hover": {
                  backgroundColor: "second.80",
                },
              }}
            />
            <ContainedSubmitButtonAtom
              fullWidth
              label="googleアカウントでログイン"
              sx={{
                height: "30%",
                width: "80%",
                margin: "auto",
                color: "gray",
                fontSize: "1.2rem",
                backgroundColor: "whitesmoke",
                "&:hover": {
                  backgroundColor: "whitesmoke",
                },
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthenticateComponent;
