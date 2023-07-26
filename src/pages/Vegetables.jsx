import React from "react";
import { Button, Col, Row } from "reactstrap";
import Banner from "../components/Banner";
import { VegetablesData } from "../data/VegetablesData";

const Vegetables = () => {
  return (
    <>
      <Banner title="Vegetables" />
      <div className="container my-5">
        <Row>
          {VegetablesData?.map((item) => (
            <Col md={4} sm={6}>
              <div className="mx-2 my-4 product" style={{height:'560px'}}>
                <img src={item?.img} alt={item?.title} />
                <h5 className="mt-4 mb-3">{item?.title}</h5>
                <p>{item?.dis}</p>
                <Button className="btn mt-3">Whatsapp</Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Vegetables;
