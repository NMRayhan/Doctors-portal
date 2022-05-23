import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import mark from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  const information = [
    {
      id: 1,
      infoTitle: "Opening Hours",
      infoDetails: "09:00AM-01:00PM & 02:00PM-06PM",
      icon: clock,
      bgClass: "primary",
    },
    {
      id: 2,
      infoTitle: "Visit our location",
      infoDetails: "Brooklyn, NY 10036, United States",
      icon: mark,
      bgClass: "accent",
    },
    {
      id: 3,
      infoTitle: "Contact us now",
      infoDetails: "+000 123 456789",
      icon: phone,
      bgClass: "primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-evenly sm:justify-center mb-9">
      {information.map((info) => (
        <InfoCard key={info.id} details={info} />
      ))}
    </div>
  );
};

export default Info;
