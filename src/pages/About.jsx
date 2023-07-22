import React from "react";
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
  return (
    <>
      <Banner title="About Us" />

      <div className="container my-5">
        <div className="about-us-title">
          <h1>Who We Are?</h1>
          <h2>About SNK International</h2>
        </div>
        <Row className="align-content-center py-2">
          <Col>
            <div className="about-us-logo">
              <img src={logoBlack} alt="about" />
            </div>
          </Col>
          <Col className="about-us-content">
            <h3>About Us</h3>
            <p>
              SNK Internationalstarted in the year 2022 at Surat, Gujarat
              India We Export fresh Vegetables, Fruits , Spices , grains etc.
              Under the leadership of Mr. Pradeep Gupta , the company has
              emerged as one among the leading exporters from India . Total
              customer satisfaction is the main focus of the company . we are
              equipped with a state of art manufacturing unit and production
              facility . The company understands the importance of quality and
              timely delivery of merchandise in the competitive and challenging
              International Business scenario .
            </p>
          </Col>
        </Row>
      </div>

      <div style={{ background: "#000" }} className="py-5">
        <div className="container d-flex" style={{ flexDirection: "column" }}>
          <Button className="about-us-button">SNK INTERNATIONAL</Button>
          <Row className="mt-5 about-quality">
            <Col md={6}>
              <div
                className="px-4 d-flex justify-content-start my-3 mx-2 align-items-center"
                style={{ background: "#151515", height: "150px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  className="me-3"
                  src={about1}
                  alt="about1"
                />
                <div>
                  <h5 style={{ fontWeight: "500" }}>Export</h5>
                  <p>
                    We are Exporting best quality product around the world, You
                    need best product on time you are at right place SNK International
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="px-4 d-flex justify-content-start my-3 mx-2 align-items-center"
                style={{ background: "#151515", height: "150px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  className="me-3"
                  src={about2}
                  alt="about1"
                />
                <div>
                  <h5 style={{ fontWeight: "500" }}>
                    Import agent (for foreign client)
                  </h5>
                  <p>
                    We help foreign company to introduce his best quality
                    product in India and help them to find local partners in
                    India
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="px-4 d-flex justify-content-start my-3 mx-2 align-items-center"
                style={{ background: "#151515", height: "150px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  className="me-3"
                  src={about3}
                  alt="about1"
                />
                <div>
                  <h5 style={{ fontWeight: "500" }}>Sourcing Agent</h5>
                  <p>
                    We are working as local partner of our foreign client to
                    source best quality product from India as per client
                    requirement and Specification
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="px-4 d-flex justify-content-start my-3 mx-2 align-items-center"
                style={{ background: "#151515", height: "150px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  className="me-3"
                  src={about4}
                  alt="about1"
                />
                <div>
                  <h5 style={{ fontWeight: "500" }}>Quality Product</h5>
                  <p>
                    SNK InternationalProvide Quality Product Across World.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div class="container my-5">
        <BlogCompanies />
      </div>

      <WhatsappButton/>
    </>
  );
};

export default About;
