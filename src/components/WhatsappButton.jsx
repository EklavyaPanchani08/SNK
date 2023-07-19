import React from "react";
import { Button } from "reactstrap";
import whatsapp from "../assets/icon/whatsapp.png";

const WhatsappButton = () => {
  return (
    <>
      {/* eslint-disable-next-line */}
      <a href="https://wa.me/8153813384" target="_blank">
        <Button className="btn btn-black whatsapp-button">
          Chat with us{" "}
          <img
            src={whatsapp}
            className="ms-1"
            alt="whatsapp"
            width="30px"
            height="30px"
          />
        </Button>
      </a>
    </>
  );
};

export default WhatsappButton;
