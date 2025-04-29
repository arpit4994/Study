// src/udaan/VideoList.jsx
import React, { useState } from 'react';
import VideoPlayer from '../common/VideoPlayer';

const VideoList = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [showNotes, setShowNotes] = useState(true);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    // Automatically show notes when a new video is selected
    setShowNotes(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Video Player and Notes Section - Takes 2/3 of the width on large screens */}
      <div className="lg:col-span-2">
        <VideoPlayer embedId={selectedVideo?.embedId} />
        
        {/* Notes Section */}
        {selectedVideo?.notes && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-white">Lecture Notes</h3>
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {showNotes ? 'Hide Notes' : 'Show Notes'}
              </button>
            </div>
            
            {showNotes && (
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">{selectedVideo.notes}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Video List - Takes 1/3 of the width on large screens */}
      <div className="lg:col-span-1">
        <h3 className="text-xl font-bold text-white mb-4">Videos</h3>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`p-3 cursor-pointer transition-colors ${
                selectedVideo?.id === video.id
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
              onClick={() => handleVideoSelect(video)}
            >
              <h4 className="text-white font-medium">{video.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;