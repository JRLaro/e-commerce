import React from "react";
import './Footer.scss'

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">{`© J.Laro ${year}`}</div>
    </footer>
  );
};

export default Footer;
