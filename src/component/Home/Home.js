import React from "react";
import Banner from "../Common/Banner/Banner";
import Info from "../Common/Info/Info";
import Service from "../Common/Service/Service";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info/>
      <Service/>
    </div>
  );
};

export default Home;
