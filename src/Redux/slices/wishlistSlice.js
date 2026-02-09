import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist: (state, payload) => {
            if (state.find(item => item.id == payload.payload.id)) {
                alert("Product Already Exist in Wishlist")
            }
            else {
                state.push(payload.payload)
            }
        },
        removeFromWish: (state, payload) => {
            console.log("remove")
            return state = state.filter(item => item.id != payload.payload)
        }
    }
})

export default wishlistSlice.reducer
export const { addToWishlist, removeFromWish } = wishlistSlice.actions