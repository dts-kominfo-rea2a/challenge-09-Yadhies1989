// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="title">Call A Friend</h1>
        <p className="sub-title">Your Friendly Contact App</p>
        <p className="separator">
          ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
        </p>
      </div>
    </>
  );
};

export default Header;
