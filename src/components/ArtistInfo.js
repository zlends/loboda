import React from 'react';
import './ArtistInfo.css';

const ArtistInfo = () => {
  return (
    <div className="artist-info">
      <h2 className="section-title">ARTIST INFO</h2>
      <div className="artist-content">
        <div className="artist-bio">
          <p>
            LOBODA is one of the most popular and influential artists in Eastern Europe. 
            With her powerful voice, charismatic stage presence, and innovative music videos, 
            she has captivated audiences across the continent and beyond.
          </p>
          <p>
            Her music blends pop, electronic, and R&B elements with catchy melodies and 
            thought-provoking lyrics. LOBODA's performances are known for their high energy, 
            stunning visuals, and theatrical elements.
          </p>
          <p>
            The European Tour 2025 will showcase her greatest hits and new material from her 
            latest album, promising an unforgettable experience for fans old and new.
          </p>
        </div>
        
        <div className="spotify-section">
          <h3>LATEST TRACKS</h3>
          <div className="spotify-container">
            <iframe 
              title="Spotify Embed: LOBODA"
              src="https://open.spotify.com/embed/artist/0CbeG1224FS58EUx4tPDrP?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo; 