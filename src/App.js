import { BrowserRouter as Router, Routes, Route, /* Link, Navigate */ } from 'react-router-dom';
import './App.css';

// page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import M from './pages/m/M';
import S from './pages/s/S';
import L from './pages/l/L';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/small" element={<S />} />
          <Route path="/medium" element={<M />} />
          <Route path="/large" element={<L />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
