import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navBar";


import { useSelector } from "react-redux";

const Homepage = () => {
  return (
    <div className="text-center text-4xl p-4">
      <Navbar />
   
    </div>
  );
};

export default Homepage;
