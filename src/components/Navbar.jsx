import React from "react";
import logo from '../assets/logos/logo_long.png';
import wishListIcon from '../assets/icons/shopping-bag.png';
import testDriveIcon from '../assets/icons/left-intersection.png';
import dealerIcon from '../assets/icons/pin.png';
import menuIcon from '../assets/icons/more.png';
import Menu_mobile from "./Menu_mobile";
import greenLines_img from "../assets/images/green_lines.jpg";
import { useState } from "react";
import '../styles/Navbar.scss';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar_main">
      <a href="/" aria-label="go to home page">
        <img className="navbar_logo" src={logo} alt="kawasaki logo" />
      </a>
      <ul className="navbar_list">
        <li>
          <a href="">
            <img className="navbar_icons" src={wishListIcon} alt="wishlist" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="navbar_icons" src={testDriveIcon} alt="test drive" />
          </a>
        </li >
        <li>
          <a href="">
            <img className="navbar_icons" src={dealerIcon} alt="dealer locator" />
          </a>
        </li>
        <li>
          <button className="navbar_menu-button" onClick={() => {menuToggle()}}>
            <img className="navbar_icons" src={menuIcon} alt="menu options" />
          </button>
        </li>
      </ul>
      </div>
      <img className="menuMobile_greenlines" src={greenLines_img} alt="" />
      { menuOpen && <Menu_mobile />}
    </nav>
  );
};

export default Navbar;
