import React from "react";
import { useNavigate } from "react-router-dom";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";

const MakeAppointment = () => {
  const navigate = useNavigate()
  return (
    <div
      className="hero min-h-min bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="hidden lg:block">
          <img
            src={doctor}
            className="max-w-sm rounded-lg shadow-2xl mt-[-100px]"
            alt="Doctor"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-secondary mb-7">Appointment</h1>
          <h1 className="text-5xl text-white mb-6 font-semibold">
            Make an appointment Today
          </h1>
          <p className="py-6 text-white font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button onClick={()=> navigate("/appointment")} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">
            Get Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
