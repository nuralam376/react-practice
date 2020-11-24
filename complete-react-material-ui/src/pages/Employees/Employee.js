import { makeStyles, Paper } from "@material-ui/core";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import React from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import Employees from "./Employees";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employee = () => {
  const classes = useStyle();

  return (
    <div>
      <PageHeader
        title="Employees"
        subtitle="Employee Details"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <Employees />
      </Paper>
    </div>
  );
};

export default Employee;
