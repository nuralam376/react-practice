import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  booking,
  date,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    data.serviceName = booking.subject;
    data.date = date;
    data.time = booking.visitingHour;
    data.created_at = new Date();

    console.log(data);
    fetch("http://localhost:5000/addappointment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          closeModal();
          console.log(result);
          alert("Appointment created successfully");
        }
      })
      .catch(() => alert("Server responded error"));
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Booking Appointement"
      >
        <h2>
          {booking.subject} <small>at {booking.visitingHour}</small>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          {/* register your input into the hook by invoking the "register" function */}
          <div className="form-group">
            <div className="col-12">
              <input
                name="name"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-danger">* This field is required</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <div className="col-12">
              <input
                name="email"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Your Email"
              />
              {errors.email && (
                <span className="text-danger">* This field is required</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <div className="col-12">
              <input
                name="phone"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Your Phone"
              />
              {errors.phone && (
                <span className="text-danger">* This field is required</span>
              )}
            </div>
          </div>
          <div className="form-group row px-3">
            <div className="col-4">
              <select
                name="gender"
                id="gender"
                ref={register({ required: true })}
                className="form-control"
              >
                <option value="Not Set" disabled={true}>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              {errors.gender && (
                <span className="text-gender">* This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                name="age"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Your age"
              />
              {errors.age && (
                <span className="text-danger">* This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                name="weight"
                ref={register({ required: true })}
                className="form-control"
                placeholder="Your weight"
              />
              {errors.weight && (
                <span className="text-danger">* This field is required</span>
              )}
            </div>
          </div>

          <input type="submit" className="ml-auto btn btn-success d-block" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
