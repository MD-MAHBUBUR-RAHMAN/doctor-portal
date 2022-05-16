import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Nav from "./Page/Shared/Nav";
import Login from "./Page/Login/Login";
import NotFound from "./Page/Notfound/NotFound";
import Appointment from "./Page/Appointment/Appointment";
import SignUp from "./Page/Login/SignUp";
import RequireAuth from "./Page/Login/RequireAuth";
import Dashboard from "./Page/Dashbord/Dashboard";
import MyAppointment from "./Page/Dashbord/MyAppointment";
import MyReview from "./Page/Dashbord/MyReview";
import MyHistory from "./Page/Dashbord/MyHistory";

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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
