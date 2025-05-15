import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './VideoBackground.css';

const VideoBackground = () => {
  const [muted, setMuted] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const playerRef = useRef(null);
  
  const birthdayPhrases = [
    "ЭЙ, БОГДАН!",
    "НА МИНУТОЧКУ...",
    "БРАТАН, С ДНЮХОЙ ТЕБЯ!",
    "32 ЛЕТ — ЭТО УЖЕ...",
    "ПОЧТИ КАК 40, ТОЛЬКО ПОКА ЕЩЁ НОРМ!",
    "В ТВОЁМ ВОЗРАСТЕ...",
    "УЖЕ ПОРА БЫ ПЕРЕСТАТЬ...",
    "СПИСЫВАТЬ СЕДИНУ НА МУДРОСТЬ!",
    "КРИЗИС СРЕДНЕГО ВОЗРАСТА...",
    "ЭТО КОГДА ПИВНОЙ ЖИВОТ",
    "НАЗЫВАЕШЬ ПИВНЫМ ОПЫТОМ!",
    "НО ТЫ ЕЩЁ НИЧЕГО!",
    "ДЛЯ СВОЕГО ВОЗРАСТА",
    "ЧЕРТОВСКИ ХОРОШ!",
    "С ДНЁМ РОЖДЕНИЯ, КОБАНЯРА!"
  ];

  const toggleMute = () => {
    console.log("Toggle mute clicked, current state:", muted);
    setMuted(!muted);
  };

  // Эффект для смены текста каждые несколько секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex((prevIndex) => 
        prevIndex < birthdayPhrases.length - 1 ? prevIndex + 1 : 0
      );
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [textIndex, birthdayPhrases.length]);

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
          <div className="birthday-message">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> 
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {birthdayPhrases.map((phrase, index) => (
              <h1 
                key={index} 
                className={`birthday-phrase ${index === textIndex ? 'active' : ''} ${index < textIndex ? 'seen' : ''}`}
              >
                {phrase}
              </h1>
            ))}
          </div>
          <h2>ВЕЛИЧАЙШЕМУ ИЗ МУЖИКОВ</h2>
          <button className="cta-button pulse">ОТМЕТИТЬ ВМЕСТЕ!</button>
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