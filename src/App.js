import React from 'react';
import './App.css';
import VideoBackground from './components/VideoBackground';
import Tabs from './components/Tabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section className="hero-section">
        <VideoBackground />
      </section>
      
      <section className="content-section">
        <Tabs />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
