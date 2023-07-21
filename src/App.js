import React from "react";
import Routes from "./routes/routes";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Routes />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
