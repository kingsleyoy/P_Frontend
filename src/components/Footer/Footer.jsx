import React from "react";
import "./Footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <p>copyright© {date} FunLog. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
