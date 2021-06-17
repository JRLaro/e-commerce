import React from "react";
// import Header from "../components/Header/Header";
import Logo from "../assets/pseudoLogo-01.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to="/home">
        
          <img className="welcomeBtn" src={Logo} alt="pseudo logo" />
      
          </Link>
          <h1 className="welcome">Welcome</h1>
    </div>
  );
};

export default Landing;
