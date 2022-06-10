import React from 'react';

// custom-styling
import './styles/MessageCard.scss';

const MessageCard = ({ isUser, messageInfo, friendInfo }) => {
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
          <img
            src={
              friendInfo
                ? friendInfo.avatar && friendInfo.avatar
                : './images/default.jpg'
            }
            alt=''
          />
        </div>
      )}
      <div className='message-card-text'>
        <div
          className='message-card-desc'
          style={isUser ? darkBackground : lightBackground}
        >
          {messageInfo.text}
        </div>
        <div
          className='message-card-date'
          style={isUser ? rightPosition : leftPosition}
        >
          2020/10/12 10:24 AM
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
