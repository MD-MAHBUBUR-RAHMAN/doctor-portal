import React from "react";
import notfound from "../../assets/images/dribbble_1.gif";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
