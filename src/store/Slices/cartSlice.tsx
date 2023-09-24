import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    cartList : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addItemToCart : (state, action) => {
            console.log(action)
            state.cartList.push(action.payload)
        },
        removeItemFromCart : (state, action) => {
            console.log(action)
            state.cartList = state.cartList.filter((item: any) => action.payload !== item.id)
        }
    }
})

export const {addItemToCart, removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer