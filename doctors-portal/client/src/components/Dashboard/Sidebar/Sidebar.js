import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column col-md-2 justify-content-between py-5 px-4"
      style={{ height: "100vh", marginLeft: "-15px" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard/appointments" className="text-white">
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <span>Appointment</span>
          </Link>
        </li>
        <li>
          <Link to="/allPatients" className="text-white">
            <span>Patients</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <span>Prescriptions</span>
          </Link>
        </li>
        <li>
          <Link to="/addADoctor" className="text-white">
            <span>Add a Doctor</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <span>Setting</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
