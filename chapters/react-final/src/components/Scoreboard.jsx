import { PlayerScore } from "./PlayerScore";
import { useScore } from "../hooks/useScore";
import "./Scoreboard.css";

export function Scoreboard() {
  const maxScore = 21;
  const [player1Score, incrementPlayer1Score, decrementPlayer1Score] = useScore(
    0,
    maxScore,
    "player1"
  );
  const [player2Score, incrementPlayer2Score, decrementPlayer2Score] = useScore(
    0,
    maxScore,
    "player2"
  );

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
          onIncrement={() => incrementPlayer1Score(1)}
          onDecrement={() => decrementPlayer1Score(1)}
        />
        <PlayerScore
          name="Player 2"
          score={player2Score}
          onIncrement={() => incrementPlayer2Score(1)}
          onDecrement={() => decrementPlayer2Score(1)}
        />
      </div>
    </>
  );
}
