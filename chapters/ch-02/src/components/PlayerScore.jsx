export function PlayerScore({ name, score }) {
  return (
    <div className='player-score'>
      <h2>{name}</h2>
      <p className='score'>{score}</p>
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