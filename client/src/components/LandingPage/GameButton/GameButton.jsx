import React from 'react';
import { useHisory, useHistory } from 'react-router-dom';
import './GameButton.css';

function GameButton() {
  const history = useHistory();

  return (
    <div className="game-button-div game-button">
      <button onClick={() => history.push('/game-start')}>
        Test Your Breaking Bad Knowledge
      </button>
    </div>
  );
}

export default GameButton;
