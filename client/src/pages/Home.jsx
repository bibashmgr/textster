import React from 'react';

// components
import Topbar from '../components/Topbar';
import Main from '../components/Main';

// custom-styling
import './styles/Layout.scss';

const Home = () => {
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
