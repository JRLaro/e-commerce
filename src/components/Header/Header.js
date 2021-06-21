import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Logo from "./../../assets/pseudoLogo-01.png";
import { auth } from "../../firebase/utils";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/home">
            <img src={Logo} alt="Pseudo Logo" />
          </Link>
        </div>
        <div className="nav">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>Logout</span>  
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
