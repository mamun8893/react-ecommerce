import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import useCollection from "../../hooks/useCollection";

const Shop = () => {
  const [collections] = useCollection();
  const parms = useParams();
  return (
    <div className="shop-page">
      {!parms.collectionName && <CollectionOverview />}
      <Outlet />
    </div>
  );
};

export default Shop;
