import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointment = ({ selectedDate }) => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-secondary text-xl text-center">
        Available Appointments on {format(selectedDate, "PP")}
      </h2>
      <div></div>
    </div>
  );
};

export default AvailableAppointment;
