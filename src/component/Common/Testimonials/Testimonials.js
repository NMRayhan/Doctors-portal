import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const userReviews = [
    {
      id: 1,
      Review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      Name: "Winson Herry",
      Location: "California",
      Image: people1,
    },
    {
      id: 2,
      Review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      Name: "Marina",
      Location: "New Mexico",
      Image: people2,
    },
    {
      id: 3,
      Review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      Name: "Kimbani",
      Location: "NewYork",
      Image: people3,
    },
  ];
  return (
    <>
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-left text-2xl text-secondary font-semibold mb-2">
              Testimonial
            </h3>
            <h3 className="text-left text-4xl font-normal">
              What Our Patients Says
            </h3>
          </div>
          <div className="flex-2 hidden lg:block">
            <img src={quote} alt="" className="w-48" />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mb-32">
        {userReviews.map((review) => (
          <Testimonial key={review.id} details={review} />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
