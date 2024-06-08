import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Storecontext } from "../context/Storecontext";

function Navbar({ setshowlogin }) {
  const [menu, setmenu] = useState("Home");
  const { getTotalamout } = useContext(Storecontext);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={assets.logo} />
        </Link>
      </div>

      <ul className="nav1">
        <Link
          to="/"
          onClick={() => setmenu("Home")}
          className={menu == "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => setmenu("Menu")}
          className={menu == "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#mobileapp"
          onClick={() => setmenu("Mobile app")}
          className={menu == "Mobile app" ? "active" : ""}
        >
          Mobile app
        </a>
        <a
          href="#contact"
          onClick={() => setmenu("Contact us")}
          className={menu == "Contact us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="nav2">
        <div className="search">
          <img src={assets.search_icon} />
        </div>
        <div className="cart">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} />{" "}
          </Link>
          <div className={getTotalamout()=== 0 ? "" : "dot"}></div>
        </div>
        <div>
          <button className="btn-n" onClick={() => setshowlogin(true)}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
