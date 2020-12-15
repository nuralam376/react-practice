import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function LoginForm() {
  const initailValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("* This field is required"),
    password: Yup.string().required("* This field is required"),
  });

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={initailValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              name="email"
              label="Email"
              type="email"
            />
            <FormikControl
              type="text"
              name="password"
              control="input"
              label="Password"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
