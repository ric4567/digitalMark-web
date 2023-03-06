import { Link } from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

typeof window !== "undefined" && require("boxicons");
const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="md:flex">
        <li>
          <Link to="/">Projetos</Link>
        </li>
        <li>
          <Link to="/ListClient">Clientes</Link>
        </li>
      </ul>
    </nav>
  );
};
Navigation.propTypes = {
  isExpanded: PropTypes.bool,
  setLoadingPage: PropTypes.func,
  data: PropTypes.array,
};

export default Navigation;
