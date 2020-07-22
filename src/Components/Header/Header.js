//LIBRARIES
import React from "react";

//STYLES
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="appName ma3">KING'S CUP</h2>
      <div className="buttons"></div>
      <a
        class="push f6-ns f5-m f4-l f4 link dim br-pill ba bw1 ph3 pv2 mb3 mt3 black"
        href="#0"
        onClick={() => alert("I am here")}
      >
        Select Deck
      </a>
      <a
        class="f6-ns f5-m f4-l f4 link dim br-pill ba bw1 ph3 pv2 black ma3"
        href="#0"
      >
        Create Deck
      </a>
    </header>
  );
};

export default Header;
