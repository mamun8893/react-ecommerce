import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useSection = () => {
  const [section, setSection] = useState([]);
  useEffect(() => {
    setSection([
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        link: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        link: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        link: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        link: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        link: "shop/mens",
      },
    ]);
  }, []);

  return [section];
};

export default useSection;
