import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// components
import Topbar from '../components/Topbar';
import Main from '../components/Main';

import './styles/Layout.scss';

const Home = ({ socket }) => {
  const { logger } = useSelector((state) => state.user);

  useEffect(() => {
    socket.current?.emit('getUserId', logger?._id);
  }, [logger, socket]);

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
