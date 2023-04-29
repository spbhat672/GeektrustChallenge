import React, { useState, useEffect } from "react";
import TeeRexStoreLogo from "../assets/teerex-store-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = ({ isCheckoutPage, cartCount }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cart =
      localStorage.getItem("cartItems") &&
      JSON.parse(localStorage.getItem("cartItems")).length > 0
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
    const cartQuantity = cart.reduce(function (acc, item) {
      return acc + item.qty;
    }, 0);
    setCount(cartQuantity);
  }, [cartCount]);

  return (
    <div
      style={{ backgroundColor: "#272727", maxWidth: "100%" }}
      className="d-flex flex-row justify-content-between"
    >
      <div className="d-flex flex-row align-items-center">
        <img
          src={TeeRexStoreLogo}
          alt="TeeRex Store"
          style={{ borderRadius: "20px", width: "80px", height: "80px" }}
        ></img>
        <h4 style={{ color: "#8C52FF" }}>TeeRex Store</h4>
      </div>
      <div className="d-flex flex-row align-items-center">
        {isCheckoutPage && (
          <button
            style={{
              color: "#FF66C4",
              backgroundColor: "#f5f3f2",
              height: "40px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
            onClick={() => navigate("/")}
          >
            <b>Products</b>
          </button>
        )}
        {!isCheckoutPage && (
          <div className="d-flex flex-row">
            <FontAwesomeIcon
              icon={faShoppingCart}
              color="white"
              size="2x"
              style={{ marginRight: "5px", cursor: "pointer" }}
              onClick={() => navigate("/checkout")}
            />
            <h4 style={{ color: "white", marginRight: "5px" }}>{count}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
