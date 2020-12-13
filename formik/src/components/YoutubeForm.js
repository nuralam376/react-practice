import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "Abc",
  email: "abc@gmail.com",
  channel: "Abc Channel",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form Values", values);
  console.log("onSubmit Props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  channel: yup.string().required("Required"),
  address: yup.string().required("Required"),
  // comments: yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;

  if (!value) {
    error = "* Required";
  }
  return error;
};

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      {(formik) => {
        // console.log("formik", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
            </div>
            <ErrorMessage name="name" />
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
            </div>
            <ErrorMessage name="email">
              {(errorMessage) => <div className="error">{errorMessage}</div>}
            </ErrorMessage>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                name="channel"
                id="channel"
                placeholder="Channel"
              />
            </div>
            <ErrorMessage name="channel" />
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                name="comments"
                id="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field name="address">
                {(props) => {
                  const { field, meta } = props;

                  return (
                    <div>
                      <input type="text" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field name="social.facebook" id="facebook" type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter</label>
              <Field name="social.twitter" id="twitter" type="text" />
            </div>
            <div className="form-controller">
              <label htmlFor="primary">Primary Phone Number</label>
              <Field type="text" name="phoneNumbers[0]" id="primary" />
            </div>
            <div className="form-control">
              <label htmlFor="secondary">Secondary Phone Number</label>
              <Field type="text" name="phoneNumbers[1]" id="secondary" />
            </div>
            <div className="form-control">
              <label htmlFor="phNumbers">List if Phone Numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArray) => {
                  const { push, remove, form } = fieldArray;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push(index)}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate Comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate All
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit Comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                })
              }
            >
              Visit All
            </button>
            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load Values
            </button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
