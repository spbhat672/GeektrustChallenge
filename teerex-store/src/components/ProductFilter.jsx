import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, clearFilter } from "../redux/slice/filter";
import {
  FILTER_COLOR,
  FILTER_GENDER,
  FILTER_PRICE,
  FILTER_TYPE,
  COLOR_RED,
  COLOR_BLUE,
  COLOR_GREEN,
  GENDER_MEN,
  GENDER_WOMEN,
  PRICE_TILL_250,
  PRICE_TILL_450,
  PRICE_ABOVE_450,
  TYPE_POLO,
  TYPE_HOODIE,
  TYPE_BASIC,
} from "../utils/constants";

const ProductFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="d-flex flex-column"
        style={{ justifyContent: "flex-start" }}
      >
        <b>Color</b>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_COLOR, data: COLOR_RED }))
            }
          />
          Red
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_COLOR, data: COLOR_BLUE }))
            }
          />
          Blue
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_COLOR, data: COLOR_GREEN }))
            }
          />
          Green
        </label>
      </div>
      <div
        className="d-flex flex-column"
        style={{ justifyContent: "flex-start", marginTop: "5px" }}
      >
        <b>Gender</b>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_GENDER, data: GENDER_MEN }))
            }
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_GENDER, data: GENDER_WOMEN }))
            }
          />
          Women
        </label>
      </div>
      <div
        className="d-flex flex-column"
        style={{ justifyContent: "flex-start", marginTop: "5px" }}
      >
        <b>Price</b>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_PRICE, data: PRICE_TILL_250 }))
            }
          />
          ₹0-₹250
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_PRICE, data: PRICE_TILL_450 }))
            }
          />
          ₹251-₹450
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_PRICE, data: PRICE_ABOVE_450 }))
            }
          />
          Above ₹450
        </label>
      </div>
      <div
        className="d-flex flex-column"
        style={{ justifyContent: "flex-start", marginTop: "5px" }}
      >
        <b>Type</b>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_TYPE, data: TYPE_POLO }))
            }
          />
          Polo
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_TYPE, data: TYPE_HOODIE }))
            }
          />
          Hoodie
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              dispatch(setFilter({ type: FILTER_TYPE, data: TYPE_BASIC }))
            }
          />
          Basic
        </label>
      </div>
      <button
        style={{ marginTop: "5px", borderRadius: "10px", color: "#8C52FF" }}
        onClick={() => dispatch(clearFilter())}
      >
        <b>Clear Filters</b>
      </button>
    </div>
  );
};

export default ProductFilter;
