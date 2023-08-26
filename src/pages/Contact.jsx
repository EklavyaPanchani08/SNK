import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import logoBlack from "../assets/icon/logo-black.png";
import phone from "../assets/icon/phone.png";
import mail from "../assets/icon/mail.png";
import location from "../assets/icon/location.png";
import Banner from "../components/Banner";
import "../css/contact.css";
import BlogCompanies from "../components/BlogCompanies";
import WhatsappButton from "../components/WhatsappButton";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleMailSend = async (e) => {
    e.preventDefault();
    await emailjs
      .send(
        "eklavya_mailer",
        "template_i24wz61",
        {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phone: userData.phone,
          message: userData.message,
        },
        "iB7uMsyQnpT2XRSvF"
      )
      .then((response) => {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success("Your message has been sended successfully 🙌");
      })
      .catch((error) => {
        toast.error("Can't send your message, Please try again ⚠️");
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      });
  };

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Banner title={t('contactUs.bannerTitle')} />
      {/* CONTACT FORM */}
      <div className="container">
        <Row className="my-5">
          <Col md={6}>
            <h3 className="form-time-h3">{t('contactUs.title')}</h3>
            <p className="form-time-p">{t('contactUs.subTitle')}</p>
            <Form onSubmit={handleMailSend}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstName">{t('contactUs.form.fname')}</Label>
                    <Input
                      required
                      className="contact-input"
                      id="firstName"
                      name="firstName"
                      placeholder={t('contactUs.form.fnameLabel')}
                      type="text"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName">{t('contactUs.form.lname')}</Label>
                    <Input
                      required
                      className="contact-input"
                      id="lastName"
                      name="lastName"
                      placeholder={t('contactUs.form.lnameLabel')}
                      type="text"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email">{t('contactUs.form.email')}</Label>
                    <Input
                      required
                      className="contact-input"
                      id="email"
                      name="email"
                      placeholder={t('contactUs.form.emailLabel')}
                      type="email"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email">{t('contactUs.form.phone')}</Label>
                    <Input
                      required
                      className="contact-input"
                      id="phone"
                      name="phone"
                      placeholder={t('contactUs.form.phoneLabel')}
                      type="tel"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for="exampleEmail">{t('contactUs.form.message')}</Label>
                <Input
                  className="contact-input"
                  id="message"
                  name="message"
                  placeholder={t('contactUs.form.messageLabel')}
                  type="textarea"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <Button
                // onClick={handleMailSend}
                className="btn btn-black px-4 py-2"
              >
                {t('contactUs.form.submit')}
              </Button>
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
                <p style={{ fontSize: "16px" }}>+91 9327558693</p>
              </div>
              <div className="d-flex justify-content-start my-4 align-content-center">
                <img
                  className="me-2"
                  width="35px"
                  height="35px"
                  src={mail}
                  alt=""
                />
                <p style={{ fontSize: "16px" }}>
                  thesnkinternational@gmail.com
                </p>
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
      {/* MAP SECTION */}s
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.17019544526!2d72.8776474!3d21.145624099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05103932f5451%3A0x9b8f9cb6eaa51e70!2sRaajmahal%20Mall!5e0!3m2!1sen!2sin!4v1691608663540!5m2!1sen!2sin"
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
