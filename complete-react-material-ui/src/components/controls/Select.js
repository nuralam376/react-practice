import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";

const Select = (props) => {
  const { name, label, onChange, error = null, departments, value } = props;

  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>

      <MuiSelect name={name} value={value} label={label} onChange={onChange}>
        <MenuItem value="">None</MenuItem>

        {departments.map((department) => (
          <MenuItem key={department.id} value={department.id}>
            {department.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
