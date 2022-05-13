import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const patient = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    console.log({ _id, name, slot, patient, phone, email });
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">treatment for: {name}</h3>
          <div className="">
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-5 justify-items-center mt-5"
            >
              <input
                type="text"
                disabled
                value={format(date, "PP")}
                className="input input-bordered w-full max-w-xs"
              />
              <select
                name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                placeholder="YourName"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="number"
                name="phone"
                placeholder="Your Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary input-bordered w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
