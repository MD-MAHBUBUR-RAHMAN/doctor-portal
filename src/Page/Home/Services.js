import React from "react";
import fluride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Service from "./Service";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluride Treatment",
      description: "If a dog chews shoes whose shoes does he choose?",
      img: fluride,
    },
    {
      _id: 2,
      title: "Cavity Filling",
      description: "If a dog chews shoes whose shoes does he choose?",
      img: cavity,
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      description: "If a dog chews shoes whose shoes does he choose?",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <h3 className="text-center text-2xl text-bold uppercase text-primary ">
        Our Services
      </h3>
      <h2 className="text-center text-4xl">Services We Provide</h2>
      <div className="mt-10 grid grid-cols-1 px-2 gap-7 md:grid-cols-3 md:gap-5 md:px-12">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className="hero mt-36">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            alt="treatment"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="md:ml-20">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
