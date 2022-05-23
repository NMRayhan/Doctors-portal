import React from "react";
import Banner from "../Common/Banner/Banner";
import Footer from "../Common/Footer/Footer";
import Info from "../Common/Info/Info";
import LandingPageContact from "../Common/LandingPageContact/LandingPageContact";
import MakeAppointment from "../Common/MakeAppointment/MakeAppointment";
import Service from "../Common/Service/Service";
import Testimonials from "../Common/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <div className="px-12">
        <Banner />
        <Info />
        <Service />
      </div>
      <MakeAppointment />
      <div className="px-12">
        <Testimonials />
      </div>
      <LandingPageContact />
      <Footer />
    </>
  );
};

export default Home;
