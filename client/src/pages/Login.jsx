import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import LoginForm from '../components/LoginForm';

import { setLogger } from '../features/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/auth/login/success')
      .then((res) => {
        dispatch(setLogger(res.data));
        if (res.data) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
