import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductThunk = createAsyncThunk("products/fetchProductThunk", async () => {
    const response = await axios.get("https://dummyjson.com/products")
    localStorage.setItem("products", JSON.stringify(response.data.products))
    return response.data
})


const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        pending: false,
        error: "",
        products2: [],
        currentPage: 1,
    },
    reducers: {
        searchProducts: (state, payload) => {
            // console.log(payload.payload)
            if (payload.payload != "") {
                state.products = state.products2.filter(item => item.title.toLowerCase().includes(payload.payload.toLowerCase()))
            }
            else {
                state.products = state.products2
            }


        },
        nextPage: (state) => {
            state.currentPage++
        },
        prevPage: (state) => {
            state.currentPage--

        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductThunk.pending, (state, payload) => {
            state.pending = true
            state.products = []
            state.error = ""
        }),
            builder.addCase(fetchProductThunk.fulfilled, (state, payload) => {
                console.log(payload.payload.products)
                state.pending = false
                state.products = payload.payload.products
                state.products2 = payload.payload.products
                state.error = ""
            }),
            builder.addCase(fetchProductThunk.rejected, (state, payload) => {
                state.pending = false
                state.products = [],
                    state.error = "Something Went Wrong!!"
            })
    }
})

export default productSlice.reducer
export const { searchProducts, nextPage, prevPage } = productSlice.actions