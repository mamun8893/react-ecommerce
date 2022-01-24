import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const allCarts = useSelector((state) => state.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {allCarts.cartItems.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>

      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
