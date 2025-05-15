import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './VideoBackground.css';

const VideoBackground = () => {
  const [muted, setMuted] = useState(true);
  const playerRef = useRef(null);

  const toggleMute = () => {
    console.log("Toggle mute clicked, current state:", muted);
    setMuted(!muted);
  };

  // Debug to verify state changes
  useEffect(() => {
    console.log("Muted state changed to:", muted);
  }, [muted]);

  return (
    <div className="video-background">
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=r6EJpQCFk3w"
        playing={true}
        loop={true}
        muted={muted}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              showinfo: 0,
              rel: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1
            }
          }
        }}
      />
      <div className="overlay">
        <div className="content">
          <h1>LOBODA</h1>
          <h2>EUROPEAN TOUR 2025</h2>
          <button className="cta-button pulse">BUY TICKETS</button>
        </div>
        <div 
          className="mute-button" 
          onClick={toggleMute} 
          aria-label={muted ? "Unmute" : "Mute"}
          title={muted ? "Unmute" : "Mute"}
          role="button"
          tabIndex={0}
        >
          {muted ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 9L17 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 9L23 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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