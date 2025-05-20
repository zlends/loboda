import React, { useState, useRef } from 'react';
import './TourDates.css';
import redPoster from '../assets/images/LO_POSTER_red.jpg';
import darkPoster from '../assets/images/LO_POSTER_dark.jpg';
import redPosterFull from '../assets/images/LO_POSTER_red.jpg';
import darkPosterFull from '../assets/images/LO_POSTER_dark.jpg';
import SubscriptionForm from './SubscriptionForm';
import { useLanguage } from '../contexts/LanguageContext';

const TourDates = () => {
  const { t, language } = useLanguage();
  const [fullscreenPoster, setFullscreenPoster] = useState(null);
  const [showSubscription, setShowSubscription] = useState(false);
  
  // Create refs for Israel and Europe sections
  const israelSectionRef = useRef(null);
  const europeSectionRef = useRef(null);
  
  const scrollToIsrael = () => {
    if (israelSectionRef.current) {
      israelSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const scrollToEurope = () => {
    if (europeSectionRef.current) {
      europeSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const openFullscreenPoster = (poster) => {
    setFullscreenPoster(poster);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeFullscreenPoster = () => {
    setFullscreenPoster(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  const openSubscriptionForm = () => {
    setShowSubscription(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };
  
  const closeSubscriptionForm = () => {
    setShowSubscription(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const tourDates = [
    {
      date: 'Oct 15, 2025',
      city: 'Tel-Aviv',
      country: 'ISRAEL',
      venue: 'Bronfman Auditorium',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683',
      ticketsAvailable: true
    },
    {
      date: 'Oct 16, 2025',
      city: 'Haifa',
      country: 'ISRAEL',
      venue: 'Haifa Congress Center',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683',
      ticketsAvailable: true
    },
    {
      date: 'Nov 13, 2025',
      city: 'Hamburg',
      country: 'GERMANY',
      venue: 'Inselpark Arena',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683',
      ticketsAvailable: false
    },
    {
      date: 'Nov 16, 2025',
      city: 'Munich',
      country: 'GERMANY',
      venue: 'Tonhalle',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683',
      ticketsAvailable: false
    },
    {
      date: 'Nov 17, 2025',
      city: 'Amsterdam',
      country: 'NETHERLANDS',
      venue: 'Afas live',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683',
      ticketsAvailable: false
    },
    {
      date: 'Nov 18, 2025',
      city: 'Dusseldorf',
      country: 'GERMANY',
      venue: 'Mitsubishi Electric Hall',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683',
      ticketsAvailable: false
    },
    {
      date: 'Nov 26, 2025',
      city: 'Berlin',
      country: 'GERMANY',
      venue: 'Tempodrom',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683',
      ticketsAvailable: false
    },
    {
      date: 'Nov 27, 2025',
      city: 'Offenbach',
      country: 'GERMANY',
      venue: 'Stadthalle',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683',
      ticketsAvailable: false
    }
  ];

  // Set RTL direction for Hebrew
  const isRTL = language === 'he';

  return (
    <div className="tour-dates" id="tour-dates" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="poster-header">
        <div className="poster-images">
          <div className="poster-container">
            <div className="poster-tape"></div>
            <img 
              src={redPoster} 
              alt="LOBODA Tour 2025 Israel Poster" 
              className="poster-image poster-dark" 
              onClick={scrollToIsrael}
            />
          </div>
          <div className="poster-container">
            <div className="poster-tape"></div>
            <img 
              src={darkPoster} 
              alt="LOBODA Tour 2025 Europe Poster" 
              className="poster-image poster-red" 
              onClick={scrollToEurope}
            />
          </div>
        </div>
        <h2 className="section-title">{t.tourDates.sectionTitle}</h2>
        <p className="poster-subtitle">{t.tourDates.subtitle}</p>
      </div>
      
      <div className="tour-list">
        {/* Israel section */}
        <div ref={israelSectionRef} className="tour-section-heading">
          <h3>{t.tourDates.israelSection}</h3>
        </div>
        {tourDates.slice(0, 2).map((tour, index) => (
          <div key={index} className="tour-item red-poster">
            <div className="poster-overlay"></div>
            <div className="tour-info">
              <div className="tour-date">
                <div>{tour.date}</div>
                <div className="start-time">{t.tourDates.startTime}</div>
              </div>
              <div className="tour-location">
                <div className="venue">{tour.venue}</div>
                <div className="city-country">{tour.city}, {tour.country}</div>
              </div>
            </div>
            {tour.ticketsAvailable ? (
              <a href={tour.ticketLink} target="_blank" rel="noopener noreferrer" className="buy-tickets-btn">
                {t.tourDates.buyTickets}
              </a>
            ) : (
              <div className="tickets-not-available">
                <span className="coming-soon-label">{t.tourDates.comingSoon}</span>
                {/* <button 
                  onClick={openSubscriptionForm}
                  className="notify-me-btn"
                  title="Get notified when tickets are available"
                >
                  {t.tourDates.notifyMe}
                </button> */}
              </div>
            )}
          </div>
        ))}
        
        {/* Europe section */}
        <div ref={europeSectionRef} className="tour-section-heading">
          <h3>{t.tourDates.europeSection}</h3>
        </div>
        {tourDates.slice(2).map((tour, index) => (
          <div key={index + 2} className="tour-item dark-poster">
            <div className="poster-overlay"></div>
            <div className="tour-info">
              <div className="tour-date">
                <div>{tour.date}</div>
                <div className="start-time">{t.tourDates.startTime}</div>
              </div>
              <div className="tour-location">
                <div className="venue">{tour.venue}</div>
                <div className="city-country">{tour.city}, {tour.country}</div>
              </div>
            </div>
            {tour.ticketsAvailable ? (
              <a href={tour.ticketLink} target="_blank" rel="noopener noreferrer" className="buy-tickets-btn">
                {t.tourDates.buyTickets}
              </a>
            ) : (
              <div className="tickets-not-available">
                <span className="coming-soon-label">{t.tourDates.comingSoon}</span>
                <button 
                  onClick={openSubscriptionForm}
                  className="notify-me-btn"
                  title="Get notified when tickets are available"
                >
                  {t.tourDates.notifyMe}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {fullscreenPoster && (
        <div className="fullscreen-poster-overlay" onClick={closeFullscreenPoster}>
          <div className="fullscreen-poster-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-poster-btn" onClick={closeFullscreenPoster}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={fullscreenPoster} 
              alt="LOBODA Tour 2025 Poster Full View" 
              className="fullscreen-poster-image" 
            />
          </div>
        </div>
      )}

      {showSubscription && (
        <SubscriptionForm 
          onClose={closeSubscriptionForm}
        />
      )}
    </div>
  );
};

export default TourDates; 