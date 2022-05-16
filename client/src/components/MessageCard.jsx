import React from 'react';

// custom-styling
import './styles/MessageCard.scss';

const MessageCard = ({ isUser }) => {
  // styles

  const flexLeft = {
    justifyContent: 'flex-start',
  };
  const flexRight = {
    justifyContent: 'flex-end',
  };
  const lightBackground = {
    backgroundColor: '#FFFFFF',
    color: '#17252A',
  };
  const darkBackground = {
    backgroundColor: '#3AAFA9',
    color: '#FFFFFF',
  };
  const leftPosition = {
    left: '16px',
  };
  const rightPosition = {
    right: '16px',
  };

  return (
    <div
      className='message-card-container'
      style={isUser ? flexRight : flexLeft}
    >
      {!isUser && (
        <div className='message-card-avatar'>
          <img src='./images/default_avatar.jpg' alt='avatar' />
        </div>
      )}
      <div className='message-card-text'>
        <div
          className='message-card-desc'
          style={isUser ? darkBackground : lightBackground}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <div
            className='message-card-date'
            style={isUser ? rightPosition : leftPosition}
          >
            2020/10/12 10:24 AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
