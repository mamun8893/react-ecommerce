import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./directory-menu.scss";

const Directory = () => {
  const [section, setSection] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
      link: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
      link: "",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
      link: "",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
      link: "",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
      link: "",
    },
  ]);
  return (
    <div className="directory-menu">
      {section.map(({ title, imageUrl, size, id, link }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          link={link}
        ></MenuItem>
      ))}
    </div>
  );
};

export default Directory;
