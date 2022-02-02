import { combineReducers } from "@reduxjs/toolkit";
import { addCartSlice, removeCartSlice } from "../slices/cartSlice";
import { cartToggleSlice } from "../slices/slice";

export const rootReducers = combineReducers({
  toggle: cartToggleSlice.reducer,
  cartItems: addCartSlice.reducer,
});
