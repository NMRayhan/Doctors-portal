import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import ServiceInfo from "../ServiceInfo/ServiceInfo";

const Service = () => {
  const ServicesInformation = [
    {
      id: 1,
      infoTitle: "Cavity Filling",
      infoDetails:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 2,
      infoTitle: "Fluoride Treatment",
      infoDetails:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluoride,
    },
    {
      id: 3,
      infoTitle: "Teeth Whitening",
      infoDetails:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: whitening,
    },
  ];
  return (
    <section className="my-28">
      <h3 className="text-center text-secondary uppercase font-semibold text-2xl">
        OUR SERVICES
      </h3>
      <h3 className="text-center text-accent font-light text-4xl mt-2 mb-16">
        Services We Provide
      </h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-9 items-center justify-evenly sm:justify-center">
        {ServicesInformation.map((info) => (
          <ServiceInfo key={info.id} details={info} />
        ))}
      </div>
      <ServiceBanner/>
    </section>
  );
};

export default Service;
