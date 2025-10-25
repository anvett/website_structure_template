import React from 'react';

const YouTubeVideoPlayer = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`;

  return (
    <div className="w-full h-0 pb-9/16 relative lg:w-2/3 lg:mx-auto">
      <iframe
        src={videoUrl}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
    </div>
  );
};

export default YouTubeVideoPlayer;
