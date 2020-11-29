import {
  InputAdornment,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import { CloseOutlined, EditOutlined, Search } from "@material-ui/icons";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import React, { useState } from "react";
import ConfirmDialog from "../../components/controls/ConfirmDialog";
import Control from "../../components/controls/Controls";
import Notifications from "../../components/controls/Notifications";
import useTable from "../../components/controls/useTable";
import Popup from "../../components/Popup";
import {
  deleteEmployee,
  getAllEmployees,
  insertEmployees,
  updateEmployees,
} from "../../services/EmployeeService";
import EmployeeForm from "./EmployeeForm";

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
    disableSorting: true,
  },
  {
    id: "actions",
    label: "Actions",
    disableSorting: true,
  },
];

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    width: "76%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

export default function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(getAllEmployees);
  const [recordsForEdit, setRecordsForEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);
  const [openPopup, setOpenPopup] = useState(false);
  console.log("as", setOpenPopup);

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

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) insertEmployees(employee);
    else updateEmployees(employee);
    resetForm();
    setRecordsForEdit(null);
    setOpenPopup(false);
    setRecords(getAllEmployees());
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };

  const openInPopUp = (item) => {
    setRecordsForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    deleteEmployee(id);
    setRecords(getAllEmployees());
    setNotify({
      isOpen: true,
      message: "Deleted successfully",
      type: "error",
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
        <Control.Button
          text="Add New"
          variant="outlined"
          startIcon={<AddOutlinedIcon />}
          className={classes.newButton}
          onClick={() => {
            setOpenPopup(true);
            setRecordsForEdit(null);
          }}
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
              <TableCell>
                <Control.ActionButtons
                  color="primary"
                  onClick={() => {
                    openInPopUp(item);
                  }}
                >
                  <EditOutlined />
                </Control.ActionButtons>
                <Control.ActionButtons
                  color="secondary"
                  onClick={() => {
                    // onDelete(item.id)
                    setConfirmDialog({
                      isOpen: true,
                      title: "Are you sure?",
                      subtitle: "You cannot undo this",
                      onConfirm: () => {
                        onDelete(item.id);
                      },
                    });
                  }}
                >
                  <CloseOutlined />
                </Control.ActionButtons>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TblPagination />
      </TblContainer>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Employee Registration"
      >
        <EmployeeForm addOrEdit={addOrEdit} recordsForEdit={recordsForEdit} />
      </Popup>
      <Notifications notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
}
