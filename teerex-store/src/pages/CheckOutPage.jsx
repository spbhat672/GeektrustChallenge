import React, { useState, useEffect } from "react";
import {
  AddOutlined,
  RemoveOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import "../styles/Checkout.css";
import { message } from "antd";

const UpdateItemQuantity = ({ qty, handleIncrement, handleDecrement }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      style={{ backgroundColor: "#cddefa", borderRadius: "10px" }}
    >
      <IconButton size="small" color="primary" onClick={handleDecrement}>
        <RemoveOutlined />
      </IconButton>
      <Box padding="0.5rem">{"Qty: " + qty}</Box>
      <IconButton size="small" color="primary" onClick={handleIncrement}>
        <AddOutlined />
      </IconButton>
    </Stack>
  );
};

const CheckOutPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let items = localStorage.getItem("cartItems");
    items = items ? JSON.parse(items) : [];
    setCartItems(items);
  }, []);

  const handleItemQuantity = (productId, quantity) => {
    debugger;
    let updatedCart;
    if (quantity === 0) {
      updatedCart = cartItems.filter((item) => item.product.id !== productId);
    } else {
      const productItem = cartItems.find(
        (item) => item.product.id === productId
      );
      if (quantity > productItem.product.quantity) {
        message.warning("This product quantity is exceeded");
        return;
      } else {
        updatedCart = cartItems.map((item) => {
          if (item.product.id === productId) {
            return {
              ...item,
              qty: quantity,
            };
          } else {
            return item;
          }
        });
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleDeleteItem = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.product.id !== productId
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.qty,
      0
    );
  };

  return (
    <div>
      <Header isCheckoutPage={true} />
      <div>
        {!cartItems || cartItems.length === 0 ? (
          <Box className="cart empty">
            <ShoppingCartOutlined className="empty-cart-icon" />
            <Box color="#aaa" textAlign="center">
              Cart is empty. Go to home page and add items.
            </Box>
          </Box>
        ) : (
          <div className="mt-2">
            <h5
              className="d-flex justify-content-start"
              style={{ marginLeft: "5px" }}
            >
              Shopping Cart
            </h5>
            {cartItems.map((item) => (
              <Box
                key={item.product.id}
                display="flex"
                alignItems="flex-start"
                padding="1rem"
              >
                <Box className="image-container">
                  <img
                    src={item.product.imageURL}
                    alt={item.product.name}
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="6rem"
                  paddingX="1rem"
                >
                  <Box padding="0.5rem" fontWeight="700">
                    {item.product.name}
                  </Box>
                  <Box padding="0.5rem" fontWeight="700">
                    ₹{item.product.price}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <UpdateItemQuantity
                      qty={item.qty}
                      handleIncrement={() =>
                        handleItemQuantity(item.product.id, item.qty + 1)
                      }
                      handleDecrement={() =>
                        handleItemQuantity(item.product.id, item.qty - 1)
                      }
                    />
                    <Button onClick={() => handleDeleteItem(item.product.id)}>
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
            <hr />
            <b
              className="d-flex justify-content-start"
              style={{ marginLeft: "10px" }}
            >
              Total Amount: ₹{getTotalAmount()}
            </b>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOutPage;
