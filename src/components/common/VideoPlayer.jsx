import React from 'react';

const VideoPlayer = ({ embedId, title }) => {
  return (
    <div className="video-container mb-8">
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <div className="relative overflow-hidden pb-9/16 rounded-lg shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;