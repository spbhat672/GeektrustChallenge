import React from "react";
import TeeRexStoreLogo from "../assets/teerex-store-logo.png";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <img
          src={TeeRexStoreLogo}
          alt="TeeRex Store"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "100px",
            marginTop: "50px",
          }}
        />
      </div>
      <div className="row">
        <h1>404 - Page not found</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
