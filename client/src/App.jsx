import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom-styling
import './App.scss';

// pages
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Setting from './pages/Setting';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat/:id' element={<Chat />} />
        <Route path='/login' element={<Login />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </Router>
  );
};

export default App;
