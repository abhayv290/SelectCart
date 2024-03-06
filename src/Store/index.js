import { configureStore } from "@reduxjs/toolkit";
import cntReducer from './slicer'
import authReducer from './auth_slicer'
import cartReducer from './cartSlicer'
//Setting the initial state of store to empty 
const initialState = {};

export const store = configureStore({
    reducer: {
        counter: cntReducer,
        auth: authReducer,
        myCart: cartReducer,

    },
    preloadedState: initialState,

})

