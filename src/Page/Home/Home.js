import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeappointmentHome from "./MakeappointmentHome";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Info />
      <Services />
      <MakeappointmentHome />
      <Testimonials />
    </div>
  );
};

export default Home;
