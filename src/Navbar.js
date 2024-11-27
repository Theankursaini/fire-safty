import React, { useState } from "react";
import './App.css'; // Include styles for the navbar

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="menu-item">Home</li>
        <li
          className="menu-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Services
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Web Development</li>
              <li className="dropdown-item">Mobile Development</li>
              <li className="dropdown-item">SEO</li>
            </ul>
          )}
        </li>
        <li className="menu-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;