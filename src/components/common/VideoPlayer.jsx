import React from 'react';

const VideoPlayer = ({ embedId, title, id }) => {
  // List of IDs that should use Google Drive preview
  const googleDriveIds = ['m1v2', 'm1v3', 'unit1pdf', 'gdvideo1'];

  // Map ID to corresponding Google Drive file ID
  const driveFileIds = {
    m1v2: '13giyWVta63IvUD-4wMs0UbytlU9IeOuq',
  };

  const isGoogleDrive = googleDriveIds.includes(id);
  const driveFileId = driveFileIds[id];

  return (
    <div className="video-container mb-8">
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <div className="relative overflow-hidden pb-9/16 rounded-lg shadow-lg">
        {isGoogleDrive ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://drive.google.com/file/d/${driveFileId}/preview`}
            title="Google Drive Content"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${embedId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
