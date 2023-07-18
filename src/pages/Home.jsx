import React from "react";
import Slider from "react-slick";
import Banner from "../components/Banner";
import mapIcon from "../assets/img/map.png";
import arrow from "../assets/icon/arrow.png";
import ship from "../assets/icon/ship.png";
import network from "../assets/icon/network.png";
import logoBlack from "../assets/icon/logo-black.png";
import customer1 from "../assets/img/customer-1.png";
import customer2 from "../assets/img/customer-2.png";
import trasport from "../assets/img/trasport.png";
import trasport2 from "../assets/img/trasport2.png";
import com1 from "../assets/img/company-1.png";
import com2 from "../assets/img/company-2.png";
import com3 from "../assets/img/company-3.png";
import com4 from "../assets/img/company-4.png";
import com5 from "../assets/img/company-5.png";
import com6 from "../assets/img/company-6.png";
import whatsapp from "../assets/icon/whatsapp.png";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Row,
  UncontrolledCollapse,
} from "reactstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { product } from "../data/HomeProduct";

const Home = () => {
  return (
    <>
      <Banner
        title="We Provide Premium Quality Product"
        subTitter="We pride ourselves on providing the best transport and shipping services available allover the world.
        Our skilled personal, tracking and combined with experience through integrated supply chain solutions!"
        button="Get a Quote"
      />

      {/* MAP & SUBSCRIBE */}
      <Row style={{ color: "white", width: "100%" }}>
        <Col
          style={{
            backgroundColor: "#0C2441",
            position: "relative",
          }}
          className="pt-3"
        >
          <div>
            <img src={mapIcon} alt="map" width="350px" />
            <div style={{ position: "absolute", top: "25px", left: "240px" }}>
              <h6>
                Sign up for industry alerts, insights from SNK INTERNATIONAL
                Export Import
              </h6>
              <a href="#" style={{ fontSize: "12px" }}>
                Get Started <img className="ms-1" src={arrow} alt="" />
              </a>
            </div>
          </div>
        </Col>

        <Col className="map-subscribe">
          <Input className="ipnut-subscribe" placeholder="Your Email Address" />
          <Button className="btn btn-started ms-1 btn-black">Submit</Button>
        </Col>
      </Row>

      {/* SERVICES */}
      <div className="container services-main my-5">
        <div className="services-first">
          <h1>SERVICES</h1>
          <h2>WHAT WE DO</h2>
        </div>

        <Row className="mt-5 services-second">
          <Col>
            <img style={{ width: "80px" }} src={ship} alt="ship" />
            <h5 className="my-2">Export</h5>
            <p>
              We are Exporting best quality product around the world, You need
              best product on time you are at right place @ Kirti Export Import
            </p>
          </Col>
          <Col>
            <img style={{ width: "80px" }} src={network} alt="network" />
            <h5 className="my-2">Sourcing Agent</h5>
            <p>
              We are working as local partner of our foreign client to source
              best quality product from India as per client requirement and
              Specification
            </p>
          </Col>
        </Row>
      </div>

      {/* ABOUT US */}
      <div
        style={{ backgroundColor: "#0C2441", color: "white" }}
        className="py-3"
      >
        <div className="container">
          <Row className="align-content-center py-5">
            <Col>
              <div className="about-us-logo">
                <img src={logoBlack} alt="about" />
              </div>
            </Col>
            <Col className="about-us-content">
              <h3>About Us</h3>
              <p>
                Kirti Export Import started in the year 2022 at Surat, Gujarat
                India We Export All Agriculture Products . Under the leadership
                of Mr. Pradeep Gupta , the company has emerged as one among the
                leading exporters from India . Total customer satisfaction is
                the main focus of the company . we are equipped with a state of
                art manufacturing unit and production facility .
              </p>
              <a href="/about-us">
                <Button className="btn btn-started btn-black">
                  Read More <img src={arrow} alt="arrow" />
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      </div>

      {/* REVIEW */}
      <div className="container" style={{ padding: "70px 0px" }}>
        <h2 className="pb-4">HAPPY CUSTOMERS SAID</h2>

        <Slider slidesToShow={2} auto>
          <div>
            <div className="m-3 review">
              <p>
                “I am only use ZYL logistics for my shipping needs. My clients
                have all come to expect excellent shipping & handling of their
                merchandise.”
              </p>
              <div className="review-inner d-flex justify-content-start align-content-center pt-3">
                <img src={customer1} alt="client" />
                <div className="ms-3">
                  <h5 className="mb-0">Pavan Prajapati</h5>
                  <span>CEO, GIGATRON</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="m-3 review">
              <p>
                “I wanted to take a minute to thank you & your logistic team. I
                have grown comfortable leaning on ZYL Logistics team with some
                of my end of the day.”
              </p>
              <div className="review-inner d-flex justify-content-start align-content-center pt-3">
                <img src={customer2} alt="client" />
                <div className="ms-3">
                  <h5 className="mb-0">Olivia Dench</h5>
                  <span>CEO, AB CONSTRACTION</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="m-3 review">
              <p>
                “I am only use ZYL logistics for my shipping needs. My clients
                have all come to expect excellent shipping & handling of their
                merchandise.”
              </p>
              <div className="review-inner d-flex justify-content-start align-content-center pt-3">
                <img src={customer1} alt="client" />
                <div className="ms-3">
                  <h5 className="mb-0">Pavan Prajapati</h5>
                  <span>CEO, GIGATRON</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="m-3 review">
              <p>
                “I wanted to take a minute to thank you & your logistic team. I
                have grown comfortable leaning on ZYL Logistics team with some
                of my end of the day.”
              </p>
              <div className="review-inner d-flex justify-content-start align-content-center pt-3">
                <img src={customer2} alt="client" />
                <div className="ms-3">
                  <h5 className="mb-0">Olivia Dench</h5>
                  <span>CEO, AB CONSTRACTION</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <hr />

      {/* PRODUCT */}
      <div className="product-main container">
        <div className="product-title">
          <h1>Business</h1>
          <div className="d-flex">
            <h2 style={{ color: "#FF9041" }}>Snk International</h2>
            <h2 style={{ color: "141F72" }}>Top Product</h2>
          </div>
          <p className="mt-3">
            Let’s start the journey towards success and enhance revenue for your
            business. Take your company to the next level.
          </p>
        </div>

        <Row>
          {product?.map((item) => (
            <Col md={4} sm={6}>
              <div className="m-2 product">
                <img src={item?.img} alt={item?.title} />
                <h5 className="mt-4 mb-3">{item?.title}</h5>
                <p>{item?.dis}</p>
                <Button className="btn mt-3">Whatsapp</Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div>
        <Row style={{ width: "100%", height: "500px" }} className="m-0">
          <Col md={6} className="trspot-1">
            <div className="my-2 toggle-main">
              <div className="toggle-div cursor-pointer" id="toggler1">
                <span>01 Trasparent Pricing</span>
              </div>
              <UncontrolledCollapse toggler="#toggler1">
                <p>
                  We are a trusted analytical partner to the financial services
                  and are constantly formulating analytic solutions for large
                  banks. Credit unions, casinos and travel companies. Throughout
                  the globe.
                </p>
              </UncontrolledCollapse>
            </div>

            <div className="my-2 toggle-main">
              <div className="toggle-div cursor-pointer" id="toggler2">
                <span>02 Real Time Tracking</span>
              </div>
              <UncontrolledCollapse toggler="#toggler2">
                <p>
                  We are a trusted analytical partner to the financial services
                  and are constantly formulating analytic solutions for large
                  banks. Credit unions, casinos and travel companies. Throughout
                  the globe.
                </p>
              </UncontrolledCollapse>
            </div>

            <div className="my-2 toggle-main">
              <div className="toggle-div cursor-pointer" id="toggler3">
                <span>03 Experienced Staff</span>
              </div>
              <UncontrolledCollapse toggler="#toggler3">
                <p>
                  We are a trusted analytical partner to the financial services
                  and are constantly formulating analytic solutions for large
                  banks. Credit unions, casinos and travel companies. Throughout
                  the globe.
                </p>
              </UncontrolledCollapse>
            </div>
          </Col>

          <Col md={6} className="p-0">
            <img
              src={trasport}
              alt="trasport"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Col>
        </Row>

        <Row style={{ width: "100%", height: "500px" }} className="m-0">
          <Col md={6} className="p-0">
            <img
              src={trasport2}
              alt="trasport2"
              style={{ maxWidth: "100%", height: "100%" }}
            />
          </Col>

          <Col md={6} className="trspot-2 px-3">
            <div style={{ width: "600px" }}>
              <h2>Moving Your Products Across All Borders</h2>

              <div className="my-4">
                <div className="d-flex justify-content-between">
                  <h6 className="range-title">Insurance & guarantee</h6>
                  <data value="98">98%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="my-4">
                <div className="d-flex justify-content-between">
                  <h6 className="range-title">Logistical Expertise</h6>
                  <data value="91">91%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="my-4">
                <div className="d-flex justify-content-between">
                  <h6 className="range-title">Commercial Expertise</h6>
                  <data value="93">93%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div class="container my-5">
          <div class="home-blog">
            <h1>OUR BLOG</h1>
            <h3>LATEST FROM OUR BLOG</h3>
          </div>

          <Row className="align-item-center">
            <Col
              className="d-flex justify-content-center align-item-center"
              md={2}
            >
              <img
                src={com1}
                alt="company"
                width="80px"
                style={{ objectFit: "contain" }}
                height="80px"
              />
            </Col>
            <Col
              className="d-flex justify-content-center align-item-center"
              md={2}
            >
              <img
                src={com2}
                alt="company"
                width="80px"
                style={{ objectFit: "contain" }}
                height="80px"
              />
            </Col>
            <Col
              className="d-flex justify-content-center align-item-center"
              md={2}
            >
              <img
                src={com3}
                alt="company"
                width="80px"
                style={{ objectFit: "contain" }}
                height="80px"
              />
            </Col>
            <Col
              className="d-flex justify-content-center align-item-center"
              md={2}
            >
              <img
                src={com4}
                alt="company"
                width="80px"
                style={{ objectFit: "contain" }}
                height="80px"
              />
            </Col>
            <Col
              className="d-flex justify-content-center align-item-center"
              md={2}
            >
              <img
                src={com5}
                alt="company"
                width="80px"
                style={{ objectFit: "contain" }}
                height="80px"
              />
            </Col>
            <Col
              className="d-flex justify-content-center align-item-center"
              md={2}
            >
              <img
                src={com6}
                alt="company"
                width="80px"
                style={{ objectFit: "contain" }}
                height="80px"
              />
            </Col>
          </Row>
        </div>
      </div>

      <a href="https://wa.me/8153813384" target="_blank">
        <Button className="btn btn-black whatsapp-button">
          Chat with us{" "}
          <img
            src={whatsapp}
            className="ms-1"
            alt="whatsapp"
            width="30px"
            height="30px"
          />
        </Button>
      </a>
    </>
  );
};

export default Home;
