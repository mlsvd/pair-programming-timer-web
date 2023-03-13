import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';

function App() {
  return (
    <div className="App">
      <Timer />
      <TimerControls />
    </div>
  );
}

export default App;
