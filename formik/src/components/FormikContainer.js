import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikControl from "./FormikControl";

export default function FormikContainer() {
  const radioOptions = [
    { key: "Option 1", value: "roption1" },
    { key: "Option 2", value: "roption2" },
    { key: "Option 3", value: "roption3" },
  ];
  const dropDownOptions = [
    { key: "Select a option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "Option3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };
  const validationSchema = yup.object({
    email: yup.string().required("* This field is required"),
    description: yup.string().required("* This field is required"),
    selectOption: yup.string().required("* This field is required"),
    radioOption: yup.string().required("* This field is required"),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            name="email"
            type="email"
            label="Email"
            control="input"
          />
          <FormikControl
            name="description"
            control="textarea"
            label="Description"
          />
          <FormikControl
            name="selectOption"
            label="Select a Option"
            control="select"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <button type="submit"> Submit</button>
        </Form>
      )}
    </Formik>
  );
}
