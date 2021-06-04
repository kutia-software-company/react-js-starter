import React from "react";
import { Link } from "react-router-dom";

//styles
import "./Header.scss";

export const Header = () => {
  return (
    <div className="Header">
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </div>
  );
};
