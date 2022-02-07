import React from "react";
import useCollection from "../../hooks/useCollection";
import CollectionPreview from "../CollectionPreview.js/CollectionPreview";
import "./collection-overview.scss";

const CollectionOverview = () => {
  const [collections] = useCollection();
  return (
    <div className="collections-overview">
      {collections.map((items) => (
        <CollectionPreview key={items.id} {...items}></CollectionPreview>
      ))}
    </div>
  );
};

export default CollectionOverview;
