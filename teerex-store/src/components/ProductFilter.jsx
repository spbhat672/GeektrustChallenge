import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearFilter } from "../redux/slice/filter";

const ProductFilter = () => {
  const dispatch = useDispatch();
  const { name, type } = useSelector((state) => state.filters);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) =>
          dispatch(setFilter({ type: "name", data: e.target.value }))
        }
      ></input>
      <input
        type="text"
        name="type"
        value={type}
        onChange={(e) =>
          dispatch(setFilter({ type: "type", data: e.target.value }))
        }
      ></input>
      <button onClick={() => dispatch(clearFilter())}>Clear Filter</button>
    </div>
  );
};

export default ProductFilter;
