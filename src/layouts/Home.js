import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Home = (props) => {
  return (
    <div className="fullHeight">
    {/* <div> */}
      <Header />
      {props.children}
      <Footer />
      </div>
  );
};

export default Home;
