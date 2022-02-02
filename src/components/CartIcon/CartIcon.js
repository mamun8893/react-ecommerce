import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleAction } from "../../redux/actions/actions";
import "./carticon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const cartItemCount = cartItems.reduce(
    (accumalatedCount, cartItem) => accumalatedCount + cartItem.quantity,
    0
  );
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleAction())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
