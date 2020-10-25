import React from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitenning from "../../../images/whitenning.png";

const servicesData = [
  {
    id: 1,
    name: "Fluoride Treatement",
    image: fluoride,
  },
  {
    id: 2,
    name: "Cavity Filling",
    image: cavity,
  },
  {
    id: 3,
    name: "Teeth Whitenning",
    image: whitenning,
  },
];

const Services = () => {
  return (
    <div className="services-container text-center">
      <div className="text-center mt-5">
        <h5>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-75 row">
          {servicesData.map((service) => (
            <ServiceDetails key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
