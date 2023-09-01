import React from "react";
import { useTranslation } from 'react-i18next';
import fruit1 from "../assets/img/Fruits/fruit1.png";
import fruit2 from "../assets/img/Fruits/fruit2.png";
import fruit3 from "../assets/img/Fruits/fruit3.jpg";
import fruit4 from "../assets/img/Fruits/fruit4.jpg";
// import fruit5 from "../assets/img/Fruits/fruit5.jpg";
import fruit6 from "../assets/img/Fruits/fruit6.jpg";
import fruit7 from "../assets/img/Fruits/fruit7.jpg";
import fruit8 from "../assets/img/Fruits/fruit8.jpg";
// import fruit9 from "../assets/img/Fruits/fruit9.jpg";
import fruit10 from "../assets/img/Fruits/fruit10.jpg";
import fruit11 from "../assets/img/Fruits/fruit11.png";
import { Button, Col, Row } from "reactstrap";
import "../css/fruits.css";

const Fruits = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container my-5">
        <h3
          className="d-flex justify-content-center"
          style={{
            fontFamily: " Playfair Display",
            fontSize: "45px",
            fontStyle: "italic",
            fontWeight: 700,
          }}
        >
          {t('fruits.title')}
        </h3>

        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.mangoes.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.mangoes.para1')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para2')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para3')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para4')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para5')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para6')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para7')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para8')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para9')}</ol>
              <ol className="my-2 list">{t('fruits.mangoes.para10')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit1} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.mangoes.button')}
            </Button></a>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.banana.title')}
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit2} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.banana.button')}
            </Button></a>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.banana.para1')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para2')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para3')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para4')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para5')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para5')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para7')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para8')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para9')}</ol>
              <ol className="my-2 list">{t('fruits.banana.para10')}</ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.lemon.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.lemon.para1')}</ol>
              <ol className="my-2 list">{t('fruits.lemon.para2')}</ol>
              <ol className="my-2 list">{t('fruits.lemon.para3')}</ol>
              <ol className="my-2 list">{t('fruits.lemon.para4')}</ol>
              <ol className="my-2 list">{t('fruits.lemon.para5')}</ol>
              <ol className="my-2 list">{t('fruits.lemon.para6')}</ol>
              <ol className="my-2 list">{t('fruits.lemon.para7')}</ol>
              <ol className="my-2 list">{t('fruits.lemon.para8')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit3} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.lemon.button')}
            </Button></a>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.oranges.title')}
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit4} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.oranges.button')}
            </Button></a>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.oranges.para1')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para2')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para3')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para4')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para5')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para6')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para7')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para8')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para9')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para10')}</ol>
              <ol className="my-2 list">{t('fruits.oranges.para11')}</ol>
            </ul>
          </Col>
        </Row>
        {/* <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.carrots.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.carrots.para1')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para2')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para3')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para4')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para5')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para6')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para7')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para8')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para9')}</ol>
              <ol className="my-2 list">{t('fruits.carrots.para10')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit5} alt="" width="500px" className="mx-auto" />
            eslint-disable-next-line
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.carrots.button')}
            </Button></a>
          </Col>
        </Row> */}
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.muskmelon.title')}
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit6} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.muskmelon.button')}
            </Button></a>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.muskmelon.para1')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para2')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para3')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para4')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para5')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para6')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para7')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para8')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para9')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para10')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para11')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para12')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para13')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para14')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para15')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para16')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para17')}</ol>
              <ol className="my-2 list">{t('fruits.muskmelon.para18')}</ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.peanuts.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.peanuts.para1')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para2')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para3')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para4')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para5')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para6')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para7')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para8')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para9')}</ol>
              <ol className="my-2 list">{t('fruits.peanuts.para10')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit7} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.peanuts.button')}
            </Button></a>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.corn.title')}
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit8} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.corn.button')}
            </Button></a>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.corn.para1')}</ol>
              <ol className="my-2 list">{t('fruits.corn.para2')}</ol>
              <ol className="my-2 list">{t('fruits.corn.para3')}</ol>
              <ol className="my-2 list">{t('fruits.corn.para4')}</ol>
              <ol className="my-2 list">{t('fruits.corn.para5')}</ol>
              <ol className="my-2 list">{t('fruits.corn.para6')}</ol>
              <ol className="my-2 list">{t('fruits.corn.para7')}</ol>
              <ol className="my-2 list">{t('fruits.corn.para8')}</ol>
              <ol className="my-2 list">{t('fruits.corn.para9')}</ol>
            </ul>
          </Col>
        </Row>
        {/* <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.sweetPotato.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.sweetPotato.para1')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para2')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para3')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para4')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para5')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para6')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para7')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para8')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para9')}</ol>
              <ol className="my-2 list">{t('fruits.sweetPotato.para10')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit9} alt="" width="500px" className="mx-auto" />
            eslint-disable-next-line
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.sweetPotato.button')}
            </Button></a>
          </Col>
        </Row> */}
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.cucumber.title')}
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit10} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.cucumber.button')}
            </Button></a>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.cucumber.para1')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para2')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para3')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para4')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para5')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para6')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para7')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para8')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para9')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para10')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para11')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para12')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para13')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para14')}</ol>
              <ol className="my-2 list">{t('fruits.cucumber.para15')}</ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('fruits.pomegranate.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('fruits.pomegranate.para1')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para2')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para3')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para4')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para5')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para6')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para7')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para8')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para9')}</ol>
              <ol className="my-2 list">{t('fruits.pomegranate.para10')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={fruit11} alt="" width="500px" className="mx-auto" />
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('fruits.pomegranate.button')}
            </Button></a>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Fruits;
