export function PlayerScore(anything) {
  return (
    <div className='player-score'>
      <h2>{anything.name}</h2>
      <p className='score'>{anything.score}</p>
      <div className='buttons'>
        <button className='button'>
          -
        </button>
        <button className='button'>
          +
        </button>
      </div>
    </div>
  );
}