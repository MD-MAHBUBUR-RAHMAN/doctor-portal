import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Connect = () => {
  return (
    <div
      className="py-10"
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-center text-2xl text-bold uppercase text-primary ">
        Connect Us
      </h2>
      <h5 className="text-center text-3xl font-light text-white">
        Stay connected with us
      </h5>
      <div className="w-1/2 mx-auto">
        <form>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered w-full my-5 "
          />
          <input
            type="text"
            placeholder="subject"
            className="input input-bordered w-full my-5 "
          />
          <textarea
            type="text"
            placeholder="Your message"
            className="input input-bordered w-full my-5 min-h-[136px]"
          />
          <div className="flex justify-center">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
