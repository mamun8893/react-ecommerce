import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
