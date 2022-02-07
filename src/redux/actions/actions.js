import { addCartSlice } from "../slices/cartSlice";
import { cartToggleSlice } from "../slices/slice";

//Toggle Action

export const toggleAction = () => (dispatch) => {
  dispatch(cartToggleSlice.actions.setToggle());
};

//Add Cart Ation

export const addCartAction = (item) => (dispatch) => {
  dispatch(addCartSlice.actions.setAddCart(item));
};

export const removeCartAction = (item) => (dispatch) => {
  dispatch(addCartSlice.actions.setRemoveCart(item));
};

export const removeItemAction = (item) => (dispatch) => {
  dispatch(addCartSlice.actions.setRemoveItem(item));
};
