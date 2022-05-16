import React from 'react';

// components
import ProfileCard from './ProfileCard';

// custom-styling
import './styles/ContactTab.scss';

const ContactTab = () => {
  return (
    <div className='contact-tab-container'>
      <div className='contact-tab-box'>
        <ProfileCard />
      </div>
      <div className='contact-tab-box'>
        <ProfileCard />
      </div>
    </div>
  );
};

export default ContactTab;
