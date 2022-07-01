import React from 'react';
import moment from 'moment';

import './styles/ConversationCard.scss';

const ConversationCard = ({ userInfo }) => {
  return (
    <div className='conversation-card-container'>
      <div className='conversation-card-avatar'>
        <img
          src={`https://avatars.dicebear.com/api/initials/${
            userInfo?.firstname + userInfo?.lastname || 'UK'
          }.svg?fontSize=35`}
          alt=''
        />
      </div>
      <div className='conversation-card-text'>
        <div className='conversation-card-text-box'>
          <div className='conversation-card-fullname'>
            {userInfo?.firstname + ' ' + userInfo?.lastname}
          </div>
          <div className='conversation-card-desc'>
            {userInfo?.lastMessage?.text}
          </div>
        </div>
        <div className='conversation-card-time'>
          {moment(userInfo?.lastMessage?.createdAt).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
