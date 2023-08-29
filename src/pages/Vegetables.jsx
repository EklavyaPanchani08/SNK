import React from "react";
import { useTranslation } from 'react-i18next';
import { Button, Col, Row } from "reactstrap";
import Vegetable1 from "../assets/img/Vegetables/Vegetable1.jpg";
import Vegetable2 from "../assets/img/Vegetables/Vegetable2.jpg";
import Vegetable3 from "../assets/img/Vegetables/Vegetable3.jpg";
import Vegetable4 from "../assets/img/Vegetables/Vegetable4.jpg";
import Vegetable5 from "../assets/img/Vegetables/Vegetable5.jpg";
import Vegetable6 from "../assets/img/Vegetables/Vegetable6.jpg";
import Vegetable7 from "../assets/img/Vegetables/Vegetable7.jpg";
import Vegetable8 from "../assets/img/Vegetables/Vegetable8.jpg";

const Vegetables = () => {
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
          {t('vegetables.title')}
        </h3>

        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('vegetables.oninons.title')}
          </h3>
          <div
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={Vegetable1} alt="" width="500px" className="mx-auto" />
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('vegetables.oninons.button')}
            </Button>
            </a>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{ flexDirection: "column" }}
          >
            <ul className="p-0">
              <ol className="my-4 list">{t('vegetables.oninons.para1')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para2')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para3')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para4')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para5')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para6')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para7')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para8')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para9')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para10')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para11')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para12')}</ol>
              <ol className="my-4 list">{t('vegetables.oninons.para13')}</ol>
            </ul>
          </div>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('vegetables.guav.title')}
          </h3>
          <div
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={Vegetable2} alt="" width="500px" className="mx-auto" />
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('vegetables.guav.button')}
            </Button>
            </a>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{ flexDirection: "column" }}
          >
            <ul className="p-0">
              <ol className="my-4 list">{t('vegetables.guav.para1')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para2')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para3')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para4')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para5')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para6')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para7')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para8')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para9')}</ol>
              <ol className="my-4 list">{t('vegetables.guav.para10')}</ol>
            </ul>
          </div>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('vegetables.okra.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('vegetables.okra.para1')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para2')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para3')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para4')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para5')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para6')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para7')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para8')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para9')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para10')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para11')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para12')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para13')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para14')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para15')}</ol>
              <ol className="my-2 list">{t('vegetables.okra.para16')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={Vegetable3} alt="" width="500px" className="mx-auto" />
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('vegetables.okra.button')}
            </Button>
            </a>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('vegetables.chillies.title')}
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={Vegetable4} alt="" width="500px" className="mx-auto" />
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('vegetables.chillies.button')}
            </Button>
            </a>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('vegetables.chillies.para1')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para2')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para3')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para4')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para5')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para6')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para7')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para8')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para9')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para10')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para11')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para12')}</ol>
              <ol className="my-2 list">{t('vegetables.chillies.para13')}</ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('vegetables.potato.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('vegetables.potato.para1')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para2')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para3')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para4')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para5')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para6')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para7')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para8')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para9')}</ol>
              <ol className="my-2 list">{t('vegetables.potato.para10')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={Vegetable5} alt="" width="500px" className="mx-auto" />
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('vegetables.potato.button')}
            </Button>
            </a>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('vegetables.garlic.title')}
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={Vegetable6} alt="" width="500px" className="mx-auto" />
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('vegetables.garlic.button')}
            </Button>
            </a>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('vegetables.garlic.para1')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para2')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para3')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para4')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para5')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para6')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para7')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para8')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para9')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para10')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para11')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para12')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para13')}</ol>
              <ol className="my-2 list">{t('vegetables.garlic.para14')}</ol>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('vegetables.peas.title')}
          </h3>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('vegetables.peas.para1')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para2')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para3')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para4')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para5')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para6')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para7')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para8')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para9')}</ol>
              <ol className="my-2 list">{t('vegetables.peas.para10')}</ol>
            </ul>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={Vegetable7} alt="" width="500px" className="mx-auto" />
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('vegetables.peas.button')}
            </Button>
            </a>
          </Col>
        </Row>
        <Row className="align-items-flex-start fruits-main justify-content-center my-5">
          <h3 className="d-flex justify-content-center mb-5">
            {t('vegetables.redOkra.title')}
          </h3>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <img src={Vegetable8} alt="" width="500px" className="mx-auto" />
            <a href="https://wa.me/9327558693" target="_blank">
            <Button className="btn mt-3 product-button d-flex mx-auto">
              {t('vegetables.redOkra.button')}
            </Button>
            </a>
          </Col>
          <Col className="d-flex justify-content-start">
            <ul>
              <ol className="my-2 list">{t('vegetables.redOkra.para1')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para2')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para3')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para4')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para5')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para6')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para7')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para8')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para9')}</ol>
              <ol className="my-2 list">{t('vegetables.redOkra.para10')}</ol>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Vegetables;
