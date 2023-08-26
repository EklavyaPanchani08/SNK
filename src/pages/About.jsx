import React from "react";
import { useTranslation } from 'react-i18next';
import { Col, Row, Button } from "reactstrap";
import Banner from "../components/Banner";
import logoBlack from "../assets/icon/logo-black.png";
import about1 from "../assets/icon/about-1.png";
import about2 from "../assets/icon/about-2.png";
import about3 from "../assets/icon/about-3.png";
import about4 from "../assets/icon/about-4.png";
import "../css/about.css";
import BlogCompanies from "../components/BlogCompanies";
import WhatsappButton from "../components/WhatsappButton";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner title={t('aboutUs.bannerTitle')} />

      <div className="container my-5">
        <div className="about-us-title">
          <h1>{t('aboutUs.title')}</h1>
          <h2>{t('aboutUs.subTitle')}</h2>
        </div>
        <Row className="align-content-center py-2">
          <Col>
            <div className="about-us-logo">
              <img src={logoBlack} alt="about" />
            </div>
          </Col>
          <Col className="about-us-content">
            <h3>{t('aboutUs.content.title')}</h3>
            <p>{t('aboutUs.content.desc')}</p>
          </Col>
        </Row>
      </div>

      <div style={{ background: "#000" }} className="py-5">
        <div className="container d-flex" style={{ flexDirection: "column" }}>
          <Button className="about-us-button">{t('aboutUs.about.button')}</Button>
          <Row className="mt-5 about-quality">
            <Col md={6}>
              <div
                className="px-4 d-flex justify-content-start my-3 mx-2 align-items-center"
                style={{ background: "#151515", height: "200px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  className="me-3"
                  src={about1}
                  alt="about1"
                />
                <div>
                  <h5 className="mb-3" style={{ fontWeight: "500" }}>
                    {t('aboutUs.about.firstBox.title')}
                  </h5>
                  <p>{t('aboutUs.about.firstBox.desc')}</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="px-4 d-flex justify-content-start my-3 mx-2 align-items-center"
                style={{ background: "#151515", height: "200px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  className="me-3"
                  src={about2}
                  alt="about1"
                />
                <div>
                  <h5 className="mb-3" style={{ fontWeight: "500" }}>
                    {t('aboutUs.about.secondBox.title')}
                  </h5>
                  <p>{t('aboutUs.about.secondBox.desc')}</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="px-4 d-flex justify-content-start my-3 mx-2 align-items-center"
                style={{ background: "#151515", height: "200px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  className="me-3"
                  src={about3}
                  alt="about1"
                />
                <div>
                  <h5 className="mb-3" style={{ fontWeight: "500" }}>
                    {t('aboutUs.about.thirdBox.title')}
                  </h5>
                  <p>{t('aboutUs.about.thirdBox.desc')}</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="px-4 d-flex justify-content-start my-3 mx-2 align-items-center"
                style={{ background: "#151515", height: "200px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  className="me-3"
                  src={about4}
                  alt="about1"
                />
                <div>
                  <h5 className="mb-3" style={{ fontWeight: "500" }}>
                    {t('aboutUs.about.fourthBox.title')}
                  </h5>
                  <p>{t('aboutUs.about.fourthBox.desc')}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div class="container my-5">
        <BlogCompanies />
      </div>

      <WhatsappButton />
    </>
  );
};

export default About;
