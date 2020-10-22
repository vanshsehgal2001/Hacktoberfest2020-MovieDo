// @flow
import React from "react";

import "./footer.css";
import "./ownStyle.css";

const footer = () => {
  return (
    <footer id="footer">
      <div
        className="bottom-bar"
        style={{ backgroundColor: "rgba(0,0,0,0.8)", textAlign: "center" }}
      >
        <span style={{ color: "white" }}>With</span>{" "}
        <span className="heart" style={{ color: "red" }}>
          ♥
        </span>{" "}
        <span style={{ color: "white" }}>by</span>{" "}
        <a href="http://garimasingh.me">garimasingh.me</a>
      </div>
    </footer>
  );
};

export default footer;
