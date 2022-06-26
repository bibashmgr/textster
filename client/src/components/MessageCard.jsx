import React from 'react';
import moment from 'moment';

import './styles/MessageCard.scss';

const MessageCard = ({ isUser, messageInfo, friendInfo }) => {
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
    alignItems: 'flex-start',
  };
  const rightPosition = {
    alignItems: 'flex-end',
  };
  const leftMargin = {
    marginLeft: '10px',
  };
  const rightMargin = {
    marginRight: '10px',
  };

  return (
    <div
      className='message-card-container'
      style={isUser ? flexRight : flexLeft}
    >
      {!isUser && (
        <div className='message-card-avatar'>
          <img
            src={`https://avatars.dicebear.com/api/initials/${
              friendInfo?.firstname + friendInfo?.lastname || 'W'
            }.svg?fontSize=35`}
            alt=''
          />
        </div>
      )}
      <div
        className='message-card-text'
        style={isUser ? rightPosition : leftPosition}
      >
        <div
          className='message-card-desc'
          style={isUser ? darkBackground : lightBackground}
        >
          {messageInfo.text}
        </div>
        <div
          className='message-card-date'
          style={isUser ? rightMargin : leftMargin}
        >
          {moment(messageInfo.createdAt).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
