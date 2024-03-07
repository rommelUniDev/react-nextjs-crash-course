import { PlayerScore } from './PlayerScore';
import './Scoreboard.css';

export function Scoreboard() {
  return (
    <>
      <h1>Scoreboard</h1>
      <div className='scoreboard'>
        <PlayerScore name='Player 1' score={0} />
        <PlayerScore name='Player 2' score={0} />
      </div>
    </>
  );
}
