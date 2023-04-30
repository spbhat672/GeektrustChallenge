import React, { useState } from "react";
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
  const [colorRed, setColorRed] = useState(false);
  const [colorBlue, setColorBlue] = useState(false);
  const [colorGreen, setColorGreen] = useState(false);
  const [genderMen, setGenderMen] = useState(false);
  const [genderWomen, setGenderWomen] = useState(false);
  const [priceTill250, setPriceTill250] = useState(false);
  const [priceTill450, setPriceTill450] = useState(false);
  const [priceAbove450, setPriceAbove450] = useState(false);
  const [typePolo, setTypePolo] = useState(false);
  const [typeHoodeie, setTypeHoodie] = useState(false);
  const [typeBasic, setTypeBasic] = useState(false);

  const clearCheckBoxes = () => {
    setColorRed(false);
    setColorBlue(false);
    setColorGreen(false);
    setGenderMen(false);
    setGenderWomen(false);
    setPriceTill250(false);
    setPriceTill450(false);
    setPriceAbove450(false);
    setTypePolo(false);
    setTypeHoodie(false);
    setTypeBasic(false);
  };

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
            checked={colorRed}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_COLOR, data: COLOR_RED }));
              setColorRed(!colorRed);
            }}
          />
          Red
        </label>
        <label>
          <input
            type="checkbox"
            checked={colorBlue}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_COLOR, data: COLOR_BLUE }));
              setColorBlue(!colorBlue);
            }}
          />
          Blue
        </label>
        <label>
          <input
            type="checkbox"
            checked={colorGreen}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_COLOR, data: COLOR_GREEN }));
              setColorGreen(!colorGreen);
            }}
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
            checked={genderMen}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_GENDER, data: GENDER_MEN }));
              setGenderMen(!genderMen);
            }}
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            checked={genderWomen}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_GENDER, data: GENDER_WOMEN }));
              setGenderWomen(!genderWomen);
            }}
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
            checked={priceTill250}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_PRICE, data: PRICE_TILL_250 }));
              setPriceTill250(!priceTill250);
            }}
          />
          ₹0-₹250
        </label>
        <label>
          <input
            type="checkbox"
            checked={priceTill450}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_PRICE, data: PRICE_TILL_450 }));
              setPriceTill450(!priceTill450);
            }}
          />
          ₹251-₹450
        </label>
        <label>
          <input
            type="checkbox"
            checked={priceAbove450}
            onChange={() => {
              dispatch(
                setFilter({ type: FILTER_PRICE, data: PRICE_ABOVE_450 })
              );
              setPriceAbove450(!priceAbove450);
            }}
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
            checked={typePolo}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_TYPE, data: TYPE_POLO }));
              setTypePolo(!typePolo);
            }}
          />
          Polo
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeHoodeie}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_TYPE, data: TYPE_HOODIE }));
              setTypeHoodie(!typeHoodeie);
            }}
          />
          Hoodie
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeBasic}
            onChange={() => {
              dispatch(setFilter({ type: FILTER_TYPE, data: TYPE_BASIC }));
              setTypeBasic(!typeBasic);
            }}
          />
          Basic
        </label>
      </div>
      <button
        style={{ marginTop: "5px", borderRadius: "10px", color: "#8C52FF" }}
        onClick={() => {
          dispatch(clearFilter());
          clearCheckBoxes();
        }}
      >
        <b>Clear Filters</b>
      </button>
    </div>
  );
};

export default ProductFilter;
