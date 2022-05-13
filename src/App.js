import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Nav from "./Page/Shared/Nav";
import Login from "./Page/Login/Login";
import NotFound from "./Page/Notfound/NotFound";
import Appointment from "./Page/Appointment/Appointment";

function App() {
  return (
    <div className="2xl:w-[1450px] 2xl:mx-auto border">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
