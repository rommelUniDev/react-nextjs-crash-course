export function decrementPlayerScore(currentScore) {  
  if (currentScore <= 0) {
    return 0;
  }
  return currentScore - 1;
}
