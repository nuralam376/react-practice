import React from "react";
import AppointmentsShortList from "../AppointmentsShorList/AppointmentsShortList";

const AppointmentsByDate = ({ appointments }) => {
  return (
    <div className="mt-5">
      <h1 className="mb-5">All Appointements : {appointments.length}</h1>

      <table className="mt-5 table table-borderless">
        <thead>
          <tr>
            <th>SL#</th>
            <th>Name</th>
            <th>Schedule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length ? (
            <AppointmentsShortList appointments={appointments} />
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsByDate;
