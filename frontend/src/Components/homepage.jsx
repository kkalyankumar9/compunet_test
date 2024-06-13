import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navBar";


import { useSelector } from "react-redux";

const Homepage = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  return (
    <div className="text-center text-4xl p-4">
      <Navbar />

{isAuth&& <h1>Landing Page</h1>}

   
    </div>
  );
};

export default Homepage;
