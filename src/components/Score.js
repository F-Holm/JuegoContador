import React from 'react';

function Score({ maxScore }) {
  return (
    <div className="score">
      <p>Puntaje Máximo: {maxScore}</p>
    </div>
  );
}

export default Score;
