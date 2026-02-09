import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from './slices/productSlice'
import wishlistSliceReducer from './slices/wishlistSlice'
import cartSliceReducer from './slices/cartSlice'

const store=configureStore({
    reducer:{
        productReducer:productSliceReducer,
        wishlistReducer:wishlistSliceReducer,
        cartReducer:cartSliceReducer
    }
})


export default store