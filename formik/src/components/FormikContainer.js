import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikControl from "./FormikControl";

export default function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
  };
  const validationSchema = yup.object({
    email: yup.string().required("* This field is required"),
    description: yup.string().required("* This field is required"),
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
          <button type="submit"> Submit</button>
        </Form>
      )}
    </Formik>
  );
}
