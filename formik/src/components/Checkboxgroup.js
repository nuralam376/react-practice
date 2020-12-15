import { Field } from "formik";
import React from "react";

function Checkboxgroup(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <input
                  type="checkbox"
                  id={option.value}
                  name={name}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
}

export default Checkboxgroup;
