import { Link } from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

typeof window !== "undefined" && require("boxicons");
const Navigation = () => {
  return (
    <nav className="nav md:inline-flex">
      <ul className="md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ListClient">Clientes</Link>
        </li>
        <li>
          <Link to="/ListProject">Projetos</Link>
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
