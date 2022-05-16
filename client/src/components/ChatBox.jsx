import React from 'react';

// icons
import { RiSendPlaneFill } from 'react-icons/ri';

// components
import ProfileCard from './ProfileCard';
import Messages from './Messages';

// custom-styling
import './styles/ChatBox.scss';

const ChatBox = () => {
  return (
    <div className='chatbox-container'>
      <div className='chatbox-navbar'>
        <ProfileCard />
      </div>
      <div className='chatbox-content'>
        <Messages />
      </div>
      <form className='chatbox-form'>
        <input
          type='text'
          name='message'
          id='message'
          className='chatbox-form-input'
        />
        <div className='chatbox-form-btn'>
          <RiSendPlaneFill style={{ cursor: 'pointer' }} />
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
