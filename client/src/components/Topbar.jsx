import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { RiLogoutBoxRLine } from 'react-icons/ri';

// custom-styling
import './styles/Topbar.scss';

const Topbar = () => {
  return (
    <div className='topbar-container'>
      <div className='topbar-box'>
        <Link to='/' className='topbar-brand'>
          Textster
        </Link>
        <div className='topbar-btn'>
          <RiLogoutBoxRLine title='logout' />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
