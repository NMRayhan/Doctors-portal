import React from "react";

const ServiceInfo = (props) => {
  const { infoTitle, infoDetails, icon } = props.details;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={icon} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 className="text-3xl">{infoTitle}</h2>
        <p>{infoDetails}</p>
      </div>
    </div>
  );
};

export default ServiceInfo;
