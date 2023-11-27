import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';
import Title from "./components/Title";
import Help from "./components/Help";
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
      <div className="text-center" style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main role="main" className="App inner cover">
                <Title />
                <Timer />
                <Help />
            </main>
        </div>
      </div>
  );
}

export default App;
