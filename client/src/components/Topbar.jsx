import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { RiLogoutBoxRLine } from 'react-icons/ri';

import './styles/Topbar.scss';

import { setLogger } from '../features/userSlice';

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/auth/login/success')
      .then((res) => {
        dispatch(setLogger(res.data));
      })
      .catch((error) => {
        if (error.response.data.message === 'Expired') {
          navigate('/login');
        }
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  // handlers
  const handleLogout = () => {
    window.open('http://localhost:9999/auth/logout', '_self');
  };

  return (
    <div className='topbar-container'>
      <div className='topbar-box'>
        <Link to='/' className='topbar-brand'>
          Textster
        </Link>
        <div className='topbar-btn'>
          <RiLogoutBoxRLine title='logout' onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
