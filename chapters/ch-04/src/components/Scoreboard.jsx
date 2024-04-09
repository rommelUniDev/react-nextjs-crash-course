import { useState, useEffect } from 'react';

import { PlayerScore } from './PlayerScore';
import './Scoreboard.css';

export function Scoreboard() {
  const [player1Score, setPlayer1Score] = useState(() => {
    // Get initial score from localStorage (or set a default)
    const storedScore = localStorage.getItem('player1Score');
    return storedScore ? parseInt(storedScore) : 0;
  });

  const [player2Score, setPlayer2Score] = useState(() => {
    const storedScore = localStorage.getItem('player2Score');
    return storedScore ? parseInt(storedScore) : 0;
  });

  const incrementPlayer1Score = () => {
    setPlayer1Score((currentScore) => currentScore + 1);
  };

  const incrementPlayer2Score = () => {
    setPlayer2Score((currentScore) => currentScore + 1);
  };

  const decrementPlayer1Score = () => {
    setPlayer1Score((currentScore) => currentScore - 1);
  };

  const decrementPlayer2Score = () => {
    setPlayer2Score((currentScore) => currentScore - 1);
  };

  const resetPlayer1Score = () => {
    setPlayer1Score(0);
  };

  const resetPlayer2Score = () => {
    setPlayer2Score(0);
  };

  useEffect(() => {
    // Save scores to localStorage whenever they change
    localStorage.setItem('player1Score', player1Score);
    localStorage.setItem('player2Score', player2Score);
  }, [player1Score, player2Score]); // This dependency array tells useEffect to run only when scores change

  return (
    <>
      <h1>Scoreboard</h1>
      <div className="scoreboard">
        <PlayerScore
          name="Player 1"
          score={player1Score}
          onIncrement={incrementPlayer1Score}
          onDecrement={decrementPlayer1Score}
          onReset={resetPlayer1Score}
        />
        <PlayerScore
          name="Player 2"
          score={player2Score}
          onIncrement={incrementPlayer2Score}
          onDecrement={decrementPlayer2Score}
          onReset={resetPlayer2Score}
        />
      </div>
    </>
  );
}
