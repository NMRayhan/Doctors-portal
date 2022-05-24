import React from "react";

const Slot = ({child,details,HandleSelectSlot}) => {
    
  return (
    <div
      className="card shadow-sm hover:shadow-xl text-neutral-content"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">{child}</h2>
        <p className="text-center font-semibold text-accent">{details}</p>
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary"  onClick={() => HandleSelectSlot()}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Slot;
