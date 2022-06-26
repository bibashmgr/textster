import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { FaTimes } from 'react-icons/fa';

import './styles/ContactModal.scss';

import { setLogger } from '../features/userSlice';

const ContactModal = ({ setIsModalOpen, logger }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [helperMessages, setHelperMessages] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let messages = {};
    let pattern = /^[a-z0-9_.]+$/;

    if (logger?.username === '') {
      messages.error = 'Set your username first (Go to Setting)';
    } else if (username === '') {
      messages.error = 'Username is required';
    } else if (username.length < 3) {
      messages.error = 'Username is too short';
    } else if (username.length > 20) {
      messages.error = 'Username is too long';
    } else if (!pattern.test(username)) {
      messages.error = 'Invalid character entry';
    }

    if (Object.entries(messages).length > 0) {
      setHelperMessages(messages);
    }

    if (Object.entries(messages).length === 0) {
      axios
        .put('/contact/add', { username: username })
        .then((res) => {
          if (res.status === 201) {
            dispatch(setLogger(res.data));
            setHelperMessages({ success: 'User Added' });
            setUsername('');
          }
        })
        .catch((error) => {
          setHelperMessages({ error: error.response.data.message });
        });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='contact-modal-container'>
      <form className='contact-modal-form' onSubmit={handleSubmit}>
        <div className='modal-username-container'>
          <label htmlFor='username'>Enter username</label>
          <input
            type='text'
            name='username'
            id='username'
            autoCapitalize='off'
            autoComplete='off'
            autoCorrect='off'
            value={username}
            onChange={handleChange}
          />
          <div className='helper-text-box'>
            {helperMessages?.error && (
              <div className='helper-text' style={{ color: 'red' }}>
                {helperMessages.error}
              </div>
            )}
            {helperMessages?.success && (
              <div className='helper-text' style={{ color: 'green' }}>
                {helperMessages.success}
              </div>
            )}
          </div>
        </div>
        <div className='modal-button-container'>
          <input type='submit' value='Add Contact' />
        </div>
        <div className='modal-cancel-button' onClick={handleCancel}>
          <FaTimes className='modal-cancel-logo' />
        </div>
      </form>
    </div>
  );
};

export default ContactModal;
