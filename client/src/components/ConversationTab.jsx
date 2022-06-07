import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

//components
import ConversationCard from './ConversationCard';

// custom-styling
import './styles/ConversationTab.scss';

// actions
import { setUserConversations } from '../features/userSlice';

const ConversationTab = () => {
  const dispatch = useDispatch();

  const { userConversations } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get('/conversation')
      .then((res) => {
        dispatch(setUserConversations(res.data));
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className='conversation-tab-container'>
      {userConversations &&
        userConversations.lastMessages &&
        userConversations.lastMessages.map((convo, index) => {
          return (
            <div className='conversation-tab-box' key={convo.conversationId}>
              <ConversationCard
                userInfo={userConversations.membersInfo[index]}
                messageInfo={convo}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ConversationTab;
