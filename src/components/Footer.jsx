import React from "react";
import { Button, Col, Input, NavLink, Row } from "reactstrap";
import logo from "../assets/icon/logo-black.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import twitter from "../assets/icon/twitter.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <Row className="align-items-start footer-row">
          <Col className="first" md={3}>
            <div className="logo-div mb-5">
              <img width="100%" src={logo} alt="logo" />
            </div>
            <p>Office:-2193, Raajmahal mall opp fire station Dindoli 394210</p>
            <p className="my-2">+91 93275 58693</p>
            <p>snkinternational8782@gmail.com</p>
          </Col>
          <Col md={3} className="fourth ps-5">
            <h5 className="mb-4">Resources</h5>
            <NavLink href="/">
              <p>Home</p>
            </NavLink>
            <NavLink href="/about-us">
              <p>About</p>
            </NavLink>
            <NavLink href="/contact-us">
              <p>Contact Us</p>
            </NavLink>
            <NavLink href="/blog">
              <p>Blog</p>
            </NavLink>
          </Col>
          <Col md={3} className="third">
            <h5 className="mb-4">Product</h5>
            <NavLink href="/product/vegetables">
              <p>Vegetables</p>
            </NavLink>
            <NavLink href="/product/fruits">
              <p>Fruits</p>
            </NavLink>
          </Col>
          <Col md={3}>
            <h5 className="mb-4">Subscribe</h5>
            <Input className="ipnut-subscribe" placeholder="Your email" />
            <Button className="btn btn-started mt-4">Get started</Button>
            <div className="d-flex mt-5 justify-content-center">
              <Button className="btn btn-social mx-1 px-2">
                <a href="https://www.facebook.com/bhart.khatik?mibextid=2JQ9oc">
                  <img src={facebook} alt="facebook" width="25px"height="25px"/>
                </a>
              </Button>
              <Button
                className="btn btn-social mx-1 py-2"
                style={{ paddingRight: "10px", paddingLeft: "10px" }}
              >
                <a href="https://twitter.com/snkinter8287">
                  <img src={twitter} alt="twitter" width="20px"height="20px"/>
                </a>
              </Button>
              <Button
                className="btn btn-social mx-1"
                style={{ padding:'0px 5px'}}
              >
                <a href="https://instagram.com/snk_international_expoter?igshid=OGQ5ZDc2ODk2ZA==">
                  <img src={instagram} alt="instagram" width="30px"height="30px"/>
                </a>
              </Button>
            </div>
          </Col>
        </Row>
        <h6
          className="d-flex justify-content-center m-0"
          style={{ fontWeight: "600" }}
        >
          ©All Copyright Reserved by SNK INTERNATION | Developed by Meet
          Kathiriya
        </h6>
      </div>
    </div>
  );
};

export default Footer;
