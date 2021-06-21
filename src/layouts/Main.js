import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = (props) => {
  return (
    // <div className="fullHeight">
    <div>
      <Header {...props}/>
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Main;
