import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import React from "react";

export default function Checkbox(props) {
  const { name, label, value, onChange } = props;

  const convertedOnChange = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertedOnChange(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}
