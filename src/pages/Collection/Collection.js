import React from "react";
import { Outlet, useParams } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import useCollection from "../../hooks/useCollection";
import "./collection.scss";

const Collection = () => {
  const parms = useParams();
  const [collection] = useCollection();
  const collectionItem = collection.find(
    (items) =>
      items.routeName.toLowerCase() === parms.collectionName.toLowerCase()
  );
  // const { title, items } = { collectionItem };
  console.log(parms);
  return (
    <div className="collection-page">
      <h2 className="title">{collectionItem?.title}</h2>
      <div className="items">
        {collectionItem?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
