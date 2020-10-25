import React from "react";

const ServiceDetails = ({ service }) => {
  return (
    <div className="col-md-4 mt-5">
      <img
        src={service.image}
        alt={service.name}
        style={{ height: "50px" }}
        className="mb-3"
      />
      <h6 style={{ color: "#7cc1c1" }}>{service.name}</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ullam.
      </p>
    </div>
  );
};

export default ServiceDetails;
