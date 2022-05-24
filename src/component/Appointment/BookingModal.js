import React from "react";

const BookingModal = ({ Treatment, AppointDate, setTreatment }) => {
  const { details, ServiceSelected } = Treatment;

  const handleBookingForm = (event) => {
    event.preventDefault();
    const patientName = event.target.name.value;
    const patientEmail = event.target.email.value;
    const patientPhone = event.target.phone.value;
    const slot = event.target.slot.value;
    const date = event.target.date.value;
    const bookingDetails = { patientName, patientEmail, patientPhone, slot, date }
    console.log(bookingDetails);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBookingForm}>
            <h3 className="font-bold text-lg text-accent">
              Booking for {ServiceSelected}
            </h3>
            <div className="form-control mt-4">
              <input
                type="text"
                disabled
                readOnly
                name="date"
                value={AppointDate}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                disabled
                readOnly
                name="slot"
                value={details}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4 modal-action mt-6">
              <button
                className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary"
                type="submit"
              >
                Booking Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
