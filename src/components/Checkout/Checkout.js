import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import StripeButton from "../StripeButton/StripeButton";
import "./checkout.scss";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const cartTotalAmount = cartItems.reduce(
    (accumalatedCount, cartItem) =>
      accumalatedCount + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className="total">
        <span>Total:$ {cartTotalAmount}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      <StripeButton price={cartTotalAmount} />
    </div>
  );
};

export default Checkout;
