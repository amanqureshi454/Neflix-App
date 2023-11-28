import { configureStore } from "@reduxjs/toolkit";
import whishlistReducer from './WhishlistSlice';




const store = configureStore({
    reducer: {
        whislist:whishlistReducer,
    }
})
export default store;