import React from 'react';

// custom-styling
import './styles/ConversationCard.scss';

const ConversationCard = () => {
  return (
    <div className='conversation-card-container'>
      <div className='conversation-card-avatar'>
        <img src='./images/default_avatar.jpg' alt='avatar' />
      </div>
      <div className='conversation-card-text'>
        <div className='conversation-card-fullname'>Bibash Thapa Magar</div>
        <div className='conversation-card-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
