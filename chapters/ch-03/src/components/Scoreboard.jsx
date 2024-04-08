import { useState } from "react";

import { PlayerScore } from "./PlayerScore";
import "./Scoreboard.css";

export function Scoreboard() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

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

  return (
    <>
      <h1>Scoreboard</h1>
      <div className="scoreboard">
        <PlayerScore
          name="Player 1"
          score={player1Score}
          onIncrement={incrementPlayer1Score}
          onDecrement={decrementPlayer1Score}
        />
        <PlayerScore
          name="Player 2"
          score={player2Score}
          onIncrement={incrementPlayer2Score}
          onDecrement={decrementPlayer2Score}
        />
      </div>
    </>
  );
}
