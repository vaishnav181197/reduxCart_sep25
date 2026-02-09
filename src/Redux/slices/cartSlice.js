import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, payload) => {
            if (state.find(item => item.id == payload.payload.id)) {
                const prod=state.find(item => item.id == payload.payload.id)
                prod.quantity+=1
            }
            else {
                state.push({ ...payload.payload, quantity: 1 })
            }
        },
        removeFromCart:(state,payload)=>{
            return state=state.filter(item=>item.id!=payload.payload)
        },
        incrementQuantity:(state,payload)=>{
            const prod=state.find(item=>item.id==payload.payload)
            prod.quantity+=1
        },
        decrementQuantity:(state,payload)=>{
            const prod=state.find(item=>item.id==payload.payload)
            if(prod.quantity>1){
                prod.quantity-=1
            }
            else{
                return state=state.filter(item=>item.id!=payload.payload)
            }
        },
        checkout:(state)=>{
            return state=[]
        }
    }
})


export default cartSlice.reducer
export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity,checkout}=cartSlice.actions