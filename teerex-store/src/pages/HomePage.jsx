import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slice/product";
import ProductFilter from "../components/ProductFilter";
import ProductDisplay from "../components/ProductDisplay";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="row">
      <div className="col-6">
        <ProductFilter />
      </div>
      <div className="col-6">
        <ProductDisplay />
      </div>
    </div>
  );
};

export default HomePage;
