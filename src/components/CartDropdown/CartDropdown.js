import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const allCarts = useSelector((state) => state.cartItems);
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {allCarts.cartItems.length ? (
          allCarts.cartItems.map((item) => (
            <CartItem key={item.id} item={item}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your cart is Empty</span>
        )}
      </div>

      <CustomButton onClick={() => navigate("/checkout")}>
        Go to Checkout
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
