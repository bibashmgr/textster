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
  const [message, setMessage] = useState('');

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
    let errors = {};
    if (message === '') {
      errors.others = 'Text is empty';
    }

    if (Object.entries(errors).length > 0) {
      console.log(errors);
    }

    if (Object.entries(errors).length === 0) {
      axios
        .post(`/message/${friendInfo._id}/create`, { text: message })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='chatbox-form-btn' type='submit'>
          <RiSendPlaneFill style={{ cursor: 'pointer' }} />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
