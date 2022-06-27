import React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

// components
import MessageCard from './MessageCard';

import './styles/Messages.scss';

const Messages = ({ messagesInfo, friendInfo }) => {
  const { logger } = useSelector((state) => state.user);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messagesInfo]);

  return (
    <div className='messages-container'>
      {logger &&
        messagesInfo.map((messageInfo, index) => {
          return (
            <div className='messages-box' key={index} ref={scrollRef}>
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
