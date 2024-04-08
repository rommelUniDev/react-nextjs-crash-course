import React from 'react';
import PropTypes from 'prop-types';

export function PlayerScore({ name, score, onIncrement, onDecrement }) {
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
    </div>
  );
}

PlayerScore.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
