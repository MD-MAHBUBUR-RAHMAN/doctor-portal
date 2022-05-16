import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="min-h-full w-[280px] sm:w-full mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt=""
            className="max-w-full md:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
