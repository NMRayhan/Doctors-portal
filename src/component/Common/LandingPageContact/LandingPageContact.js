import React from "react";
import appointment from "../../../assets/images/appointment.png";

const LandingPageContact = () => {
  return (
    <div
      className="min-h-min bg-no-repeat bg-center p-20"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <p className="text-secondary text-center text-2xl">Contact Us</p>
          <p className="text-white text-center text-4xl my-4">
            Stay connected with us
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <input
                type="text"
                placeholder="Email Address"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                placeholder="Subject"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <textarea
                placeholder="Your Message"
                class="input input-bordered"
              ></textarea>
            </div>
            <div class="form-control mt-6">
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
