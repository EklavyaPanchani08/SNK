import React from "react";
import Header from "./Header";
import "../css/banner.css";

const Banner = ({ title }) => {
  return (
    <>
      <div className="banner-main">
        <Header />
        <div className="container banner">
        <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
