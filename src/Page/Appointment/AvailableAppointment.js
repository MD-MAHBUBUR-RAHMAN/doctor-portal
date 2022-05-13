import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [bookings, setBookings] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h2 className="text-secondary text-xl text-center">
        Available Appointments on {format(selectedDate, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookings.map((booking) => (
          <Booking
            key={booking._id}
            setTreatment={setTreatment}
            booking={booking}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
