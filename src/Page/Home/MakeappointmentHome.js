import React from "react";
// import doctor from "../../assets/images/doctor.png";
import doctorSmall from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeappointmentHome = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appointment})`,
      }}
      className="flex items-center"
    >
      <div className=" flex-1 hidden lg:block">
        <img src={doctorSmall} alt="" className="mt-[-100px]" />
      </div>
      <div className="flex-1 text-white p-5">
        <h3 className="text-primary text-xl font-bold">Appointment</h3>
        <h2 className="text-2xl md:text-4xl py-5">Make an appointment Today</h2>
        <p className="pb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>get started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeappointmentHome;
