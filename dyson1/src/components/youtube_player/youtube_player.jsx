import React from 'react';

const YouTubePlayer = () => {
  const videoId = "LGWFqeT9UcQ"; // Идентификатор видео из URL

  return (
    <div className="video-container" style={{ width: '100%', maxWidth: '1360px', margin: '0 auto' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;