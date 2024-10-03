import React from 'react';
import {useParams} from 'react-router-dom';
import Data from './Data.jsx'

function VideoPlayer() {
  const { id } = useParams();
  const video = Data.find(video => video.id === parseInt(id));

  return (
    <div className="video-container">
      <video controls style={{ width: '80%', maxWidth: '800px', height: 'auto', marginBottom: '10px' }}>
        <source src={video.videoUrl} type="video/mp4" />

      </video>
      <div className="video-description">
        {video.description}
      </div>
    </div>
  );
}

export default VideoPlayer;