import React from 'react';
import './Header.css';
import logo from '../assets/images/BIG LIFE_LOGO-02.svg';

const Header = () => {
  // Cities from the tour for the ticker
  const tourCities = [
    'Tel-Aviv', 'Haifa', 'Hamburg', 'Munich', 
    'Amsterdam', 'Dusseldorf', 'Berlin', 'Offenbach'
  ];
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="LOBODA Tour Logo" className="header-logo" />
        </div>
        
        <div className="ticker-container">
          <div className="ticker">
            <div className="ticker-content">
              {/* Repeat the cities twice to create seamless loop */}
              {[...tourCities, ...tourCities].map((city, index) => (
                <span key={index} className="ticker-item">
                  {city} <span className="ticker-separator">★</span>
                </span>
              ))}
            </div>
          </div>
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