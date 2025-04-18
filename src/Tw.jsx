import React, { useState } from 'react'
import './Video.css'

import Data3 from './Data3.jsx'
import {useParams} from 'react-router-dom';
  function Tw() {
    const { id } = useParams();
  const video = Data3.find(video => video.id === parseInt(id));

    return (
      
        <div><header>

        <div className="header">
         <h1> jetplex</h1>
        </div>
        </header>
        <div className="title"><h1>{video.title}</h1></div>  
        <div className="video-container">
      <video  controls autoPlay style={{ width: '100%', maxWidth: '100%', height: '100%',maxHeight: '500px', margin: '1px', borderRadius:'15px' ,background:'black' }} className="video-player">
        <source src={video.videoUrl} type="video/mp4" />

      </video>
   
     

    </div>
    <div className="about">
      <h2>About</h2>
    <p>{video.description}</p>
    </div>
      </div>
    )
  }
  export default Tw;

