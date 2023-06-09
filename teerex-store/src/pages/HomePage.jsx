import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slice/product";
import ProductFilter from "../components/ProductFilter";
import ProductDisplay from "../components/ProductDisplay";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import { Modal } from "antd";
import { SEARCH_STRING } from "../utils/constants";
import { setFilter } from "../redux/slice/filter";

const HomePage = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchString, setSearchString] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
    // Check if screen width is less than or equal to 768px
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    // Add listener for screen width changes
    mediaQuery.addListener((mq) => setIsMobile(mq.matches));
  }, []);

  return (
    <div>
      <Header cartCount={cartCount} />
      <div className="row" style={{ maxWidth: "100%", marginTop: "20px" }}>
        {!isMobile && (
          <div className="col-3">
            <div
              style={{
                marginTop: "70px",
                border: "1px solid black",
                boxSizing: "border-box",
                width: "75%",
                marginLeft: "20px",
                padding: "10px",
              }}
            >
              <ProductFilter />
            </div>
          </div>
        )}
        <div className="col-9 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex" style={{ marginBottom: "40px" }}>
            <div className="d-flex flex-row">
              <input
                style={{ width: "450px" }}
                placeholder="Serach products"
                type="text"
                onChange={(e) => setSearchString(e.target.value)}
              ></input>
              <button
                onClick={() =>
                  dispatch(
                    setFilter({ type: SEARCH_STRING, data: searchString })
                  )
                }
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            {isMobile && (
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => setIsOpenModal(true)}
              >
                <FilterAltIcon />
              </button>
            )}
          </div>
          <ProductDisplay setCartCount={setCartCount} />
          <Modal
            title="Filter the products"
            visible={isOpenModal}
            footer={false}
            onCancel={() => {
              setIsOpenModal(false);
            }}
          >
            <ProductFilter />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
