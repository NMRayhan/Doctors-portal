import React from "react";

const Testimonial = (props) => {
  const { Review, Name, Location, Image } = props.details;
  return (
    <div className="mt-20">
      <div class="card bg-base-100 shadow-xl">
        <div className="text-center p-10">
          <p className="text-2xl">{Review}</p>
        </div>
        <div className="w-3/4">
          <div className="flex items-center">
            <div class="card-body items-end">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={Image} alt={Name} />
                </div>
              </div>
            </div>
            <div class="card-body items-start">
              <h2 class="card-title text-accent font-semibold text-3xl">
                {Name}
              </h2>
              <h2 class="card-title text-2xl">{Location}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
