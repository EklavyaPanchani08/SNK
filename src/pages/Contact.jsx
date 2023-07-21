import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import logoBlack from "../assets/icon/logo-black.png";
import phone from "../assets/icon/phone.png";
import mail from "../assets/icon/mail.png";
import location from "../assets/icon/location.png";
import Banner from "../components/Banner";
import "../css/contact.css";
import BlogCompanies from "../components/BlogCompanies";
import WhatsappButton from "../components/WhatsappButton";
const Contact = () => {
  return (
    <>
      <Banner title="Contact Us" />

      {/* CONTACT FORM */}
      <div className="container">
        <Row className="my-5">
          <Col md={6}>
            <h3 className="form-time-h3">Let’s Talk!</h3>
            <p className="form-time-p">
              Get in touch with us using the enquiry form or contact details
              below.
            </p>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      className="contact-input"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first Name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      className="contact-input"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your Last Name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  className="contact-input"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Comment or Message</Label>
                <Input
                  className="contact-input"
                  id="message"
                  name="message"
                  placeholder="Enter your comment or message"
                  type="textarea"
                />
              </FormGroup>
              <Button className="btn btn-black px-4 py-2">Submit</Button>
            </Form>
          </Col>

          <Col md={6}>
            <img
              src={logoBlack}
              className="d-flex justify-content-center mx-auto"
              width="220px"
              alt="logoBlack"
            />
            <div>
              <div className="d-flex justify-content-start my-4 align-content-center">
                <img
                  className="me-2"
                  width="35px"
                  height="35px"
                  src={phone}
                  alt=""
                />
                <p style={{ fontSize: "16px" }}>+919327913949</p>
              </div>
              <div className="d-flex justify-content-start my-4 align-content-center">
                <img
                  className="me-2"
                  width="35px"
                  height="35px"
                  src={mail}
                  alt=""
                />
                <p style={{ fontSize: "16px" }}>+info@kirtiexportimport.com</p>
              </div>
              <div className="d-flex justify-content-start my-4 align-content-center">
                <img
                  className="me-2"
                  width="35px"
                  height="35px"
                  src={location}
                  alt=""
                />
                <p style={{ fontSize: "16px" }}>
                  +TY 89 , Business Center , Vesu Road , Surat , Gujarat
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* MAP SECTION */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80277.10359717274!2d72.81028713510291!3d21.154831446410416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1689952709738!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>

      <div class="container my-5">
        <BlogCompanies />
      </div>

      <WhatsappButton />
    </>
  );
};

export default Contact;
