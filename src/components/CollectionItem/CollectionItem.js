import React from "react";
import { useDispatch } from "react-redux";
import { addCartAction } from "../../redux/actions/actions";
import CustomButton from "../CustomButton/CustomButton";
import "./collection-item.scss";

const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;

  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addCartAction(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
