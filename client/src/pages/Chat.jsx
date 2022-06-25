import React from 'react';
import { useSelector } from 'react-redux';

// components
import Topbar from '../components/Topbar';
import ChatBox from '../components/ChatBox';

// custom-styling
import './styles/Layout.scss';

const Chat = ({ socket }) => {
  const { logger } = useSelector((state) => state.user);

  return (
    <div className='container'>
      <div className='box'>
        <Topbar />
        <ChatBox socket={socket} logger={logger} />
      </div>
    </div>
  );
};

export default Chat;
