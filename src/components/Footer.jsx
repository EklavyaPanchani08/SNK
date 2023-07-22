import React from "react";
import { Button, Col, Input, NavLink, Row } from "reactstrap";
import logo from "../assets/icon/logo-black.png";
import facebook from "../assets/icon/footer-facebook.png";
import instagram from "../assets/icon/footer-instagram.png";
import twitter from "../assets/icon/twitter.png";
import linkdin from "../assets/icon/footer-linkdin.png";
import youtube from "../assets/icon/footer-youtube.png";
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
            <p>TY 89 Business center vesu Road Surat ,Gujarat , India 394221</p>
            <p className="my-2">+91 93275 58693</p>
            <p>snkinternational8782@gmail.com</p>
          </Col>
          <Col md={2} className="second">
            <h5 className="mb-4">Services</h5>
            <p>Tomatoes</p>
            <p>Maize</p>
            <p>Wheat flour</p>
            <p>Lemon</p>
          </Col>
          <Col md={2} className="third">
            <h5 className="mb-4">Company</h5>
            <p>Green chilly</p>
            <p>Apple</p>
            <p>Coconut</p>
            <p>Pomegranate</p>
          </Col>
          <Col md={2} className="fourth">
            <h5 className="mb-4">Resources</h5>
            <NavLink href="/"><p>Home</p></NavLink>
            <NavLink href="/about-us"><p>About</p></NavLink>
            <NavLink href="/contact-us"><p>Contact Us</p></NavLink>
            <NavLink href="/gallery"><p>Gallery</p></NavLink>
          </Col>
          <Col md={3}>
            <h5 className="mb-4">Subscribe</h5>
            <Input className="ipnut-subscribe" placeholder="Your email" />
            <Button className="btn btn-started mt-4">Get started</Button>
            <div className="d-flex mt-5 justify-content-center">
              <Button className="btn btn-social mx-1 px-2 py-2">
                <img src={facebook} alt="facebook" />
              </Button>
              <Button className="btn btn-social mx-1 py-2" style={{paddingRight:'10px',paddingLeft:'10px'}}>
                <img src={twitter} alt="twitter" />
              </Button>
              <Button className="btn btn-social mx-1 px-2 py-2">
                <img src={youtube} alt="youtube" />
              </Button>
              <Button className="btn btn-social mx-1 py-2" style={{paddingRight:'10px',paddingLeft:'10px'}}>
                <img src={linkdin} alt="linkdin" />
              </Button>
              <Button className="btn btn-social mx-1 py-2" style={{paddingRight:'10px',paddingLeft:'10px'}}>
                <img src={instagram} alt="instagram" />
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
