import PropTypes from 'prop-types';

export function PlayerScore({
  name,
  score,
  onIncrement,
  onDecrement,
  onReset,
}) {
  return (
    <div className="player-score">
      <h2>{name}</h2>
      <p className="score">{score}</p>
      <div className="buttons">
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
      <button className="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

PlayerScore.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
