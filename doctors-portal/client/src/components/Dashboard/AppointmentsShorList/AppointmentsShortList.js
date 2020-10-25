import React from "react";

const AppointmentsShortList = ({ appointments }) => {
  console.log(appointments);
  return (
    <>
      {appointments.map((appointment) => {
        return (
          <tr key={appointment._id}>
            <td>{appointment._id}</td>
            <td>{appointment.name}</td>
            <td>{appointment.time}</td>
            <td>
              <button className="btn btn-info">Action</button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default AppointmentsShortList;
