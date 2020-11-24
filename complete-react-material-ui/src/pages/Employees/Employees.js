import {
  InputAdornment,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useState } from "react";
import Control from "../../components/controls/Controls";
import useTable from "../../components/controls/useTable";
import { getAllEmployees } from "../../services/EmployeeService";

const headCells = [
  { id: "fullName", label: "Employee Name" },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "mobile",
    label: "Mobile",
  },
  {
    id: "city",
    label: "City",
  },
  {
    id: "departmentId",
    label: "DepartmentId",
  },
];

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    width: "76%",
  },
}));

export default function Employees() {
  const classes = useStyles();
  const [records] = useState(getAllEmployees);
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    const target = e.target;

    setFilterFn({
      fn: (items) => {
        if (target.value === "") {
          return items;
        } else {
          return items.filter((item) =>
            item.fullName.toLowerCase().includes(target.value)
          );
        }
      },
    });
  };

  return (
    <div>
      <Toolbar>
        <Control.Input
          label="Search Employees"
          className={classes.searchIcon}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TblPagination />
      </TblContainer>
    </div>
  );
}
