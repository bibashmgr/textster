import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './styles/Register.scss';

const Register = () => {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    password2: '',
  });
  const [msg, setMsg] = useState({});

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let messages = {};

    if (userInfo.password !== userInfo.password2) {
      messages.password = "Password doesn't match";
    }

    if (Object.entries(messages).length > 0) {
      setMsg(messages);
    }

    if (Object.entries(messages).length === 0) {
      axios
        .post(`${BASE_URL}/auth/register`, userInfo)
        .then((res) => {
          setUserInfo({
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            password2: '',
          });
          msg.success = 'Registeration Successful';
        })
        .catch((error) => {
          msg.error = error.response.data;
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className='register-section'>
      <div className='register-form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className='form-title'>
            <h1 className='title'>Create an account</h1>
            {msg.success && (
              <div className='success-message'>{msg.success}</div>
            )}
            {msg.error && <div className='error-message'>{msg.error}</div>}
          </div>
          <div className='form-fields'>
            <div className='form-field'>
              <input
                type='text'
                name='firstname'
                placeholder='First Name'
                pattern='[a-zA-Z]+'
                required
                value={userInfo.firstname}
                onChange={handleChange}
              />
            </div>
            <div className='form-field'>
              <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                pattern='[a-zA-Z ]+'
                required
                value={userInfo.lastname}
                onChange={handleChange}
              />
            </div>
            <div className='form-field'>
              <input
                type='text'
                name='username'
                placeholder='Username'
                pattern='[a-z0-9._]+'
                minLength='3'
                maxLength='20'
                autoComplete='off'
                required
                value={userInfo.username}
                onChange={handleChange}
              />
            </div>
            <div className='form-field'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                required
                minLength='8'
                maxLength='20'
                autoComplete='off'
                value={userInfo.password}
                onChange={handleChange}
              />
              {msg.password && (
                <div className='error-message'>{msg.password}</div>
              )}
            </div>
            <div className='form-field'>
              <input
                type='password'
                name='password2'
                placeholder='Confirm Password'
                required
                minLength='8'
                maxLength='20'
                autoComplete='off'
                value={userInfo.password2}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-buttons'>
            <button type='submit' className='button'>
              Sign up
            </button>
          </div>
          <div className='form-subtext'>
            <p>Already have an account?</p>
            <a href='/login'>Login</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
