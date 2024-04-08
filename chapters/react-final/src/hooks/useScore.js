import { useState, useEffect } from "react";

/**
 * Create a hook to manage each score display
 * @param {number} initialScore
 * @param {number} maxScore
 * @param {string} player
 * @returns {{ score: number, incrementScore: (count?: number) => void, decrementScore: (count?: number) => void, resetScore: () => void }} An object containing the current score, a function to increment the score, and a function to decrement the score
 */
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

  function resetScore() {
    localStorage.removeItem(`${player}Score`);
    setScore(initialScore);
  }

  return { score, incrementScore, decrementScore, resetScore };
}
