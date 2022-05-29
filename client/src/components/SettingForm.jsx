import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

// custom-styling
import './styles/SettingForm.scss';

const SettingForm = () => {
  const { logger } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  useEffect(() => {}, []);

  // handlers
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
    } else if (username.length > 10) {
      messages.error = 'Username is too long';
    } else if (!pattern.test(username)) {
      messages.error = 'Invalid character entry';
    }

    if (Object.entries(messages).length === 0) {
      axios
        .put('/user/update', { id: logger._id, username: username })
        .then((res) => {
          if (res.status === 201) {
            setUsername('');
            navigate('/');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
        </div>
        <div className='form-button-container'>
          <input type='submit' value='Update' />
        </div>
      </form>
    </div>
  );
};

export default SettingForm;
