import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ text, to, color, font }) => {
  return (
    <Link to={to} className={`${color ? color : "text-black"} ${font ? font : "font-medium"}`}>
    {text}
  </Link>
  
  );
};

export default CustomLink;
