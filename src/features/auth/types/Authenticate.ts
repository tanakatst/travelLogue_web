import { SxProps, Theme } from "@mui/material";

type AuthenticateTextField = {
  required: boolean;
  name: string;
  label: string;
  placeholder: string | undefined;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
};

export type LoginParams = {
  email: string;
  password: string;
};
