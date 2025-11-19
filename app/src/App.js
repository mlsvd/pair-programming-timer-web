import logo from './logo.svg';
import './App.css';
import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import TimerPage from "./components/TimerPage";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route
                      exact
                      path="/"
                      element={<TimerPage />}
                  />
                  <Route
                      path="*"
                      element={<Navigate to="/" />}
                  />
              </Routes>
          </Router>
      </>
  );
}

export default App;
