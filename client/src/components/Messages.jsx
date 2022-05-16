import React from 'react';

// components
import MessageCard from './MessageCard';

// custom-styling
import './styles/Messages.scss';

const Messages = () => {
  return (
    <div className='messages-container'>
      <div className='messages-box'>
        <MessageCard isUser={false} />
      </div>
      <div className='messages-box'>
        <MessageCard isUser={true} />
      </div>
      <div className='messages-box'>
        <MessageCard isUser={false} />
      </div>
      <div className='messages-box'>
        <MessageCard isUser={true} />
      </div>
    </div>
  );
};

export default Messages;
