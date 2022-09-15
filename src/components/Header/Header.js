import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header-container">
      <div className="title-container">
        <Link to="/" className="link-style">
          <h1> NYTimes Reader </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
