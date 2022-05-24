import React from "react";

const Service = (props) => {
  const { _id, serviceName} = props.details;
  const { HandleSelectService } = props;
  return (
    <div
      onClick={() => HandleSelectService(_id)}
      className="card shadow-sm hover:shadow-xl hover:cursor-pointer text-neutral-content"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">{serviceName}</h2>
      </div>
    </div>
  );
};

export default Service;
