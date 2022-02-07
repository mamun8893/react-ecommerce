import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart-utils";

const initialState = {
  cartItems: [],
};

export const addCartSlice = createSlice({
  name: "cartItems",
  initialState: initialState,
  reducers: {
    setAddCart: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    setRemoveCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setRemoveItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
  },
});
