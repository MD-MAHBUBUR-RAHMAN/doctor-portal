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
      className="md:flex sm:items-center"
    >
      <div className="hidden md:block sm:flex-1  mt-[-100px]">
        <img src={doctorSmall} alt="" className="" />
      </div>
      <div className="sm:flex-1 text-white leading-loose py-[72px] px-7 md:pr-32">
        <h3 className="text-primary text-xl font-bold">Appointment</h3>
        <h2 className="text-2xl md:text-4xl">Make an appointment Today</h2>
        <p>
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
