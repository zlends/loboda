import React from 'react';
import './TourDates.css';
import darkPoster from '../assets/images/LO_foto_dark.jpg';
import redPoster from '../assets/images/LO_foto_red.jpg';

const TourDates = () => {
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
            <img src={darkPoster} alt="LOBODA Tour 2025 Poster" className="poster-image poster-dark" />
          </div>
          <div className="poster-container">
            <div className="poster-tape"></div>
            <img src={redPoster} alt="LOBODA Tour 2025 Poster" className="poster-image poster-red" />
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
    </div>
  );
};

export default TourDates; 