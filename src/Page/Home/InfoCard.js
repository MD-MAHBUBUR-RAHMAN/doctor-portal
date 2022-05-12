import React from "react";

const InfoCard = ({ img, title, bgClass }) => {
  return (
    <div className={`card lg:card-side shadow-xl ${bgClass}`}>
      <figure className="pl-6">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-base-100">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
