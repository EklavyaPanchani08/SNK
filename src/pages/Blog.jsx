import React from "react";
import Banner from "../components/Banner";
import BlogCompanies from "../components/BlogCompanies";
import WhatsappButton from "../components/WhatsappButton";
import blog1 from "../assets/videos/blog1.mp4";
import blog2 from "../assets/videos/blog2.mp4";
import blog3 from "../assets/videos/blog3.mp4";
import { Col, Row } from "reactstrap";
import "../css/blog.css";

const Blog = () => {
  return (
    <>
      <Banner title="Blog" />

      <div className="container">
        <Row className="m-5 blog-main align-items-center">
          <Col md={6}>
            <video muted className="blog-img" controls>
              <source src={blog1} type="video/mp4" />
            </video>
          </Col>
          <Col md={6}>
            <h3 className="mb-4">Appreciation for Logistic Services</h3>
            <p className="blog-des">
              The International Conference & Exhibition is the only event in
              Europe where around 300 supply chain professionals and digital
              transformation specialists from more than 20 countries come
              together and discuss the most important logistic problems…
            </p>
          </Col>
        </Row>
        <Row className="m-5 blog-main align-items-center">
        <Col md={6}>
            <video muted className="blog-img" controls>
              <source src={blog2} type="video/mp4" />
            </video>
          </Col>
          <Col md={6}>
            <h3 className="mb-4">Managing the Inbound Auto Supply Chain</h3>
            <p className="blog-des">
              The International Conference & Exhibition is the only event in
              Europe where around 300 supply chain professionals and digital
              transformation specialists from more than 20 countries come
              together and discuss the most important logistic problems…
            </p>
          </Col>
        </Row>
        <Row className="m-5 blog-main align-items-center">
        <Col md={6}>
            <video muted className="blog-img" controls>
              <source src={blog3} type="video/mp4" />
            </video>
          </Col>
          <Col md={6}>
            <h3 className="mb-4">Appreciation for Logistic Services</h3>
            <p className="blog-des">
              No matter where you are or what you need, we have you covered with
              solutions backed by broad expertise and international reach.
            </p>
          </Col>
        </Row>
      </div>
      <div class="container my-5">
        <BlogCompanies />
      </div>

      <WhatsappButton />
    </>
  );
};

export default Blog;
