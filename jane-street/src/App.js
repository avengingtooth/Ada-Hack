import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home.js"
import Recording from "./pages/recording/recording.js"
import ErrorPage from "./pages/error/error.js"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Recording />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
