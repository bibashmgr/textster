import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// components
import Topbar from '../components/Topbar';
import ChatBox from '../components/ChatBox';

// custom-styling
import './styles/Layout.scss';

// actions
import { setLogger } from '../features/userSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/auth/login/success')
      .then((res) => {
        dispatch(setLogger(res.data));
      })
      .catch((error) => {
        if (error.response.data.message === 'Expired') {
          navigate('/login');
        }
      });
  }, [dispatch, navigate]);

  return (
    <div className='container'>
      <div className='box'>
        <Topbar />
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;
