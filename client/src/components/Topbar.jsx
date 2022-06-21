import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// icons
import { RiLogoutBoxRLine } from 'react-icons/ri';

// custom-styling
import './styles/Topbar.scss';

// actions
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
        // if (error.response.data.message === 'Expired') {
        //   navigate('/login');
        // }
        console.log(error);
      });
  }, [dispatch, navigate]);

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
