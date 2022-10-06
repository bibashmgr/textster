import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setLogger } from '../features/userSlice';

import './styles/Login.scss';

const Login = () => {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let messages = {};

    if (Object.entries(messages).length > 0) {
      console.log(messages);
    }

    if (Object.entries(messages).length === 0) {
      axios
        .post(`${BASE_URL}/auth/login`, userInfo)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            messages.success = 'Login Successful';
            dispatch(setLogger(res.data.user));
            window.localStorage.setItem('accessToken', res.data.accessToken);
            navigate('/');
          }
          if (res.status >= 400) {
            messages.error = res.data;
          }
        })
        .catch((error) => {
          console.log(error);
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
    <section className='login-section'>
      <div className='login-form-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1 className='form-title'>Login to your account</h1>
          <div className='form-fields'>
            <div className='form-field'>
              <input
                type='username'
                name='username'
                placeholder='Username'
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
            </div>
          </div>
          <div className='form-buttons'>
            <button type='submit' className='button'>
              Login
            </button>
          </div>
          <div className='form-subtext'>
            <p>Don't have an account?</p>
            <a href='/register'>Register</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
