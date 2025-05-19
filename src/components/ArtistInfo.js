import React from 'react';
import './ArtistInfo.css';

const ArtistInfo = () => {
  const achievements = [
    { number: '15M+', label: 'Monthly Listeners' },
    { number: '20+', label: 'Platinum Singles' },
    { number: '5', label: 'Sold-out Tours' },
    { number: '12', label: 'Music Awards' }
  ];
  
  const featuredVideos = [
    {
      id: 1,
      title: 'SuperStar',
      thumbnail: 'https://i.ytimg.com/vi/r6EJpQCFk3w/maxresdefault.jpg',
      views: '24M views'
    },
    {
      id: 2,
      title: 'Instadrama',
      thumbnail: 'https://i.ytimg.com/vi/r6EJpQCFk3w/maxresdefault.jpg',
      views: '18M views'
    },
    {
      id: 3,
      title: 'Boom Boom',
      thumbnail: 'https://i.ytimg.com/vi/r6EJpQCFk3w/maxresdefault.jpg',
      views: '31M views'
    }
  ];

  return (
    <div className="artist-info">
      <h2 className="section-title">ARTIST INFO</h2>
      
      <div className="artist-stats">
        {achievements.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{item.number}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
      
      <div className="artist-content">
        <div className="artist-bio">
          <div className="bio-quote">
            <blockquote>
              "My music is about freedom, power, and breaking boundaries."
            </blockquote>
            <cite>— LOBODA</cite>
          </div>
          
          <div className="featured-videos">
            <h3>FEATURED VIDEOS</h3>
            <div className="video-grid">
              {featuredVideos.map(video => (
                <div key={video.id} className="video-card">
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="play-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <h4>{video.title}</h4>
                  <span>{video.views}</span>
                </div>
              ))}
            </div>
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