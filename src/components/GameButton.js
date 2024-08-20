import React from 'react';

function GameButton({ gameStarted, onClick, clickable, onClickButton }) {
  return (
    <div className="game-buttons">
      <button
        className="start-button"
        onClick={onClick}
        disabled={gameStarted}
      >
        Iniciar Juego
      </button>
      <button
        className="click-button"
        onClick={onClickButton}
        disabled={!clickable}
      >
        Click Me!
      </button>
    </div>
  );
}

export default GameButton;
