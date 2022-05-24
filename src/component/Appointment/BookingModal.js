import React from "react";

const BookingModal = ({ Treatment, AppointDate }) => {
  const { details, ServiceSelected } = Treatment;
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="Booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent">
            Booking for {ServiceSelected}
          </h3>
          <div className="form-control mt-4">
            <input
              type="text"
              disabled
              readOnly
              value={AppointDate}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              disabled
              readOnly
              value={details}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4 modal-action mt-6">
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">
              Booking Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
