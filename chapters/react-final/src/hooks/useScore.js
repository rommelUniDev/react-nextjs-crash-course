import { useState, useEffect } from "react";

export function useScore(initialScore, maxScore, player) {
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    const savedScore = localStorage.getItem(`${player}Score`);
    if (savedScore) {
      setScore(Number(savedScore));
    }
  }, [player]);

  function incrementScore(count = 1) {
    if (score === maxScore) {
      return;
    }
    const result = score + count;
    localStorage.setItem(`${player}Score`, result);
    setScore(result);
  }

  function decrementScore(count = 1) {
    if (score === 0) {
      return;
    }
    const result = score - count;
    if (result < 0) {
      return;
    }
    localStorage.setItem(`${player}Score`, result);
    setScore(result);
  }
  
  return [score, incrementScore, decrementScore];
}
