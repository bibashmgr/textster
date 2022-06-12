import React from 'react';
import { useSelector } from 'react-redux';

// components
import MessageCard from './MessageCard';

// custom-styling
import './styles/Messages.scss';

const Messages = ({ messagesInfo, friendInfo }) => {
  const { logger } = useSelector((state) => state.user);

  return (
    <div className='messages-container'>
      {logger &&
        messagesInfo.map((messageInfo) => {
          return (
            <div className='messages-box' key={messageInfo._id}>
              <MessageCard
                isUser={messageInfo.senderId === logger._id}
                messageInfo={messageInfo}
                friendInfo={friendInfo}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Messages;
