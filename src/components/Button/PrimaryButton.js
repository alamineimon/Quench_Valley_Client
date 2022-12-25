import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <div className={`navbar-end lastNav ${classes}`}>
      <Link to="/login">LOGIN</Link>
    </div>
    // <Link
    //   onClick={handler}
    //   className={`hover:text-white bg-gradient-to-r from-emerald-500 to-blue-400 text-white ${classes}`}
    // >
    //   {children}
    // </Link>
    // <button
    //   onClick={handler}
    //   className={`hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-blue-400 text-white ${classes}`}
    // >
    //   {children}
    // </button>
  );
};

export default PrimaryButton;
