import React, { useState } from "react";
import NavBarSearch from "./NavBarSearch";
import "./NavBar.css";
import logo from "../../assets/Img/logo_nasa_2x.png";
export default function NavBar() {
  const [menuToggle, setMenuToogle] = useState(false);

  const handleMenuToogle = () => {
    setMenuToogle(!menuToggle);
  };
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className={menuToggle ? "nav-menu" : "nav-menu-hidden"}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Mission</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <NavBarSearch />
      <div
        className={!menuToggle ? "hamburger" : "hamburger-close"}
        onClick={handleMenuToogle}
      ></div>
    </div>
  );
}
