import { PlayerScore } from "./PlayerScore";
import { useScore } from "../hooks/useScore";
import "./Scoreboard.css";

export function Scoreboard() {
  const maxScore = 21;
  const [player1Score, incrementPlayer1Score, decrementPlayer1Score] = useScore(0, maxScore);
  const [player2Score, incrementPlayer2Score, decrementPlayer2Score] = useScore(0, maxScore);

  return (
    <>
      <div className="title">
        <h1>Scoreboard</h1>
        <h2>First to {maxScore}</h2>
      </div>
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
