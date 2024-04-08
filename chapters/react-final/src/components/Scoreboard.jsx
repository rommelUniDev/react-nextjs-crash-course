import { PlayerScore } from "./PlayerScore";
import { useScore } from "../hooks/useScore";
import "./Scoreboard.css";

export function Scoreboard() {
  const maxScore = 21;
  const {
    score: player1Score,
    incrementScore: incrementPlayer1Score,
    decrementScore: decrementPlayer1Score,
    resetScore: resetPlayer1Score,
  } = useScore(0, maxScore, "player1");
  const {
    score: player2Score,
    incrementScore: incrementPlayer2Score,
    decrementScore: decrementPlayer2Score,
    resetScore: resetPlayer2Score,
  } = useScore(
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
          onReset={resetPlayer1Score}
        />
        <PlayerScore
          name="Player 2"
          score={player2Score}
          onIncrement={() => incrementPlayer2Score(1)}
          onDecrement={() => decrementPlayer2Score(1)}
          onReset={resetPlayer2Score}
        />
      </div>
    </>
  );
}
