import React from "react";
import "./layout.css";

const LoadingRing = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default LoadingRing;
