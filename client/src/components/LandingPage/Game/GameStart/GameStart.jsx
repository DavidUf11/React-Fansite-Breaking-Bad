import React from 'react';
import { useHistory } from 'react-router-dom';
import poster from '../../../../Images/Breaking_Bad-Season_2_Walt_Jesse.jpg';
import './GameStart.css';

const GameStart = () => {
  const history = useHistory();

  return (
    <div className="all-page-contents">
      <img src={poster} alt="Breaking Bad Season 2 Poster" id="poster" />

      <div class="game-rules-container">
        <h2 class="title">Breaking Bad Quote Quiz</h2>
        <p>Rules to be added here</p>
        <button
          onClick={() => history.push('/lets-play')}
          id="game-start-button"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};
export default GameStart;
