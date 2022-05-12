import React from "react";

const InfoCard = ({ img, title, bgClass }) => {
  return (
    <div class={`card lg:card-side shadow-xl ${bgClass}`}>
      <figure className="pl-6">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-base-100">
        <h2 class="card-title">{title}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
