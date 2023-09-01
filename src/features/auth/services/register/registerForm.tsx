import React from "react";
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
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Copyright, LockOutlined } from "@mui/icons-material";
import Link from "next/link";
import FormField from "../../../../components/atoms/FormField";
import AuthenticateTextFieldMolecule from "../../components/AuthenticateMolecules";
import { ContainedSubmitButtonAtom } from "../../../../components/atoms/button";
import { LoginParams } from "../../types/Authenticate";
import { useLogin, useRegister } from "../../../../queries/AuthQuery";
import { pt } from "date-fns/locale";
import { RegisterParams } from "../../../../types/User";

// 新規登録型定義
type RegisterFormParams = {
  username: string;
  email: string;
  password: string;
  confirmPass: string;
};

const validationRules = {
  username: {
    required: "名前を入力してください。",
    minLength: {
      value: 2,
      message: "名前は2文字以上、15文字以内で入力してください",
    },
    maxLength: {
      value: 40,
      message: "名前は2文字以上、40文字以内で入力してください",
    },
  },
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
  confirmPass: {
    required: "確認用パスワードを入力してください。",
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

const RegisterForm = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPass: "",
    },
  });
  const register = useRegister();
  const onSubmit: SubmitHandler<RegisterFormParams> = async (
    data: RegisterFormParams
  ) => {
    const params: RegisterParams = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    register.mutate(params);
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
          height: "96%",
          px: 4,
        }}
      >
        <Box></Box>
        <Typography
          component="h1"
          variant="h5"
          sx={{ width: "100%", pb: 2, fontWeight: "bold" }}
        >
          新規登録
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
            name="username"
            fullWidth={true}
            label="ユーザー名"
            rule={validationRules.username}
            control={control}
            required={true}
            placeholder="sample@gmail.com"
            hasLabel={true}
            py={3}
          />
          <AuthenticateTextFieldMolecule
            name="email"
            fullWidth={true}
            label="email"
            rule={validationRules.email}
            control={control}
            required={true}
            placeholder="sample@gmail.com"
            hasLabel={true}
            py={3}
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
            py={3}
          />
          <AuthenticateTextFieldMolecule
            name="confirmPass"
            fullWidth={true}
            label="パスワード確認"
            rule={validationRules.confirmPass}
            required={true}
            control={control}
            placeholder="sample@gmail.com"
            hasLabel={true}
            py={3}
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
          <Stack direction="column" justifyContent="space-between" pt={2}>
            <Stack direction="row" height="100%">
              <ContainedSubmitButtonAtom
                fullWidth
                label="すでにアカウントをお持ちの方はこちら"
                sx={{
                  height: "100%",
                  width: "45%",
                  margin: "auto",
                  fontSize: "0.84rem",
                  fontWeight: "bold",
                  backgroundColor: "second.60",
                  "&:hover": {
                    backgroundColor: "second.80",
                  },
                }}
              />
              <ContainedSubmitButtonAtom
                fullWidth
                label="新規登録"
                sx={{
                  height: "100%",
                  width: "45%",
                  margin: "auto",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  backgroundColor: "prime.60",
                  "&:hover": {
                    backgroundColor: "prime.70",
                  },
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
