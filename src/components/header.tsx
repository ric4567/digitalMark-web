import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from '../images/logo.png'
import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <div
        id="topo"
        className="lg:flex lg:justify-between mb-12"
        style={{
          backgroundColor: "#8ab2f2",
        }}
      >
        <div className="hidden lg:flex">
          <Link to="/" className="ml-16 lg:w-1/4 mr-4 mt-6">
            <img alt="Digital Mark" src={Logo} />
          </Link>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
