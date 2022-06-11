import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

//components
import ConversationCard from './ConversationCard';

// custom-styling
import './styles/ConversationTab.scss';

// actions
import { setUserConversations } from '../features/userSlice';

const ConversationTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userConversations } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get('/conversation')
      .then((res) => {
        dispatch(setUserConversations(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className='conversation-tab-container'>
      {userConversations &&
        userConversations.map((convo) => {
          return (
            <div
              className='conversation-tab-box'
              key={convo._id}
              onClick={() => {
                navigate(`/chat/${convo._id}`);
              }}
            >
              <ConversationCard userInfo={convo} />
            </div>
          );
        })}
    </div>
  );
};

export default ConversationTab;
