import React from 'react';
import './Header.css';
import logo from '../assets/images/BIG LIFE_LOGO-02.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="LOBODA Tour Logo" className="header-logo" />
        </div>
        <nav className="header-nav">
          <a href="#tour-dates" className="nav-link">Tour</a>
          <a href="#tabs-section" className="nav-link">Info</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 