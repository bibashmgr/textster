import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// icons
import { RiSendPlaneFill } from 'react-icons/ri';

// components
import ProfileCard from './ProfileCard';
import Messages from './Messages';

// custom-styling
import './styles/ChatBox.scss';

const ChatBox = () => {
  const { id } = useParams();

  const [friendInfo, setFriendInfo] = useState({});
  const [messagesInfo, setMessagesInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`/user/${id}`)
      .then((res) => {
        setFriendInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`/message/${id}`)
      .then((res) => {
        setMessagesInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // handlers
  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <div className='chatbox-container'>
      <div className='chatbox-navbar'>
        <ProfileCard userInfo={friendInfo} />
      </div>
      <div className='chatbox-content'>
        <Messages messagesInfo={messagesInfo} friendInfo={friendInfo} />
      </div>
      <form className='chatbox-form' onSubmit={handleSend}>
        <input
          type='text'
          name='message'
          id='message'
          className='chatbox-form-input'
          autoComplete='off'
        />
        <button className='chatbox-form-btn' type='submit'>
          <RiSendPlaneFill style={{ cursor: 'pointer' }} />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
