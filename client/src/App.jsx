import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom-styling
import './App.scss';

// pages
import Home from './pages/Home';
import Chat from './pages/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chat' exact element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
