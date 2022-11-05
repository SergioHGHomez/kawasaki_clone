import React from "react";
import search_icon from "../assets/icons/search_grey.png";
import '../styles/SearchBar_mobile.scss'

const SearchBarMobile = () => {
  return (
    <div className="searchBar-mobile">
      <input  type="text" placeholder=" Search" />
      <button>
        <img src={search_icon} alt="search icon" />
      </button>
    </div>
  );
};

export default SearchBarMobile;
