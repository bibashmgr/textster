import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';

import './App.scss';

// pages
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io('ws://localhost:9999');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home socket={socket} />} />
        <Route path='/chat/:id' element={<Chat socket={socket} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
