import React from "react";

const Review = ({ assessment }) => {
  const { name, place, img, review } = assessment;
  return (
    <div class="card gl:w-96 bg-base-100 shadow-xl mt-10">
      <div class="card-body">
        <p>{review}</p>
        <div className="flex items-center mt-5">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
