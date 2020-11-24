import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, value, error = null, label, onChange, ...other } = props;

  return (
    <TextField
      variant="outlined"
      name={name}
      value={value}
      label={label}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
