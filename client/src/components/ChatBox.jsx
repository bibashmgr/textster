import React from 'react';

// icons
import { RiSendPlaneFill } from 'react-icons/ri';

// components
import ProfileCard from './ProfileCard';
import Messages from './Messages';

// custom-styling
import './styles/ChatBox.scss';

const ChatBox = () => {
  // handlers
  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <div className='chatbox-container'>
      <div className='chatbox-navbar'>
        <ProfileCard />
      </div>
      <div className='chatbox-content'>
        <Messages />
      </div>
      <form className='chatbox-form' onSubmit={handleSend}>
        <input
          type='text'
          name='message'
          id='message'
          className='chatbox-form-input'
          autoComplete='off'
        />
        <button className='chatbox-form-btn' type='submit'>
          <RiSendPlaneFill style={{ cursor: 'pointer' }} />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
