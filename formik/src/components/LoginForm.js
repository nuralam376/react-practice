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
      .required("* Email is required"),
    password: Yup.string().required("* Password is required"),
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
            <FormikControl control="chakrainput" name="email" label="Email" />
            <FormikControl
              control="chakrainput"
              name="password"
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
