import React from "react";
import { Button, SxProps, Theme } from "@mui/material";

type ButtonProps = {
  label: string;
  type?: string;
  sx?: SxProps<Theme>;
  fullWidth?: boolean;
};

//　送信用ボタン
export const ContainedSubmitButtonAtom = ({
  label,
  type,
  fullWidth,
  sx,
}: ButtonProps) => {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth={fullWidth}
      sx={{ borderRadius: "18px", ...sx }}
    >
      {label}
    </Button>
  );
};
