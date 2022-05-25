import React from 'react';
import { useState } from 'react';

// icons
import { FaUserPlus } from 'react-icons/fa';

// components
import ProfileCard from './ProfileCard';
import ContactModal from './ContactModal';

// custom-styling
import './styles/ContactTab.scss';

const ContactTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // handlers
  const handleAdd = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='contact-tab-container'>
      <div style={isModalOpen ? { opacity: '0' } : { opacity: '1' }}>
        <div className='contact-tab-box'>
          <ProfileCard />
        </div>
        <div className='contact-tab-box'>
          <ProfileCard />
        </div>
        <div className='contact-add-btn' onClick={handleAdd}>
          <FaUserPlus className='contact-add-logo' />
        </div>
      </div>
      <div
        className='contact-modal'
        style={isModalOpen ? { display: 'flex' } : { display: 'none' }}
      >
        <ContactModal setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default ContactTab;
