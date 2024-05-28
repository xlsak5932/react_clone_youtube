import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <div className="video__card">
      <Link to={`/video/${video.id.videoId}`}>
        {/* <Link to={`/video/https://www.youtube.com/watch?v=jTzM9Lf01zQ`}> */}
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </Link>
      <h3>{video.snippet.title.slice(0, 50)}</h3>
    </div>
  );
};

export default VideoCard;
