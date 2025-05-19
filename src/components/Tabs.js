import React, { useContext } from 'react';
import TourDates from './TourDates';
import ArtistInfo from './ArtistInfo';
import './Tabs.css';
import { TabContext } from '../App';

const Tabs = () => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <div className="tabs-container" id="tabs-section">
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