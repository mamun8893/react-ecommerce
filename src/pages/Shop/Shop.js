import React, { useState } from "react";
import CollectionPreview from "../../components/CollectionPreview.js/CollectionPreview";
import SHOP_DATA from "./ShopData";

const Shop = () => {
  const [collections] = useState(SHOP_DATA);
  //   setCollections(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map((items) => (
        <CollectionPreview key={items.id} {...items}></CollectionPreview>
      ))}
    </div>
  );
};

export default Shop;
