export function PlayerScore({ name, score, onIncrement, onDecrement, onReset }) {
  return (
    <div className='player-score'>
      <h2>{name}</h2>
      <p className='score'>{score}</p>
      <div className='buttons'>
        <button className='button' onClick={onDecrement}>
          -
        </button>
        <button className='button' onClick={onIncrement}>
          +
        </button>
      </div>
      <div className='reset' onClick={onReset}>Reset</div>
    </div>
  );
}