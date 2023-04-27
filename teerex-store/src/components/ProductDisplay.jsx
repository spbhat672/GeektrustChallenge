import React from "react";
import { useSelector } from "react-redux";
import { getFilteredProducts } from "../redux/filterMethod";

const ProductDisplay = () => {
  const filteredProducts = useSelector(getFilteredProducts);

  return (
    <div>
      {filteredProducts && filteredProducts.map((e) => <li>{e.name}</li>)}
    </div>
  );
};

export default ProductDisplay;
