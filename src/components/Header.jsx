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
import logo from "../assets/icon/logo.png";
import clock from "../assets/icon/clock.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import twitter from "../assets/icon/twitter.png";
import "../css/header.css";

const Header = () => {
  return (
    <div className="header-main color-white">
      <div className="app-container">
        <Row className="align-items-center">
          <Col lg={3}>
            <div className="align-items-center d-flex">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div className="header-time">
                <img src={clock} alt="clock" />
                <span>(Mon-Sat) 9:00 - 20:00</span>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <Nav className="justify-content-end align-items-center"> 
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Out Product
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/about-us">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact-us">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gallery">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem className="ms-4 me-3">
                <a href="tel:+918153813384"><Button className="btn btn-white btn-call">Call Us Now</Button> </a>
              </NavItem>
              <NavItem className="d-flex">
                <NavLink className="px-2" href="#">
                  <Button className="btn btn-social" style={{paddingTop:'5px', paddingBottom:'5px'}}>
                    <img src={facebook} alt="facebook" />
                  </Button>
                </NavLink>
                <NavLink className="px-2" href="#">
                  <Button className="btn btn-social" style={{padding:'5px 9px'}}>
                    <img src={instagram} alt="instagram" />
                  </Button> 
                </NavLink>
                <NavLink className="px-2" href="#">
                  <Button className="btn btn-social" style={{padding:'5px 7px'}}>
                    <img src={twitter} alt="twitter" />
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
