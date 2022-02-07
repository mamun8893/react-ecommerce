import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCartAction,
  addCartAction,
  removeItemAction,
} from "../../redux/actions/actions";
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
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeItemAction(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addCartAction(cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
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
