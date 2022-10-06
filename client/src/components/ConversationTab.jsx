import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import ConversationCard from './ConversationCard';

import './styles/ConversationTab.scss';

import { setUserConversations } from '../features/userSlice';

const ConversationTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userConversations } = useSelector((state) => state.user);

  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/conversation`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => {
        dispatch(setUserConversations(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
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
