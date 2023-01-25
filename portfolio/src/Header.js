import "./Header.css";
import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Link to={`/about`}>
        <h3>ABOUT</h3>
      </Link>
      <Link to={`/work`}>
        <h3>WORK</h3>
      </Link>
      <Link to={`/contact`}>
        <h3>CONTACT</h3>
      </Link>
    </div>
  );
};

export default Header;
