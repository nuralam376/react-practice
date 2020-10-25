import React from "react";
import chair from "../../../images/chair.png";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const AppointmentHeader = ({ onDateChange, selectedDate }) => {
  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center">Appointment</h1>
          <Calendar onChange={onDateChange} value={selectedDate} />
        </div>
        <div className="col-md-6 mt-5">
          <img src={chair} alt="chair" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
