import React from "react";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: "0 auto",
          padding: `0 1.0rem 1.0rem`,
          maxWidth: "80%",
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
