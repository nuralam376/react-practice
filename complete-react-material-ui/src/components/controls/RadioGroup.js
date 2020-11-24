import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import React from "react";

export default function RadioGroup(props) {
  const { label, name, value, items, onChange } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <MuiRadioGroup row={true} name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            label={item.title}
            control={<Radio />}
            value={item.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
