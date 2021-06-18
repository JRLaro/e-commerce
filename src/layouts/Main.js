import React from "react";
import Header from "../components/Header/Header";

const Main = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      <div className="main">
        {props.children}
      </div>
    </div>
  );
};

export default Main;
