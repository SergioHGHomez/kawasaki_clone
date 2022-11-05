import React from "react";
import SearchBar_mobile from "./SearchBar_mobile";
import "../styles/Menu_mobile.scss";
import cart_icon from "../assets/icons/shopping-cart.png";
import acount_icon from "../assets/icons/account.png";
import dropdow_icon from "../assets/icons/drop-down-arrow.png";
import greenLines_img from "../assets/images/green_lines.jpg";

const MenuMobile = () => {
  return (
    <div className="menuMobile">
        <img className="menuMobile_greenlines" src={greenLines_img} alt="" />
      <ul>
        <li className="menuMobile_item-options">
          <img src={cart_icon} alt="cart icon" />
          <p> CART</p>
          <p id="menuMobile_items-counter">(0)</p>
        </li>
        <li className="menuMobile_item-options">
          <img src={acount_icon} alt="cart icon" />
          <p>MY KAWASAKI</p>
        </li>
        <li>
          <button className="menuMobile_item-productList">
            <p>MOTORCYCLE</p>
            <img src={dropdow_icon} alt="dropdown icon" />
          </button>
        </li>
      </ul>
      <SearchBar_mobile />
    </div>
  );
};

export default MenuMobile;
