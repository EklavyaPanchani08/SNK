import React from "react";
import Banner from "../components/Banner";
import BlogCompanies from "../components/BlogCompanies";
import WhatsappButton from "../components/WhatsappButton";

const Gallery = () => {
  return (
    <>
      <Banner title="Gallerys" />
      <div class="container my-5">
        <BlogCompanies />
      </div>

      <WhatsappButton />
    </>
  );
};

export default Gallery;
