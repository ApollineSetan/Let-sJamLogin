import React from 'react';
import './TopBar.css';
import { FaArrowLeft, FaRegBell, FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">
      <button><FaArrowLeft /></button>
      <div className="input-container">
        <input type="text" placeholder="Rechercher..." />
      <FaSearch className="search-icon" />
      </div>
      <button><FaRegBell /></button>
    </div>
  );
};

export default TopBar;