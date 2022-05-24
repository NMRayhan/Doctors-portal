import React from "react";
import appointment from "../../../assets/images/appointment.png";

const LandingPageContact = () => {
  return (
    <div
      className="min-h-min bg-no-repeat bg-center p-20"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="text-secondary text-center text-2xl">Contact Us</p>
          <p className="text-white text-center text-4xl my-4">
            Stay connected with us
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                placeholder="Your Message"
                className="input input-bordered"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContact;
