import { Label } from "@mui/icons-material";
import { SxProps, TextField, Theme } from "@mui/material";
import React from "react";



const FormField = ({ name, label, placeholder, required, sx, fullWidth }: FormField) => {
  return (
    <TextField
      margin="normal"
      sx={{
        "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root ": {
          borderRadius: "20px",
        },
        ...sx
      }}
      required={required}
      fullWidth={fullWidth}
      id="email"
      label={label}
      placeholder={placeholder}
      name={name}
      autoComplete="email"
      autoFocus
    ></TextField>
  );
};

export default FormField;
