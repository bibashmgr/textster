import React from 'react';

// custom-styling
import './styles/ConversationCard.scss';

const ConversationCard = ({ userInfo }) => {
  return (
    <div className='conversation-card-container'>
      <div className='conversation-card-avatar'>
        <img
          src={
            userInfo
              ? userInfo.avatar && userInfo.avatar
              : './images/default.jpg'
          }
          alt=''
        />
      </div>
      <div className='conversation-card-text'>
        <div className='conversation-card-fullname'>
          {userInfo &&
            userInfo.firstname + ' ' + (userInfo.lastname && userInfo.lastname)}
        </div>
        <div className='conversation-card-desc'>
          {userInfo.lastMessage && userInfo.lastMessage.text}
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
