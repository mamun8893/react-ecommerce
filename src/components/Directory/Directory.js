import React, { useState } from "react";
import useSection from "../../hooks/useSection";
import MenuItem from "../MenuItem/MenuItem";
import "./directory-menu.scss";

const Directory = () => {
  const [section] = useSection();

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
