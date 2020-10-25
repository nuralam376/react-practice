import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookingAppointment from "../BookingAppointment/BookingAppointment";

const Appointment = () => {
  const [selectedDate, setSelected] = useState(new Date());

  const onDateChange = (date) => {
    setSelected(date);
  };
  return (
    <div>
      <Navbar color="black" />
      <AppointmentHeader
        onDateChange={onDateChange}
        selectedDate={selectedDate}
      />
      <BookingAppointment date={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
