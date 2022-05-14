import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Nav from "./Page/Shared/Nav";
import Login from "./Page/Login/Login";
import NotFound from "./Page/Notfound/NotFound";
import Appointment from "./Page/Appointment/Appointment";
import SignUp from "./Page/Login/SignUp";
import RequireAuth from "./Page/Login/RequireAuth";

function App() {
  return (
    <div className="2xl:w-[1450px] 2xl:mx-auto border">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
