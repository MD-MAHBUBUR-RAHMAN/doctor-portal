import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Wilson Herry",
      place: "Caliornia",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Wilson Herry",
      place: "Caliornia",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Wilson Herry",
      place: "Caliornia",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="px-12 my-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-primary text-2xl font bold">Testimonial</h2>
          <h3 className="text-3xl">What Our Patient Sayes</h3>
        </div>
        <div>
          <img src={quote} className="w-28 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} assessment={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
