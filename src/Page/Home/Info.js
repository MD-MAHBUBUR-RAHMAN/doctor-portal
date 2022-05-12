import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-col-1 gap-7 px-4 md:grid-cols-3 md:gap-5 md:px-12">
      <InfoCard
        title="Opening Hours"
        img={clock}
        bgClass="bg-gradient-to-r from-secondary to-primary"
      />
      <InfoCard title="Visits Our Location" img={marker} bgClass="bg-accent" />
      <InfoCard
        title="Contact Now"
        img={phone}
        bgClass="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default Info;
