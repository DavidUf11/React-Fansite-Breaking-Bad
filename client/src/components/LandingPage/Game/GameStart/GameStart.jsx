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
        <h1 class="title">Breaking Bad Quote Quiz</h1>
        <p style={{ fontSize: '2rem', marginTop: '6rem', textAlign: 'center' }}>
          You'll be presented with a random quote from the show — choose the
          character that said it!
        </p>
        <br />
        <p
          style={{
            fontSize: '2rem',
            marginBottom: '6rem',
            textAlign: 'center'
          }}
        >
          If you miss two in a row it's game over.
        </p>
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
