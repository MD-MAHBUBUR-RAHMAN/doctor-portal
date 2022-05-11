import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home/Home";
import About from "./Page/About/About";
import Nav from "./Page/Shared/Nav";
import Login from "./Page/Login/Login";
import NotFound from "./Page/Notfound/NotFound";

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
