import React from "react";
import { Col, Row } from "reactstrap";
import com1 from "../assets/img/company-1.png";
import com2 from "../assets/img/company-2.png";
import com3 from "../assets/img/company-3.png";
import com4 from "../assets/img/company-4.png";
import com5 from "../assets/img/company-5.png";
import com6 from "../assets/img/company-6.png";

const BlogCompanies = () => {
  return (
    <Row className="align-item-center">
      <Col className="d-flex justify-content-center align-item-center" md={2}>
        <img
          src={com1}
          alt="company"
          width="80px"
          style={{ objectFit: "contain" }}
          height="80px"
        />
      </Col>
      <Col className="d-flex justify-content-center align-item-center" md={2}>
        <img
          src={com2}
          alt="company"
          width="80px"
          style={{ objectFit: "contain" }}
          height="80px"
        />
      </Col>
      <Col className="d-flex justify-content-center align-item-center" md={2}>
        <img
          src={com3}
          alt="company"
          width="80px"
          style={{ objectFit: "contain" }}
          height="80px"
        />
      </Col>
      <Col className="d-flex justify-content-center align-item-center" md={2}>
        <img
          src={com4}
          alt="company"
          width="80px"
          style={{ objectFit: "contain" }}
          height="80px"
        />
      </Col>
      <Col className="d-flex justify-content-center align-item-center" md={2}>
        <img
          src={com5}
          alt="company"
          width="80px"
          style={{ objectFit: "contain" }}
          height="80px"
        />
      </Col>
      <Col className="d-flex justify-content-center align-item-center" md={2}>
        <img
          src={com6}
          alt="company"
          width="80px"
          style={{ objectFit: "contain" }}
          height="80px"
        />
      </Col>
    </Row>
  );
};

export default BlogCompanies;
