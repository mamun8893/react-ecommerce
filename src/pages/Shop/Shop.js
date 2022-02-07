import React, { useState } from "react";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPreview from "../../components/CollectionPreview.js/CollectionPreview";
import useCollection from "../../hooks/useCollection";
import SHOP_DATA from "./ShopData";

const Shop = () => {
  const [collections] = useCollection();
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default Shop;
