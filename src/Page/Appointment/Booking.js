import React from "react";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-secondary text-xl font-semibold">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length}{" "}
          {slots.length > 0 ? "Slots Available" : "Slot not Available"}
        </p>
        <div className="card-actions justify-center ">
          <label
            htmlFor="bookingModal"
            className="btn modal-button btn-secondary text-white bg-gradient-to-r from-secondary to-primary"
            onClick={() => setTreatment(booking)}
            disabled={slots.length === 0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;
