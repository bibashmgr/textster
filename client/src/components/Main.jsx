import React from 'react';
import { useState } from 'react';

// icons
import { BsFillChatSquareTextFill, BsFillPeopleFill } from 'react-icons/bs';

// components
import ConversationTab from './ConversationTab';
import ContactTab from './ContactTab';
import ProfileCard from './ProfileCard';

// custom-styling
import './styles/Main.scss';

const Sidebar = () => {
  // states
  const [conversationOpen, setConversationOpen] = useState(true);

  // handlers
  const switchConversation = () => {
    setConversationOpen(true);
  };
  const switchContact = () => {
    setConversationOpen(false);
  };

  return (
    <div className='main-container'>
      <div className='main-tabs'>
        <div className='tabs'>
          <div
            className='tab-conversation'
            id='conversation'
            onClick={switchConversation}
            style={
              conversationOpen
                ? {
                    borderBottom: '5px solid #3AAFA9',
                  }
                : {
                    border: 'none',
                  }
            }
          >
            <BsFillChatSquareTextFill
              id='conversationicon'
              onClick={switchConversation}
            />
          </div>
          <div
            className='tab-contact'
            id='contact'
            onClick={switchContact}
            style={
              !conversationOpen
                ? {
                    borderBottom: '5px solid #3AAFA9',
                  }
                : {
                    border: 'none',
                  }
            }
          >
            <BsFillPeopleFill id='contacticon' onClick={switchContact} />
          </div>
        </div>
        <div className='tabs-content'>
          {conversationOpen ? <ConversationTab /> : <ContactTab />}
        </div>
      </div>
      <div className='main-profile'>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Sidebar;
