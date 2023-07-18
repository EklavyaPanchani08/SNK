import React from "react";
import { Button } from "reactstrap";
import Header from "./Header";
import "../css/banner.css";

const Banner = ({ title, subTitter, button }) => {
  return (
    <>
      <div className="banner-main">
        <Header />
        <div className="container banner">
        <h1>{title}</h1>
        <p className="pt-1 pb-3">{subTitter}</p>
        <Button className="btn btn-black">{button}</Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
