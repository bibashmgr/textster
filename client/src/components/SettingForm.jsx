import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { FaTimes } from 'react-icons/fa';

import './styles/SettingForm.scss';

import { setLogger } from '../features/userSlice';

const SettingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [helperMessages, setHelperMessages] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let messages = {};
    let pattern = /^[a-z0-9_.]+$/;

    if (username === '') {
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
        .put('/user/update', { username: username })
        .then((res) => {
          if (res.status === 201) {
            dispatch(setLogger(res.data));
            setHelperMessages({ success: 'Username Updated' });
            setUsername('');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='setting-form-container'>
      <form className='setting-form-box' onSubmit={handleSubmit}>
        <div className='form-username-container'>
          <label htmlFor='username'>Enter username:</label>
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
        <div className='form-button-container'>
          <input type='submit' value='Update' />
        </div>
        <div className='cancel-button' onClick={handleCancel}>
          <FaTimes className='cancel-logo' />
        </div>
      </form>
    </div>
  );
};

export default SettingForm;
