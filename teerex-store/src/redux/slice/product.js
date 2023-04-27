import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {PRODUCT_API} from '../../utils/constants';

//Action
export const fetchProducts = createAsyncThunk('fetchProducts',async ()=>{
    const response = await axios.get(PRODUCT_API);
    return response.data;
})


const productSlice = createSlice({
    name:"product",
    initialState:{
        isLoading:false,
        data:null,
        filteredData: null, // new state to handle filtered data
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.data = action.payload;
            state.filteredData = action.payload; // initialize filtered data with all products
        });
        builder.addCase(fetchProducts.rejected,(state,action)=>{           
            console.log("Error",action.payload);
            state.isError = true;
        })
    },
});

export default productSlice.reducer;