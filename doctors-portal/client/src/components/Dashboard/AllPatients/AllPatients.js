import React, { useEffect, useState } from "react";
import PatientData from "../PatientData/PatientData";
import Sidebar from "../Sidebar/Sidebar";

const AllPatients = () => {
  const [allPatients, setAllPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAllPatients(data));
  }, []);

  return (
    <div className="container-fluid row">
      <div className="col-md-2 col-xs-2 col-sm-2 col-xl-2 col-xxl-2">
        <Sidebar />
      </div>
      <div className="col-md-10 col-xs-10 col-sm-10 col-xl-10 col-xxl-10">
        <h1>All Patients</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map((patient) => (
              <PatientData key={patient._id} patient={patient} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPatients;
