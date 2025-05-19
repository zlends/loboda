import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import VideoBackground from './components/VideoBackground';
import Tabs from './components/Tabs';
import Footer from './components/Footer';

// Create context for sharing tab state
export const TabContext = createContext();

function App() {
  const [activeTab, setActiveTab] = useState('tourDates');
  
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="App">
        <Header />
        <section className="hero-section">
          <VideoBackground />
        </section>
        
        <section className="content-section">
          <Tabs />
        </section>
        
        <Footer />
      </div>
    </TabContext.Provider>
  );
}

export default App;
