import React from 'react';

// icons
import { RiLogoutBoxRLine } from 'react-icons/ri';

// custom-styling
import './styles/Topbar.scss';

const Topbar = () => {
  // handlers
  const handleLogout = () => {
    window.open('http://localhost:9999/auth/logout', '_self');
  };

  return (
    <div className='topbar-container'>
      <div className='topbar-box'>
        <div className='topbar-brand'>Textster</div>
        <div className='topbar-btn'>
          <RiLogoutBoxRLine title='logout' onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
