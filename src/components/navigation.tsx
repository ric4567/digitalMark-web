import { Link } from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

typeof window !== "undefined" && require("boxicons");
const Navigation = () => {
  console.log(location.pathname);
  return (
    <nav className="nav">
      <ul className="md:flex">
        <li
          className={
            location.pathname === "/" || location.pathname.includes("Project")
              ? "font-bold"
              : ""
          }
        >
          <Link to="/">Projetos</Link>
        </li>
        <li className={location.pathname.includes("Client") ? "font-extrabold" : ""}>
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
