import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// icons
import { FaTimes } from 'react-icons/fa';

// custom-styling
import './styles/ContactModal.scss';

// actions
import { setLogger } from '../features/userSlice';

const ContactModal = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

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
    } else if (username.length > 20) {
      messages.error = 'Username is too long';
    } else if (!pattern.test(username)) {
      messages.error = 'Invalid character entry';
    }

    if (Object.entries(messages).length === 0) {
      axios
        .put('/contact/add', { username: username })
        .then((res) => {
          if (res.status === 201) {
            dispatch(setLogger(res.data));
            setUsername('');
          }
        })
        .catch((error) => {
          console.log(error);
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
