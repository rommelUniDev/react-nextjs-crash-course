import { useState } from "react";

export function useScore(initialScore, maxScore) {
  const [score, setScore] = useState(initialScore);

  function incrementScore() {
    setScore(previousScore => {
      if (previousScore === maxScore) {
        return previousScore;
      }
      return previousScore + 1;
    });
  }

  function decrementScore() {
    setScore(previousScore => {
      if (previousScore <= 0) {
        return 0;
      }
      return previousScore - 1;
    });
  }

  return [score, incrementScore, decrementScore];
}
