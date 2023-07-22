import React, { useEffect, useState } from "react";
import Routes from "./routes/routes";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import logo from "./assets/icon/logo-black.png";

const App = () => {
  const [welcomeToggle, setWelcomeToggle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeToggle(false);
    }, 1500);
  }, []);

  return (
    <>
      {welcomeToggle ? (
        <div className="welcome-screen">
          <img src={logo} width="200px" height="200px" alt="welcome"/>
          <h4 style={{ marginTop: "-40px" }}>Welcome to SNK International...</h4>
        </div>
      ) : (
        <Routes />
      )}

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
