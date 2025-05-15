import React from 'react';
import './TourDates.css';

const TourDates = () => {
  const tourDates = [
    {
      date: 'May 15',
      city: 'Prague',
      country: 'CZECH REPUBLIC',
      venue: 'O2 Arena',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'May 18',
      city: 'Berlin',
      country: 'GERMANY',
      venue: 'Mercedes-Benz Arena',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'May 21',
      city: 'Paris',
      country: 'FRANCE',
      venue: 'Accor Arena',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'May 24',
      city: 'Madrid',
      country: 'SPAIN',
      venue: 'WiZink Center',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'May 27',
      city: 'Milan',
      country: 'ITALY',
      venue: 'Mediolanum Forum',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'May 30',
      city: 'Amsterdam',
      country: 'NETHERLANDS',
      venue: 'Ziggo Dome',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'Jun 2',
      city: 'London',
      country: 'UNITED KINGDOM',
      venue: 'The O2',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'Jun 5',
      city: 'Stockholm',
      country: 'SWEDEN',
      venue: 'Avicii Arena',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'Jun 8',
      city: 'Helsinki',
      country: 'FINLAND',
      venue: 'Helsinki Ice Hall',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    },
    {
      date: 'Jun 11',
      city: 'Warsaw',
      country: 'POLAND',
      venue: 'COS Torwar',
      ticketLink: 'https://fca.mticket.eu/widget540site12853/widget/event/134683'
    }
  ];

  return (
    <div className="tour-dates">
      <h2 className="section-title">TOUR DATES</h2>
      <div className="tour-list">
        {tourDates.map((tour, index) => (
          <div key={index} className="tour-item">
            <div className="tour-date">{tour.date}</div>
            <div className="tour-location">
              <div className="venue">{tour.venue}</div>
              <div className="city-country">{tour.city}, {tour.country}</div>
            </div>
            <a href={tour.ticketLink} target="_blank" rel="noopener noreferrer" className="buy-tickets-btn">
              Buy Tickets
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourDates; 