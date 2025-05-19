import React, { useState } from 'react';
import './TourDates.css';
import darkPoster from '../assets/images/LO_POSTER_dark.jpg';
import redPoster from '../assets/images/LO_POSTER_red.jpg';
import darkPosterFull from '../assets/images/LO_POSTER_dark.jpg';
import redPosterFull from '../assets/images/LO_POSTER_red.jpg';

const TourDates = () => {
  const [fullscreenPoster, setFullscreenPoster] = useState(null);
  
  const openFullscreenPoster = (poster) => {
    setFullscreenPoster(poster);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeFullscreenPoster = () => {
    setFullscreenPoster(null);
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

  return (
    <div className="tour-dates" id="tour-dates">
      <div className="poster-header">
        <div className="poster-images">
          <div className="poster-container">
            <div className="poster-tape"></div>
            <img 
              src={darkPoster} 
              alt="LOBODA Tour 2025 Poster" 
              className="poster-image poster-dark" 
              onClick={() => openFullscreenPoster(darkPosterFull)}
            />
            <div className="poster-zoom-hint">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
          </div>
          <div className="poster-container">
            <div className="poster-tape"></div>
            <img 
              src={redPoster} 
              alt="LOBODA Tour 2025 Poster" 
              className="poster-image poster-red" 
              onClick={() => openFullscreenPoster(redPosterFull)}
            />
            <div className="poster-zoom-hint">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
          </div>
        </div>
        <h2 className="section-title">TOUR DATES</h2>
        <p className="poster-subtitle">Official Tour 2025</p>
      </div>
      
      <div className="tour-list">
        {tourDates.map((tour, index) => (
          <div key={index} className={`tour-item ${index % 2 === 0 ? 'dark-poster' : 'red-poster'}`}>
            <div className="poster-overlay"></div>
            <div className="tour-date">{tour.date}</div>
            <div className="tour-location">
              <div className="venue">{tour.venue}</div>
              <div className="city-country">{tour.city}, {tour.country}</div>
            </div>
            {tour.ticketsAvailable ? (
            <a href={tour.ticketLink} target="_blank" rel="noopener noreferrer" className="buy-tickets-btn">
              Buy Tickets
            </a>
            ) : (
              <span className="buy-tickets-btn disabled" title="Tickets will be available soon">
                Coming Soon
              </span>
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
    </div>
  );
};

export default TourDates; 