import React from 'react';
import Carousel from './Carousel/Carousel';
import GameButton from './GameButton/GameButton';
import './LandingPage.css';
import video from '../../Images/video.mp4';

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="video">
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '22rem',
            height: '100vh',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Carousel />
      {/* <button calssName="game-button">Test Your Knowledge</button> */}

      <GameButton />
    </div>
  );
}

export default LandingPage;
