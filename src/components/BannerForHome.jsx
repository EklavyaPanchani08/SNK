import React from "react";
import { Button } from "reactstrap";
import Header from "./Header";
import "../css/bannerForHome.css";

const BannerForHome = ({ title, subTitter, button }) => {
  return (
    <>
      <div className="banner-for-home-main">
        <Header />
        <div className="container banner-for-home">
          <h1>{title}</h1>
          <p className="pt-1 pb-3">{subTitter}</p>
          <a href="/about-us">
            <Button className="btn btn-black">{button}</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerForHome;
