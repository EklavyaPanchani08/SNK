import React from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "reactstrap";
import whatsapp from "../assets/icon/whatsapp.png";

const WhatsappButton = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* eslint-disable-next-line */}
      <a href="https://wa.me/9327558693" target="_blank">
        <Button className="btn btn-black whatsapp-button">
          {t('Whatsapp.title')}{" "}
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
