import React from "react";
import "../styles/ProductCard.css";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const ProductCard = ({ product, handleAddToCart }) => {
  const { name, imageURL, price } = product;

  return (
    <div>
      <Card
        sx={{ maxWidth: 345, width: "300px", height: "100%" }}
        className="card"
      >
        <CardActionArea>
          <CardMedia component="img" height="140" image={imageURL} alt={name} />
          <CardContent style={{ textAlign: "start" }}>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              ₹{price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className="auth-button"
            variant="contained"
            size="small"
            color="primary"
            startIcon={<AddShoppingCartOutlined />}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={() => handleAddToCart(product, 1)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
