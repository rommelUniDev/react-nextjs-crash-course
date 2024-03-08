import './Scoreboard.css';

export default function Scoreboard() {
  return (
    <>
      <h1>Scoreboard</h1>
      <div className='scoreboard'>
        <div className='player-score'>
          <h2>Player 1</h2>
          <p className='score'>0</p>
          <div className='buttons'>
            <button className='button'>-</button>
            <button className='button'>+</button>
          </div>
        </div>
        <div className='player-score'>
          <h2>Player 2</h2>
          <p className='score'>0</p>
          <div className='buttons'>
            <button className='button'>-</button>
            <button className='button'>+</button>
          </div>
        </div>
      </div>
    </>
  );
}
