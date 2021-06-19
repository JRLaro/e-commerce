import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Logo from "./../../assets/pseudoLogo-01.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/home">
            <img src={Logo} alt="Pseudo Logo" />
          </Link>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
