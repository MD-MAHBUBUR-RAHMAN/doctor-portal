import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Booking from "./Booking";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery(["available", date], () =>
    fetch(`http://localhost:5000/available?date=${date}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-secondary text-xl text-center">
        Available Appointments on {format(selectedDate, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookings?.map((booking) => (
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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
