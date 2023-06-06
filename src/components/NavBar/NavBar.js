import React, { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleBarStyle = () => {
    setClick(!click);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    handleBarStyle();
  };

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <h3>FUNLOG</h3>
        <ul className={click ? "nav-item nav-show" : "nav-item"}>
          <li>
            <Link onClick={() => scrollToSection("app")}>APPS</Link>
          </li>
          <li>
            <Link onClick={() => scrollToSection("about")}>ABOUT</Link>
          </li>
          <li>
            <Link onClick={() => scrollToSection("coffee")}>
              BUY ME A COFFEE
            </Link>
          </li>
        </ul>
        <div onClick={handleBarStyle} className="nav-bars">
          {click ? (
            <FaTimes size={20} style={{ color: "#E57C23" }} />
          ) : (
            <FaBars size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
