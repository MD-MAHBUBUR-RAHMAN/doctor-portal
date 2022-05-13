import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Connect from "./Connect";
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
      <Connect />
      <Footer />
    </div>
  );
};

export default Home;
