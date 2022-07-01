import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { RiSendPlaneFill } from 'react-icons/ri';

import ProfileCard from './ProfileCard';
import Messages from './Messages';

import './styles/ChatBox.scss';

const ChatBox = ({ socket, logger }) => {
  const { id } = useParams();

  const [friendInfo, setFriendInfo] = useState({});
  const [messagesInfo, setMessagesInfo] = useState([]);
  const [message, setMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    axios
      .get(`/user/${id}`)
      .then((res) => {
        setFriendInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket.current?.on('getMessage', (data) => {
      setArrivalMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    arrivalMessage && setMessagesInfo((prev) => [...prev, arrivalMessage]);
    // eslint-disable-next-line
  }, [arrivalMessage]);

  useEffect(() => {
    axios
      .get(`/message/${id}`)
      .then((res) => {
        setMessagesInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, [isSent]);

  // handlers
  const handleSend = (e) => {
    e.preventDefault();
    let errors = {};
    if (message === '') {
      errors.others = 'Text is empty';
    }

    if (Object.entries(errors).length === 0) {
      let msg = message.replace(/</g, ' &lt; ').replace(/>/g, ' &gt; ');
      socket.current?.emit('sendMessage', {
        senderId: logger._id,
        receiverId: id,
        text: msg,
      });
      axios
        .post(`/message/${friendInfo._id}/create`, { text: msg })
        .then((res) => {
          setIsSent(!isSent);
        })
        .catch((error) => {
          console.log(error);
        });
      setMessage('');
    }
  };

  return (
    <div className='chatbox-container'>
      <div className='chatbox-navbar' style={{ zIndex: '1000' }}>
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
