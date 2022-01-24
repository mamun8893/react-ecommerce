import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => {
  //   const { imgUrl, name, quantity, price } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
