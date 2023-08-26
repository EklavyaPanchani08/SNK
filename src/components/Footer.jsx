import React from "react";
import { useTranslation } from 'react-i18next';
import { Button, Col, Input, NavLink, Row } from "reactstrap";
// import logo from "../assets/icon/logo-black.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import twitter from "../assets/icon/twitter.png";
import "../css/footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-main">
      <div className="container">
        <Row className="align-items-start footer-row">
          <Col className="first" md={3}>
              {/* <img width="100%" src={logo} alt="logo" /> */}
              <h5 className="mb-4">Head Office</h5>
            <p>{t('footer.content.address')}</p>
            <p className="my-2">{t('footer.content.mobile')}</p>
            <p>{t('footer.content.email')}</p>
          </Col>
          <Col md={3} className="fourth ps-5">
            <h5 className="mb-4">{t('footer.resources.title')}</h5>
            <NavLink href="/">
              <p>{t('footer.resources.home')}</p>
            </NavLink>
            <NavLink href="/about-us">
              <p>{t('footer.resources.about')}</p>
            </NavLink>
            <NavLink href="/contact-us">
              <p>{t('footer.resources.content')}</p>
            </NavLink>
            <NavLink href="/blog">
              <p>{t('footer.resources.blog')}</p>
            </NavLink>
          </Col>
          <Col md={3} className="third">
            <h5 className="mb-4">{t('footer.product.title')}</h5>
            <NavLink href="/product/vegetables">
              <p>{t('footer.product.nameOne')}</p>
            </NavLink>
            <NavLink href="/product/fruits">
              <p>{t('footer.product.nameTwo')}</p>
            </NavLink>
          </Col>
          <Col md={3}>
            <h5 className="mb-4">{t('footer.subscribe.title')}</h5>
            <Input className="ipnut-subscribe" placeholder={t('footer.subscribe.emailTitle')} />
            <Button className="btn btn-started mt-4">{t('footer.subscribe.getStarted')}</Button>
            <div className="d-flex mt-5 justify-content-center">
              <Button className="btn btn-social mx-1 px-2">
                <a href="https://www.facebook.com/bhart.khatik?mibextid=2JQ9oc">
                  <img src={facebook} alt="facebook" width="25px" height="25px" />
                </a>
              </Button>
              <Button
                className="btn btn-social mx-1 py-2"
                style={{ paddingRight: "10px", paddingLeft: "10px" }}
              >
                <a href="https://twitter.com/snkinter8287">
                  <img src={twitter} alt="twitter" width="20px" height="20px" />
                </a>
              </Button>
              <Button
                className="btn btn-social mx-1"
                style={{ padding: '0px 5px' }}
              >
                <a href="https://instagram.com/snk_international_expoter?igshid=OGQ5ZDc2ODk2ZA==">
                  <img src={instagram} alt="instagram" width="30px" height="30px" />
                </a>
              </Button>
            </div>
          </Col>
        </Row>
        <h6
          className="d-flex justify-content-center m-0"
          style={{ fontWeight: "600" }}
        >
          {t('footer.copyRight')}
        </h6>
      </div>
    </div>
  );
};

export default Footer;
