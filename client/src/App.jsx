import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import io from 'socket.io-client';

// Custom-styling
import './App.scss';

// pages
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Setting from './pages/Setting';

const App = () => {
  const socket = useRef();

  // const { logger } = useSelector((state) => state.value);

  useEffect(() => {
    socket.current = io('ws://localhost:9999', {
      withCredentials: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home socket={socket} />} />
        <Route path='/chat/:id' element={<Chat socket={socket} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </Router>
  );
};

export default App;
