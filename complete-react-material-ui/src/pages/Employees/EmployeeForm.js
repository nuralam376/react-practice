import { Grid } from "@material-ui/core";
import React from "react";
import Control from "../../components/controls/Controls";
import { Form, useForm } from "../../components/useForm";
import * as employees from "../../services/EmployeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName = values.fullName ? "" : "FullName is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email is not valid";
    if ("mobile" in fieldValues)
      temp.mobile =
        values.mobile.length === 11 ? "" : "11 characters are required";
    if ("city" in fieldValues)
      temp.city = values.city ? "" : "This field is required";
    if ("departmentId" in fieldValues)
      temp.departmentId = values.departmentId ? "" : "This field is required";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      employees.insertEmployees(values);
      alert("Submitting...");
    }
  };
  const { values, errors, setErrors, resetForm, handleInputChange } = useForm(
    initialValues,
    true,
    validate
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Control.Input
            name="fullName"
            value={values.fullName}
            label="Full Name"
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Control.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Control.Input
            name="mobile"
            value={values.mobile}
            label="Mobile"
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Control.Input
            name="city"
            value={values.city}
            label="City"
            onChange={handleInputChange}
            error={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <Control.RadioGroup
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
            label="Gender"
          />
          <Control.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            departments={employees.getDepartments()}
            error={errors.departmentId}
          />
          <Control.Checkbox
            name="isPermanent"
            label="Permanent"
            onChange={handleInputChange}
            value={values.isPermanent}
          />
          <Control.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Control.Button text="Submit" type="submit" />
          <Control.Button text="Reset" color="secondary" onClick={resetForm} />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
