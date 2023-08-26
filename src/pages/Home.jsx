import React from "react";
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import mapIcon from "../assets/img/map.png";
import arrow from "../assets/icon/arrow.png";
import ship from "../assets/icon/ship.png";
import network from "../assets/icon/network.png";
import logoBlack from "../assets/icon/logo-black.png";
import customer1 from "../assets/img/customer-1.png";
import customer2 from "../assets/img/customer-2.png";
import trasport from "../assets/img/trasport.png";
import trasport2 from "../assets/img/trasport2.png";
import { Button, Col, Input, Row, UncontrolledCollapse } from "reactstrap";
import BannerForHome from "../components/BannerForHome";
import WhatsappButton from "../components/WhatsappButton";
import BlogCompanies from "../components/BlogCompanies";
import whoWeAre from "../assets/img/who-we-are.jpg"
// import { product } from "../data/HomeProduct";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <BannerForHome
        title={t('home.banner.title')}
        subTitter={t('home.banner.subTitle')}
        button={t("home.banner.button")}
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
              <h6>{t('home.banner.signup.title')}</h6>
              {/* eslint-disable-next-line */}
              <a href="#" style={{ fontSize: "12px" }}>
                {t('home.banner.signup.button')} <img className="ms-1" src={arrow} alt="" />
              </a>
            </div>
          </div>
        </Col>

        <Col className="map-subscribe">
          <Input className="ipnut-subscribe" placeholder={t('home.banner.signup.search')} />
          <Button className="btn btn-started ms-1 btn-black">{t('home.banner.signup.searchButton')}</Button>
        </Col>
      </Row>

      {/* SERVICES */}
      <div className="container services-main my-5">
        <div className="services-first">
          <h1>{t('home.services.title')}</h1>
          <h2>{t('home.services.subTitle')}</h2>
        </div>

        <Row className="mt-5 services-second">
          <Col>
            <img style={{ width: "80px" }} src={ship} alt="ship" />
            <h5 className="my-2">{t('home.services.firstService.title')}</h5>
            <p>{t('home.services.firstService.subTitle')}</p>
          </Col>
          <Col>
            <img style={{ width: "80px" }} src={network} alt="network" />
            <h5 className="my-2">{t('home.services.secondService.title')}</h5>
            <p>{t('home.services.secondService.subTitle')}</p>
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
              <h3>{t('home.aboutUs.title')}</h3>
              <p>{t('home.aboutUs.content')}</p>
              <a href="/about-us">
                <Button className="btn btn-started btn-black">
                  {t('home.aboutUs.readMore')} <img src={arrow} alt="arrow" />
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      </div>

      {/* whoWeAre */}
      <div className="my-3">
        <img style={{maxWidth:'100%'}} src={whoWeAre} alt="whoWeAre" />
      </div>

      {/* REVIEW */}
      <div className="container" style={{ padding: "70px 0px" }}>
        <h2 className="pb-4">{t('home.reviews.title')}</h2>

        <Slider slidesToShow={2} auto>
          <div>
            <div className="m-3 review">
              <p>{t('home.reviews.customerOne.content')}</p>
              <div className="review-inner d-flex justify-content-flex-start align-content-center pt-3">
                <img src={customer1} alt="client" />
                <div className="ms-3">
                  <h5 className="mb-0">{t('home.reviews.customerOne.title')}</h5>
                  <span>{t('home.reviews.customerOne.subTitle')}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="m-3 review">
              <p>{t('home.reviews.customerTwo.content')}</p>
              <div className="review-inner d-flex justify-content-flex-start align-content-center pt-3">
                <img src={customer2} alt="client" />
                <div className="ms-3">
                  <h5 className="mb-0">{t('home.reviews.customerTwo.title')}</h5>
                  <span>{t('home.reviews.customerTwo.subTitle')}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="m-3 review">
              <p>{t('home.reviews.customerThree.content')}</p>
              <div className="review-inner d-flex justify-content-flex-start align-content-center pt-3">
                <img src={customer1} alt="client" />
                <div className="ms-3">
                  <h5 className="mb-0">{t('home.reviews.customerThree.title')}</h5>
                  <span>{t('home.reviews.customerThree.subTitle')}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="m-3 review">
              <p>{t('home.reviews.customerFour.content')}</p>
              <div className="review-inner d-flex justify-content-flex-start align-content-center pt-3">
                <img src={customer2} alt="client" />
                <div className="ms-3">
                  <h5 className="mb-0">{t('home.reviews.customerFour.title')}</h5>
                  <span>{t('home.reviews.customerFour.subTitle')}</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <hr />

      {/* PRODUCT */}
      {/* <div className="product-main container">
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
              <div className="mx-2 my-4 product">
                <img src={item?.img} alt={item?.title} />
                <h5 className="mt-4 mb-3">{item?.title}</h5>
                <p>{item?.dis}</p>
                <Button className="btn mt-3">Whatsapp</Button>
              </div>
            </Col>
          ))}
        </Row>
      </div> */}

      <div>
        <Row style={{ width: "100%", height: "500px" }} className="m-0">
          <Col md={6} className="trspot-1">
            <div className="my-2 toggle-main">
              <div className="toggle-div cursor-pointer" id="toggler1">
                <span>{t('home.questions.firstQuestion.title')}</span>
              </div>
              <UncontrolledCollapse toggler="#toggler1">
                <p>{t('home.questions.firstQuestion.subTitle')}</p>
              </UncontrolledCollapse>
              :
            </div>

            <div className="my-2 toggle-main">
              <div className="toggle-div cursor-pointer" id="toggler2">
                <span>{t('home.questions.secondQuestion.title')}</span>
              </div>
              <UncontrolledCollapse toggler="#toggler2">
                <p>{t('home.questions.secondQuestion.subTitle')}</p>
              </UncontrolledCollapse>
            </div>

            <div className="my-2 toggle-main">
              <div className="toggle-div cursor-pointer" id="toggler3">
                <span>{t('home.questions.thirdQuestion.title')}</span>
              </div>
              <UncontrolledCollapse toggler="#toggler3">
                <p>{t('home.questions.thirdQuestion.subTitle')}</p>
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
              <h2>{t('home.questions.title')}</h2>

              <div className="my-4">
                <div className="d-flex justify-content-between">
                  <h6 className="range-title">{t('home.questions.contentOne')}</h6>
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
                  <h6 className="range-title">{t('home.questions.contentTwo')}</h6>
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
                  <h6 className="range-title">{t('home.questions.contentThree')}</h6>
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
            <h1>{t('home.blog.title')}</h1>
            <h3>{t('home.blog.subTitle')}</h3>
          </div>
          <BlogCompanies />
        </div>
      </div>

      <WhatsappButton />
    </>
  );
};

export default Home;
