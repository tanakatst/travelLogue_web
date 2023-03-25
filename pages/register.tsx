import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { register } from "../src/api/AuthApi";
import { FormHelperText } from "@mui/joy";
import { Google } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import theme from "../styles/mui/theme";
import { joyTheme, muiTheme } from "../src/styles/mui/JoytMaterialMixed";
import { deepmerge } from "@mui/utils";
import { orange, blue } from "@mui/material/colors";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function ColorSchemeToggle({ onClick, ...props }: IconButtonProps) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="plain" color="neutral" disabled />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="plain"
      color="neutral"
      {...props}
      onClick={(event) => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
        onClick?.(event);
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

// 新規登録型定義
type RegisterParams = {
  username: string;
  email: string;
  password: string;
  confirmPass: string;
};
type SubmitParams = {
  username: string;
  email: string;
  password: string;
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

// 新規登録画面
export default function Register() {
  // mui のテーマ
  const theme = useTheme();

  // 登録後、ページを飛ばす為のルーター
  const router = useRouter();
  // モーダルの機能
  const [open, setOpen] = React.useState(false);
  // 新規登録機能
  const { control, handleSubmit, trigger, getValues, watch } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPass: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterParams> = (data) => {
    // call Register API
    console.log(data);
    register(data);
    // router.push("/home");
  };

  const a = watch();
  console.log(a);

  return (
    <CssVarsProvider
      defaultMode="dark"
      disableTransitionOnChange
      theme={deepmerge(muiTheme, joyTheme)}
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px", // form will stretch when viewport is below `769px`
            "--Cover-width": "40vw", // must be `vw` only
            "--Form-maxWidth": "1000px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          height: "100%",
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(255 255 255 / 0.6)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            backgroundColor: theme.palette.bgColor.white,
            flexDirection: "column",
            minHeight: "100dvh",
            width:
              "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
            maxWidth: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              onClick={() => {
                router.push("/");
              }}
              fontWeight="lg"
              sx={{ cursor: "pointer" }}
              startDecorator={
                <Box
                  component="span"
                  sx={{
                    width: 24,
                    height: 24,
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.vars.palette.primary.solidBg}, ${theme.vars.palette.primary.solidBg} 30%, ${theme.vars.palette.primary.softBg})`,
                    borderRadius: "50%",
                    boxShadow: (theme) => theme.shadow.md,
                    "--joy-shadowChannel": (theme) =>
                      theme.vars.palette.primary.mainChannel,
                  }}
                />
              }
            >
              TravelLogue
            </Typography>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: "hidden",
              },
            }}
          >
            <div>
              <Typography component="h2" fontSize="1.3rem" fontWeight="lg">
                新規会員登録
              </Typography>
              <Typography level="body2" fontSize="0.8rem" sx={{ my: 1, mb: 2 }}>
                TravelLogueを始める前に、ユーザー情報を入力してください。
              </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="username"
                control={control}
                rules={validationRules.username}
                render={({ field, fieldState }) => (
                  <FormControl>
                    <FormLabel>ユーザー名</FormLabel>
                    <Input
                      placeholder="ユーザー名"
                      {...field}
                      error={fieldState.invalid}
                    />
                    {fieldState.error ? (
                      <FormHelperText sx={{ fontSize: "0.7rem" }}>
                        {fieldState.error?.message}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={validationRules.email}
                render={({ field, fieldState }) => (
                  <>
                    <FormControl>
                      <FormLabel>Email アドレス</FormLabel>
                      <Input
                        placeholder="sample@gmail.com"
                        autoComplete="email"
                        {...field}
                        error={fieldState.invalid}
                      />
                      {fieldState.error ? (
                        <FormHelperText sx={{ fontSize: "0.7rem" }}>
                          {fieldState.error?.message}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  </>
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={validationRules.password}
                render={({ field, fieldState }) => (
                  <>
                    <FormControl>
                      <FormLabel>パスワード</FormLabel>
                      <Input
                        type="password"
                        placeholder="•••••••"
                        {...field}
                        error={fieldState.invalid}
                      />
                      {fieldState.error ? (
                        <FormHelperText sx={{ fontSize: "0.7rem" }}>
                          {fieldState.error?.message}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  </>
                )}
              />
              <Controller
                name="confirmPass"
                control={control}
                rules={validationRules.confirmPass}
                render={({ field, fieldState }) => (
                  <>
                    <FormControl>
                      <FormLabel>パスワード 再入力</FormLabel>
                      <Input
                        type="password"
                        placeholder="•••••••"
                        {...field}
                        error={fieldState.invalid}
                      />
                      {fieldState.error ? (
                        <FormHelperText sx={{ fontSize: "0.7rem" }}>
                          {fieldState.error?.message}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  </>
                )}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent:'center',
                  alignItems: "center",
                  pb: 2,
                }}
              >
                <Checkbox
                  size="sm"
                  label="ログイン情報を保持"
                  name="persistent"
                />
              </Box>
              <Button
                sx={{ backgroundColor: theme.palette.bgColor.blue, color:theme.palette.textColor.white}}
                type="submit"
                fullWidth
              >
                登録
              </Button>
              <Button
                sx={{
                  backgroundColor: theme.palette.bgColor.orange,
                  ":hover": {
                    backgroundColor: theme.palette.bgColor.bladOrange,
                  },
                }}
                type="button"
                fullWidth
                onClick={()=> router.push('/login')}
              >
                すでに登録している方はこちら
              </Button>
            </form>
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              startDecorator={<Google />}
            >
              googleアカウントでサインアップ
            </Button>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body3" textAlign="center">
              @ tanaka souta {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1677419734433-2420e3bf1093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1605748430168-27742f194b64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80)",
          },
        })}
      />
    </CssVarsProvider>
  );
}
