import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Logo</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>

        {/* Dropdown for Services */}
        <li className="dropdown">
          <a href="#services">
            Services <span className="arrow">&#9662;</span>
          </a>
          <ul className="dropdown-content">
            <li><a href="#web">Web Development</a></li>
            <li><a href="#design">Design</a></li>
            <li><a href="#marketing">Marketing</a></li>
          </ul>
        </li>

        <li><a href="#shop">Shop</a></li>

        {/* Dropdown for Company */}
        <li className="dropdown">
          <a href="#company">
            Company <span className="arrow">&#9662;</span>
          </a>
          <ul className="dropdown-content">
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
