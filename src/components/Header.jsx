import React from "react";
import {
  Row,
  Col,
  NavItem,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Button,
} from "reactstrap";
import { useTranslation } from 'react-i18next';
import logo from "../assets/icon/logo.png";
import clock from "../assets/icon/clock.png";
// import facebook from "../assets/icon/facebook.png";
// import instagram from "../assets/icon/instagram.png";
// import twitter from "../assets/icon/twitter.png";
import "../css/header.css";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };
  return (
    <div className="header-main color-white">
      <div className="app-container">
        <Row className="align-items-center">
          <Col lg={3}>
            <div className="align-items-center d-flex">
              <div>
                <a href="/">
                  <img width="100px" height="100px" src={logo} alt="logo" />
                </a>
              </div>
              <div className="header-time">
                <img src={clock} alt="clock" />
                <span>{t('header.time')}</span>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <Nav className="justify-content-end align-items-center">
              <NavItem>
                <NavLink href="/">{t('header.home')}</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {t('header.product.title')}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink
                      className="product-option-nav-link"
                      href="/product/vegetables"
                    >
                      {t('header.product.firstProduct')}
                    </NavLink>{" "}
                    <hr style={{ margin: "10px 0px 3px 0px" }} />
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className="product-option-nav-link"
                      href="/product/fruits"
                    >
                      {t('header.product.secondProduct')}
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/about-us">{t('header.about')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact-us">{t('header.contact')}</NavLink>
              </NavItem>
              <NavItem></NavItem>
              <NavItem>
                <NavLink href="/blog">{t('header.blog')}</NavLink>
              </NavItem>
              <NavItem className="ms-4 me-3">
                <a href="tel:+9327558693">
                  <Button className="btn btn-white btn-call">
                    {t('header.callUs')}
                  </Button>{" "}
                </a>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {i18n.language === 'en'
                    ? 'English'
                    : i18n.language === 'de'
                      ? 'German'
                      : i18n.language === 'ar'
                        ? 'Arabic'
                        : i18n.language === 'ko'
                          ? 'Korean'
                          : 'Unknown Language'}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink
                      className={`product-option-nav-link ${i18n.language === 'en' ? 'active' : ''
                        }`}
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </NavLink>
                    <hr style={{ margin: '10px 0px 3px 0px' }} />
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className={`product-option-nav-link ${i18n.language === 'de' ? 'active' : ''
                        }`}
                      onClick={() => changeLanguage('de')}
                    >
                      German
                    </NavLink>
                    <hr style={{ margin: '10px 0px 3px 0px' }} />
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className={`product-option-nav-link ${i18n.language === 'ar' ? 'active' : ''
                        }`}
                      onClick={() => changeLanguage('ar')}
                    >
                      Arabic
                    </NavLink>
                    <hr style={{ margin: '10px 0px 3px 0px' }} />
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className={`product-option-nav-link ${i18n.language === 'ko' ? 'active' : ''
                        }`}
                      onClick={() => changeLanguage('ko')}
                    >
                      Korean
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
