import React from 'react';

// components
import Topbar from '../components/Topbar';
import ChatBox from '../components/ChatBox';

// custom-styling
import './styles/Layout.scss';

const Chat = () => {
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
