import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function CourseEnrollment() {
  const courseOptions = [
    { key: "Angular", value: "angular" },
    { key: "React", value: "react" },
    { key: "Vue", value: "vue" },
  ];

  const skillsOptions = [
    { key: "Html", value: "html" },
    { key: "Css", value: "css" },
    { key: "JavaScript", value: "js" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: "",
    date: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("* This field is required"),
    bio: Yup.string().required("* This field is required"),
    course: Yup.string().required("* This field is required"),
    skills: Yup.string().required("* This field is required"),
    // date: Yup.date().required("* This field is required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Values", values);
    console.log("Course Date", JSON.parse(JSON.stringify(values.date)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />

            <FormikControl control="textarea" name="bio" label="Bio" />

            <FormikControl
              control="radio"
              name="course"
              label="Course"
              options={courseOptions}
            />

            <FormikControl
              control="checkbox"
              name="skills"
              label="Skills"
              options={skillsOptions}
            />

            <FormikControl control="date" name="date" label="Course Date" />

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CourseEnrollment;
