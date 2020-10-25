import React from "react";

const PatientData = ({ patient }) => {
  const { name, email, phone, serviceName, time, gender } = patient;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{gender}</td>
      <td>{serviceName}</td>
      <td>{time}</td>
    </tr>
  );
};

export default PatientData;
