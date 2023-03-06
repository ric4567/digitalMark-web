import React, { useState } from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <div
        id="topo"
        className="lg:flex lg:justify-between mb-4"
        style={{
          backgroundColor: "rgb(8, 8, 34)",
        }}
      >
        <div className="hidden lg:flex">
          <Link to="/" className="ml-16 lg:w-1/3 mr-4 mt-6">
            <img alt="Digital Mark" src={require("../images/logo.png")} />
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
