import React from 'react';

//components
import ConversationCard from './ConversationCard';

// custom-styling
import './styles/ConversationTab.scss';

const ConversationTab = () => {
  return (
    <div className='conversation-tab-container'>
      <div className='conversation-tab-box'>
        <ConversationCard />
      </div>
    </div>
  );
};

export default ConversationTab;
