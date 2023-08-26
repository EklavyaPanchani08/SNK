import React from "react";
import { useTranslation } from 'react-i18next';
import Banner from "../components/Banner";
import BlogCompanies from "../components/BlogCompanies";
import WhatsappButton from "../components/WhatsappButton";
import blog1 from "../assets/videos/blog1.mp4";
import blog2 from "../assets/videos/blog2.mp4";
import blog3 from "../assets/videos/blog3.mp4";
import { Col, Row } from "reactstrap";
import "../css/blog.css";

const Blog = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner title={t('home.blog.bannerTitle')} />

      <div className="container">
        <Row className="m-5 blog-main align-items-center">
          <Col md={6}>
            <video muted className="blog-img" controls>
              <source src={blog1} type="video/mp4" />
            </video>
          </Col>
          <Col md={6}>
            <h3 className="mb-4">{t('blog.firstBlog.title')}</h3>
            <p className="blog-des">{t('blog.firstBlog.desc')}</p>
          </Col>
        </Row>
        <Row className="m-5 blog-main align-items-center">
          <Col md={6}>
            <video muted className="blog-img" controls>
              <source src={blog2} type="video/mp4" />
            </video>
          </Col>
          <Col md={6}>
            <h3 className="mb-4">{t('blog.secondBlog.title')}</h3>
            <p className="blog-des">{t('blog.secondBlog.desc')}</p>
          </Col>
        </Row>
        <Row className="m-5 blog-main align-items-center">
          <Col md={6}>
            <video muted className="blog-img" controls>
              <source src={blog3} type="video/mp4" />
            </video>
          </Col>
          <Col md={6}>
            <h3 className="mb-4">{t('blog.thirdBlog.title')}</h3>
            <p className="blog-des">{t('blog.thirdBlog.desc')}</p>
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
