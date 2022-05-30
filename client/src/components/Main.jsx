import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { BsFillChatSquareTextFill, BsFillPeopleFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';

// components
import ConversationTab from './ConversationTab';
import ContactTab from './ContactTab';
import ProfileCard from './ProfileCard';

// custom-styling
import './styles/Main.scss';

const Sidebar = () => {
  const navigate = useNavigate();

  const [conversationOpen, setConversationOpen] = useState(true);

  const switchConversation = () => {
    setConversationOpen(true);
  };

  const switchContact = () => {
    setConversationOpen(false);
  };

  const handleSettingBtn = () => {
    navigate('/setting');
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
        <AiFillSetting className='setting-logo' onClick={handleSettingBtn} />
      </div>
    </div>
  );
};

export default Sidebar;
