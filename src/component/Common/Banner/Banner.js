import React from "react";
import Chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-no-repeat bg-center mb-9" style={{backgroundImage:`url(${bg})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
