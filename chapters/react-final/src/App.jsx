import { Scoreboard } from './components/Scoreboard';

export function App() {
  return (
    <div className='app'>
      <h1>My First React App</h1>
      <Scoreboard maxScore={21} />
    </div>
  )
}

export default App;
