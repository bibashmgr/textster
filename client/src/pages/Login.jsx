import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// components
import LoginForm from '../components/LoginForm';

// actions
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
  }, [dispatch, navigate]);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
