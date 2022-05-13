import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const selectedDate = date ? date : new Date();
  return (
    <div className="max-w-[1450px] mx-auto px-20">
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment selectedDate={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
