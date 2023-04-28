import { createSlice } from "@reduxjs/toolkit";
import { FILTER_COLOR, FILTER_GENDER, FILTER_PRICE, FILTER_TYPE } from "../../utils/constants";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    color: [],
    gender: [],
    price: [],
    type: [],
  },
  reducers: {
    setFilter: (state, action) => {
      const { type, data } = action.payload;
      switch (type) {        
        case FILTER_COLOR:
          if (state.color.includes(data)) {
            state.color = state.color.filter((c) => c !== data);
          } else {
            state.color.push(data);
          }
          break;
        case FILTER_GENDER:
          if (state.gender.includes(data)) {
            state.gender = state.gender.filter((g) => g !== data);
          } else {
            state.gender.push(data);
          }
          break;
          case FILTER_PRICE:
            const priceFrom = data.from;
            const index = state.price.findIndex(obj => obj.from === priceFrom);;
            if (index !== -1) {
                state.price.splice(index, 1);
            } else {
                state.price.push(data);
            }
            break;
        case FILTER_TYPE:
          if (state.type.includes(data)) {
            state.type = state.type.filter((t) => t !== data);
          } else {
            state.type.push(data);
          }
          break;
        default:
          break;
      }
    },
    clearFilter: (state) => {
      state.color = [];
      state.gender = [];
      state.price = [];
      state.type = [];
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export const setFilterReducer = filterSlice.reducer;