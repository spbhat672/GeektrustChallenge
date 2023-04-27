import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
      name: '',
      type:'',
    },
    reducers: {
      setFilter: (state, action) => {
          switch(action.payload.type){
              case 'name': state.name = action.payload.data
                           break;
              case 'type': state.type = action.payload.data
                           break;
              default : break;
          }      
      },
      clearFilter: (state) => {
          state.name = '';
          state.type = '';
      },
    },
  });
  
  export const { setFilter, clearFilter } = filterSlice.actions;
  export const setFilterReducer = filterSlice.reducer;