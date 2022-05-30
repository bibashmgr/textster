import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// components
import Topbar from '../components/Topbar';
import Main from '../components/Main';

// custom-styling
import './styles/Layout.scss';

// actions
import { setLogger } from '../features/userSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/auth/login/success')
      .then((res) => {
        dispatch(setLogger(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='box'>
        <Topbar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
