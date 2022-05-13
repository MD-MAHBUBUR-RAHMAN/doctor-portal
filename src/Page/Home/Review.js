import React from "react";

const Review = ({ assessment }) => {
  const { name, place, img, review } = assessment;
  return (
    <div className="card gl:w-96 bg-base-100 shadow-xl mt-10">
      <div className="card-body">
        <p>{review}</p>
        <div className="flex items-center mt-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="ml-5">
            <p>{name} </p>
            <p>
              <small>{place}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
