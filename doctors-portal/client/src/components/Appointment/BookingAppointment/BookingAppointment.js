import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const appontmentsData = [
  {
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 am - 9:00 am",
    totalSpace: 11,
  },
  {
    id: 2,
    subject: "Cosmetic Dentistry",
    visitingHour: "10:05 am - 11:30 am",
    totalSpace: 10,
  },
  {
    id: 3,
    subject: "Teeth Cleaning",
    visitingHour: "5:00 pm - 10:30 pm",
    totalSpace: 10,
  },
  {
    id: 4,
    subject: "Cavity protection",
    visitingHour: "7:00 am - 8:30 am",
    totalSpace: 10,
  },
  {
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 am - 9:00 am",
    totalSpace: 11,
  },
  {
    id: 6,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 am - 9:00 am",
    totalSpace: 11,
  },
];

const BookingAppointment = ({ date }) => {
  return (
    <section className="mt-5">
      <h4 className="text-center text-brand mb-5">
        Available Appointments on {date.toDateString()}
      </h4>

      <div className="row container mx-auto">
        {appontmentsData.map((booking) => (
          <BookingCard key={booking.id} date={date} booking={booking} />
        ))}
      </div>
    </section>
  );
};

export default BookingAppointment;
