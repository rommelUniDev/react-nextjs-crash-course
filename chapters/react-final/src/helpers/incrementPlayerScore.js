export function incrementPlayerScore(currentScore, maxScore) {  
  if (currentScore === maxScore) {
    return currentScore;
  }
  return currentScore + 1;
}
