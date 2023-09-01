import React from "react";
import { Box, FormLabel, SxProps, Theme } from "@mui/material";
import FormField from "../../../components/atoms/FormField";
import { Control } from "react-hook-form";

type AuthenticateMoleculeProps = {
  required: boolean;
  name: string;
  label: string;
  placeholder: string | undefined;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
  rule: Object;
  //   labelName: string | undefined
  labelSx?: SxProps<Theme>;
  py?: number;
  hasLabel: boolean;
  control: any;
};

const AuthenticateTextFieldMolecule = ({
  required,
  name,
  label,
  placeholder,
  fullWidth,
  sx,
  hasLabel,
  labelSx,
  rule,
  py,
  control,
}: AuthenticateMoleculeProps) => {
  return (
    <>
      <Box sx={{ py: `${py}px` }}>
        {hasLabel && <FormLabel sx={{ mb: "3px" }}>{label}</FormLabel>}
        <FormField
          sx={sx}
          name={name}
          control={control}
          fullWidth={fullWidth}
          rule={rule}
          label={label}
          required={required}
          placeholder={placeholder}
        />
      </Box>
    </>
  );
};

export default AuthenticateTextFieldMolecule;
