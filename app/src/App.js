import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';

function App() {
  return (
      <div className="text-center">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main role="main" className="App inner cover">
                <Timer />
            </main>
        </div>
      </div>
  );
}

export default App;
