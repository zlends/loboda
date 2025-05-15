import React, { useState } from 'react';
import TourDates from './TourDates';
import ArtistInfo from './ArtistInfo';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tourDates');

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'tourDates' ? 'active' : ''}`}
          onClick={() => setActiveTab('tourDates')}
        >
          TOUR DATES
        </button>
        <button 
          className={`tab ${activeTab === 'artistInfo' ? 'active' : ''}`}
          onClick={() => setActiveTab('artistInfo')}
        >
          ARTIST INFO
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'tourDates' && <TourDates />}
        {activeTab === 'artistInfo' && <ArtistInfo />}
      </div>
    </div>
  );
};

export default Tabs; 