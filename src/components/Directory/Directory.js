import React from "react";
import PriceList from "./../../assets/lashes.png";
import Ex from "./../../assets/shopMens.jpeg";
import Ex2 from "./../../assets/shopWomens.jpg";
import './directory.scss'

const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
        //   style={{ backgroundImage: `url(${PriceList})` }}
          style={{ backgroundImage: `url(${Ex})` }}
              >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a> Browse Around</a>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${Ex2})` }}
              >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a> Browse Around</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
