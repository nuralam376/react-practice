import React, { useState } from "react";
import Calendar from "react-calendar";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };
  const [selectedDate, setSelected] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const onDateChange = (date) => {
    setSelected(date);

    fetch("http://localhost:5000/appointmentsbydate", {
      method: "POST",
      body: JSON.stringify({ date }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((documents) => {
        setAppointments(documents);
      });
  };

  return (
    <div>
      <div className="container-fluid row" style={containerStyle}>
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-5">
          <h2 className="mt-5 text-center">Appointment</h2>
          <Calendar onChange={onDateChange} value={selectedDate} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
