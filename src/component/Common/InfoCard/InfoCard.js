import React from "react";

const InfoCard = (props) => {
    const {infoTitle, infoDetails, icon, bgClass} = props.details
    console.log(props.details);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary">
      <figure className="pl-5 mt-5">
        <img
          src={icon}
          alt="Album"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{infoTitle}</h2>
        <p>{infoDetails}</p>
      </div>
    </div>
  );
};

export default InfoCard;
