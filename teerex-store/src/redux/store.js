import {configureStore} from '@reduxjs/toolkit';
import productReducer from './slice/product';
import {setFilterReducer} from './slice/filter';

export const store = configureStore({
    reducer:{
       products:productReducer,
       filters:setFilterReducer,
    },
});