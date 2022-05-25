import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({
  Treatment,
  AppointDate,
  setTreatment,
  ServiceSelected_id,
}) => {
  const { details, ServiceSelected } = Treatment;
  const [user] = useAuthState(auth);

  const handleBookingForm = (event) => {
    event.preventDefault();
    const patientName = event.target.name.value;
    const patientEmail = event.target.email.value;
    const patientPhone = event.target.phone.value;
    const slot = event.target.slot.value;
    const date = event.target.date.value;
    const bookingDetails = {
      ServiceSelected_id,
      ServiceSelected,
      patientName,
      patientEmail,
      patientPhone,
      slot,
      date,
    };
    // console.log(bookingDetails);
    fetch("http://localhost:5000/setAppointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast(`${data.message} at ${details} ${AppointDate}`);
        } else {
          toast.error(`${data.message} at ${details} ${AppointDate}`);
        }
      });
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
                readOnly
                name="date"
                value={AppointDate}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                readOnly
                name="slot"
                value={details}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                readOnly
                value={user?.displayName || ""}
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
                readOnly
                value={user?.email || ""}
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
