import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home.js"
import Recording from "./pages/recording/recording.js"
import Leaderboard from './pages/leaderboard/leaderboard.js';
import ErrorPage from "./pages/error/error.js"
import Rewards from './pages/rewards/rewards.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Recording />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;