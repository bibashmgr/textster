import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom-styling
import './App.scss';

// pages
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
