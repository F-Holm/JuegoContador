import React, { useState, useRef, useEffect } from 'react';
import Countdown from './components/Countdown';
import GameButton from './components/GameButton';
import Score from './components/Score';
import './styles.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  // Use useRef to keep track of the latest clicks value
  const clicksRef = useRef(clicks);

  // Update the clicksRef value whenever clicks change
  useEffect(() => {
    clicksRef.current = clicks;
  }, [clicks]);

  const startGame = () => {
    setGameStarted(true);
    setClicks(0);
    setCountdown(3);
    let countdownValue = 2;
    setCountdown(countdownValue);

    const countdownInterval = setInterval(() => {
      setCountdown(countdownValue);
      countdownValue -= 1;

      if (countdownValue < 0) {
        clearInterval(countdownInterval);
        startClicking();
      }
    }, 1000);
  };

  const startClicking = () => {
    setTimeRemaining(5);
    let timeLeft = 5;

    const timerInterval = setInterval(() => {
      setTimeRemaining(timeLeft);
      timeLeft -= 1;

      if (timeLeft < 0) {
        if (clicksRef.current > maxScore) {
          setMaxScore(clicksRef.current);
        }
        clearInterval(timerInterval);
        setGameStarted(false);
        setCountdown(3);
      }
    }, 1000);
  };

  return (
    <div className="app">
      <h1>Juego Contador</h1>
      <Score maxScore={maxScore} />
      <Countdown countdown={countdown} />
      <GameButton
        gameStarted={gameStarted}
        onClick={startGame}
        clickable={timeRemaining > 0}
        onClickButton={() => setClicks(clicks + 1)}
      />
      <div className="info">
        {gameStarted && <p>Tiempo restante: {timeRemaining} segundos</p>}
        {gameStarted && <p>Clicks: {clicks}</p>}
      </div>
    </div>
  );
}

export default App;
