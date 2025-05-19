import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import './VideoBackground.css';
import videoFile from '../assets/videos/LOBODA_FullHD_sound.mp4';
import { TabContext } from '../App';

const VideoBackground = () => {
  const [muted, setMuted] = useState(true);
  const playerRef = useRef(null);
  const { setActiveTab } = useContext(TabContext);

  const toggleMute = () => {
    console.log("Toggle mute clicked, current state:", muted);
    setMuted(!muted);
  };

  // Debug to verify state changes
  useEffect(() => {
    console.log("Muted state changed to:", muted);
  }, [muted]);
  
  const scrollToTourDates = (e) => {
    // Prevent any default behavior
    e.preventDefault();
    
    console.log("BUY TICKETS button clicked");
    
    // Ensure the tour dates tab is active
    setActiveTab('tourDates');
    
    // Wait a bit for the tab content to render
    setTimeout(() => {
      // Try to find the tour dates element
      const tourDatesElement = document.getElementById('tour-dates');
      
      // If tour dates element is found, scroll to it
      if (tourDatesElement) {
        console.log("Scrolling to tour dates");
        tourDatesElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } 
      // Otherwise try to find the tabs section
      else {
        console.log("Tour dates element not found, trying tabs section");
        const tabsSection = document.getElementById('tabs-section');
        if (tabsSection) {
          tabsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          console.error("Neither tour dates nor tabs section found");
        }
      }
    }, 300);
  };

  return (
    <div className="video-background">
      <ReactPlayer
        ref={playerRef}
        className="react-player"
        url={videoFile}
        playing={true}
        loop={true}
        muted={muted}
        width="100%"
        height="100%"
        playsinline={true}
        controls={false}
        config={{
          file: {
            attributes: {
              style: {
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%'
              },
              playsInline: true
            }
          }
        }}
      />
      <div className="overlay">
        <div className="content">
          <h1>LOBODA</h1>
          <h2>TOUR 2025</h2>
          <button 
            className="cta-button pulse" 
            onClick={scrollToTourDates}
            role="button"
            tabIndex={0}
            title="Scroll to Tour Dates"
          >
            BUY TICKETS
          </button>
        </div>
        <div 
          className="mute-button" 
          onClick={toggleMute} 
          aria-label={muted ? "Unmute video" : "Mute video"}
          title={muted ? "Unmute video" : "Mute video"}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleMute();
            }
          }}
        >
          {muted ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 9L17 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 9L23 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.07 5.93C20.9447 7.80528 21.9979 10.3447 21.9979 13C21.9979 15.6553 20.9447 18.1947 19.07 20.07" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoBackground; 