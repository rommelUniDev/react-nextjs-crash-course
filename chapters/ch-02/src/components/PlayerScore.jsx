export function PlayerScore(props) {
  return (
    <div className='player-score'>
      <h2>{props.name}</h2>
      <p className='score'>{props.score}</p>
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