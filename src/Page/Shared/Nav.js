import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Reviews</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/contact">ContactUs</Link>
      </li>
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logOut}>
            signOut
          </button>
        ) : (
          <Link to="/login">LoigIn</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start w-full flex justify-between">
        <Link to="/" className="btn btn-ghost normal-case text-xl md:ml-12">
          Doctors Portal
        </Link>
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost md:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <label
            htmlFor="dashbordDrawer"
            className="btn btn-primary drawer-button md:hidden"
          >
            Open
          </label>
        </div>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Nav;
