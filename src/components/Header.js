import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import logo from '../assets/images/BIG LIFE_LOGO-02.svg';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const [menuPortalElement, setMenuPortalElement] = useState(null);
  
  // Cities from the tour for the ticker
  const tourCities = [
    'Tel-Aviv', 'Haifa', 'Hamburg', 'Munich', 
    'Amsterdam', 'Dusseldorf', 'Berlin', 'Offenbach'
  ];
  
  useEffect(() => {
    // Create a portal element when component mounts
    const el = document.createElement('div');
    document.body.appendChild(el);
    setMenuPortalElement(el);
    
    // Cleanup on unmount
    return () => {
      document.body.removeChild(el);
    };
  }, []);
  
  const toggleLanguageMenu = (e) => {
    if (showLanguageMenu) {
      setShowLanguageMenu(false);
    } else {
      // Calculate position of the dropdown menu
      const buttonRect = e.currentTarget.getBoundingClientRect();
      setMenuPosition({
        top: buttonRect.bottom + window.scrollY,
        right: window.innerWidth - buttonRect.right
      });
      setShowLanguageMenu(true);
    }
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageMenu && !event.target.closest('.language-toggle')) {
        setShowLanguageMenu(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showLanguageMenu]);
  
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
          <a href="#tour-dates" className="nav-link">{t.header.tour}</a>
          <div className="language-dropdown">
            <button className="language-toggle" onClick={toggleLanguageMenu}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            
            {/* Render language menu in a portal */}
            {showLanguageMenu && menuPortalElement && ReactDOM.createPortal(
              <div 
                className="language-menu-portal"
                style={{
                  position: 'absolute',
                  top: `${menuPosition.top}px`,
                  right: `${menuPosition.right}px`,
                  zIndex: 9999
                }}
              >
                <LanguageSelector className="compact-language-selector" />
              </div>,
              menuPortalElement
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 