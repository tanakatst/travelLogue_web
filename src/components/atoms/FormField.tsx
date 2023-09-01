import { Label } from "@mui/icons-material";
import { SxProps, TextField, Theme } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { LoginParams } from "../../features/auth/types/Authenticate";

type FormField = {
  required: boolean;
  name: string;
  label: string | undefined;
  placeholder: string | undefined;
  rule: Object;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
  control: Control;
};

const FormField = ({
  name,
  label,
  placeholder,
  required,
  sx,
  rule,
  fullWidth,
  control,
}: FormField) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rule}
      render={({ field, fieldState }) => {
        return (
          <TextField
            margin="dense"
            sx={{
              "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root ": {
                borderRadius: "20px",
              },
              ...sx,
            }}
            required={required}
            fullWidth={fullWidth}
            id={name}
          
            placeholder={placeholder}
            autoFocus
            {...field}
            helperText={fieldState.error?.message}
            error={fieldState.invalid}
          />
        );
      }}
    />
  );
};

export default FormField;
