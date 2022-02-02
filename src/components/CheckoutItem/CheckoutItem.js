import React from "react";
import { useDispatch } from "react-redux";
import { removeCartAction } from "../../redux/actions/actions";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeCartAction(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
