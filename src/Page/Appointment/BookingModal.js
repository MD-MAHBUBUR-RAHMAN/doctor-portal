import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, "PP");

  const [user] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const bookingData = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot: slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          toast(`Appointment is set, ${formattedDate}at ${slot}`);
        } else {
          toast.error(
            `Already have an Appointment on, ${data.booking?.date}}at ${data.booking?.slot}`
          );
        }
        refetch();
        // To close the Modal:---------
        setTreatment(null);
      });

    // console.log({ _id, name, slot });
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
                disabled
                value={user?.displayName || ""}
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
                disabled
                value={user?.email || ""}
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
