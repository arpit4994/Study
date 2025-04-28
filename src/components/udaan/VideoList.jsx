import React from 'react';
import VideoPlayer from '../common/VideoPlayer';

const VideoList = ({ videos }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <VideoPlayer
            key={video.id}
            embedId={video.embedId}
            title={video.title}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;