import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function RegistrationForm() {
  const options = [
    { key: "Email", value: "emailMoc" },
    { key: "Telephone", value: "telephoneMoc" },
  ];
  const initailValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("* This field is required"),
    password: Yup.string().required("* This field is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("* This field is required"),
    modeOfContact: Yup.string().required("* This field is required"),
    phoneNumber: Yup.string().when("modeOfContact", {
      is: "telephoneMoc",
      then: Yup.string().required("* This field is required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("Values", values);
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
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="text"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="text"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              name="modeOfContact"
              label="Mode of Contact"
              options={options}
            />
            <FormikControl
              control="input"
              name="phoneNumber"
              label="Phone Number"
              type="text"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
            <FormikControl />
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
