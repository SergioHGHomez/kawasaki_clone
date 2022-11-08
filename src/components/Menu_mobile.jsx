import React from "react";
import SearchBar_mobile from "./SearchBar_mobile";
import cart_icon from "../assets/icons/shopping-cart.png";
import acount_icon from "../assets/icons/account.png";
import dropdow_icon from "../assets/icons/drop-down-arrow.png";
import "../styles/Menu_mobile.scss";


const MenuMobile = () => {
  return (
    <div className="menuMobile">

      <ul>
        <li className="menuMobile_item-options">
          <a href="/shopping-cart">
            <img src={cart_icon} alt="cart icon" />
            <p> CART</p>
            <p id="menuMobile_items-counter">(0)</p>
          </a>
        </li>
        <li className="menuMobile_item-options">
          <a href="/my-kawasaki">
            <img src={acount_icon} alt="cart icon" />
            <p>MY KAWASAKI</p>
          </a>
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
