import React from "react";

const Slot = ({ ServiceSelected, details, setTreatment }) => {
  return (
    <div className="card shadow-sm hover:shadow-xl text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{ServiceSelected}</h2>
        <p className="text-center font-semibold text-accent">{details}</p>
        <label
          for="Booking-modal"
          className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary"
          onClick={() => setTreatment({ details, ServiceSelected })}
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Slot;
