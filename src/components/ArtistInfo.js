import React, { useState, useEffect } from 'react';
import './ArtistInfo.css';

const ArtistInfo = () => {
  const [artistStats, setArtistStats] = useState([
    { number: '15M+', label: 'Monthly Listeners' },
    { number: '20+', label: 'Platinum Singles' },
    { number: '5', label: 'Sold-out Tours' },
    { number: '12', label: 'Music Awards' }
  ]);
  
  const [isLoading, setIsLoading] = useState(true);
  
  const youtubeVideos = [
    '6gCbAkqMKYg', // LOBODA - VOSKRESENIE
    'gjScw5ZlZMs', // LOBODA - NEBO ZNAET
    'tvoi-glaza', // Tvoi glaza
    'instinkt'    // INSTINKT
  ];
  
  useEffect(() => {
    // Fetch artist stats from Spotify API
    const fetchArtistStats = async () => {
      try {
        setIsLoading(true);
        
        // Loboda's Spotify artist ID
        const artistId = '59oe7CAquFZ5mNjQ1efKPN';
        
        // Using the public proxy to avoid CORS issues for demo purposes
        // In production, this should be handled by your backend
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://open.spotify.com/artist/${artistId}`)}`);
        const data = await response.json();
        
        if (data && data.contents) {
          // Parse the response to extract relevant information
          // This is a simplified example - in a real app, use the official Spotify API with auth
          const content = data.contents;
          
          // Extract monthly listeners count
          const listenersMatch = content.match(/"followers":{"total":(\d+)}/);
          const monthlyListeners = listenersMatch ? parseInt(listenersMatch[1]).toLocaleString() : '15M+';
          
          // Update stats with real data when available
          setArtistStats([
            { number: monthlyListeners, label: 'Monthly Listeners' },
            { number: '20+', label: 'Platinum Singles' },
            { number: '5', label: 'Sold-out Tours' },
            { number: '12', label: 'Music Awards' }
          ]);
        }
      } catch (error) {
        console.error('Error fetching artist stats:', error);
        // Keep default stats on error
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArtistStats();
  }, []);

  return (
    <div className="artist-info">
      <h2 className="section-title">ARTIST INFO</h2>
      
      <div className="artist-stats">
        {artistStats.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{isLoading ? '...' : item.number}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
      
      <div className="artist-content full-width">
        <div className="artist-bio">
          <div className="bio-quote">
            <blockquote>
              "My music is about freedom, power, and breaking boundaries."
            </blockquote>
            <cite>— LOBODA</cite>
          </div>
          </div>
          
        <div className="videos-section">
          <h3>OFFICIAL VIDEOS</h3>
          <div className="videos-container">
            {youtubeVideos.slice(0, 2).map((videoId, index) => (
              <div key={index} className="youtube-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`LOBODA YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                </div>
              ))}
          </div>
        </div>
        
        <div className="spotify-section">
          <h3>LATEST TRACKS</h3>
          <div className="spotify-container">
            <iframe 
              title="Spotify Embed: LOBODA"
              src="https://open.spotify.com/embed/artist/59oe7CAquFZ5mNjQ1efKPN?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
          <div className="spotify-note">
            <p>To enable the Spotify widget, you need to:</p>
            <ol>
              <li>Have a Spotify account (free or premium)</li>
              <li>Allow third-party cookies in your browser</li>
              <li>Ensure your ad-blocker isn't blocking Spotify embeds</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo; 