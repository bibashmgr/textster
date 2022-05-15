import React from 'react';

// custom-styling
import './styles/Main.scss';

// components
import Sidebar from './Sidebar';
import ChatBox from './ChatBox';

const Main = () => {
  return (
    <div className='main-container'>
      <Sidebar />
      <ChatBox />
    </div>
  );
};

export default Main;
