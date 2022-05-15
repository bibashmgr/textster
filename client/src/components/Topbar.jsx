import React from 'react';

// icons
import { RiLogoutBoxRLine } from 'react-icons/ri';

// custom-styling
import './styles/Topbar.scss';

const Topbar = () => {
  return (
    <div className='topbar-container'>
      <div className='topbar-box'>
        <div className='topbar-brand'>Textster</div>
        <div className='topbar-btn'>
          <RiLogoutBoxRLine />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
