import { Field } from "formik";
import React from "react";
import Date from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {
  const { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <Date
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, value)}
            />
          );
        }}
      </Field>
    </div>
  );
}

export default DatePicker;
