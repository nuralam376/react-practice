import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    id: 1,
    title: "Opening Hours",
    description: "Lorem ipsum is simply dummy text of the pri",
    icon: faClock,
    background: "primary",
  },
  {
    id: 2,
    title: "Visit our location",
    description: "Brooklyn, NY 10036, United States",
    icon: faMapMarker,
    background: "dark",
  },
  {
    id: 3,
    title: "Contact us now",
    description: "+000 123 456789",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className="w-75 row mt-5">
        {infosData.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
