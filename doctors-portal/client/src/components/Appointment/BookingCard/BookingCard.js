import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking, date }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="col-md-4 mb-5">
      <div className="card">
        <div className="card-body">
          <h5 className="text-brand">{booking.subject}</h5>
          <h6>{booking.visitingHour}</h6>
          <p>
            <small>{booking.totalSpace} seats available</small>
          </p>
          <button onClick={openModal} className="btn btn-primary">
            Book for appointment
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            afterOpenModal={afterOpenModal}
            subtitle={subtitle}
            booking={booking}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
