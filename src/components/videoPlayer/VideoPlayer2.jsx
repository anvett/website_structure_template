

import React from 'react';

const VideoPlayer2 = ({ videoUrl }) => {
  return (
    <div className="w-full h-0 pb-9/16 relative">
      <video
        src={videoUrl}
        className="absolute top-0 left-0 w-full h-full"
        controls
        preload="metadata"
      ></video>
    </div>
  );
};

export default VideoPlayer2;




