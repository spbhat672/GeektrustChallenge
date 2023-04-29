import React from "react";
import { useSelector } from "react-redux";
import { getFilteredProducts } from "../redux/filterMethod";
import { SentimentDissatisfied } from "@mui/icons-material";
import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ProductCard from "./ProductCard";
import { message } from "antd";

const ProductDisplay = ({ setCartCount }) => {
  const filteredProducts = useSelector(getFilteredProducts);
  const isLoading = useSelector((state) => state.products.isLoading);

  const isItemInCart = (items, productId) => {
    if (!items || items.length === 0) return false;

    const isItemAlreadyInCart = items.find(
      (item) => item.product.id === productId
    );
    return isItemAlreadyInCart;
  };

  const addToCart = (product, quantity) => {
    let cartItems = localStorage.getItem("cartItems");
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    if (isItemInCart(cartItems, product.id)) {
      message.warning(
        "Item already in cart.You can go to checkout page and update the cart"
      );
      return;
    }

    const newItem = { product: product, qty: 1 };
    cartItems.push(newItem);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    message.success("Product is added to Cart");
    setCartCount(cartItems);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            {isLoading ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
                <h4>Loading Products</h4>
              </Box>
            ) : (
              <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
                alignItems="stretch"
              >
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={4}
                      key={product.id}
                    >
                      <ProductCard
                        product={product}
                        handleAddToCart={addToCart}
                      />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <SentimentDissatisfied
                        sx={{ fontSize: "100px", color: "#ccc" }}
                      />
                      <p>No products found</p>
                    </Box>
                  </Grid>
                )}
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDisplay;
