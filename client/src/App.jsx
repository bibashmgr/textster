import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom-styling
import './App.scss';

// pages
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chat' exact element={<Chat />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
