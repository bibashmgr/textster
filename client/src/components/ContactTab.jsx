import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// icons
import { FaUserPlus } from 'react-icons/fa';

// components
import ProfileCard from './ProfileCard';
import ContactModal from './ContactModal';

// custom-styling
import './styles/ContactTab.scss';

// actions
import { setUserContacts } from '../features/userSlice';

const ContactTab = () => {
  const dispatch = useDispatch();

  const { logger, userContacts } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('/contact')
      .then((res) => {
        dispatch(setUserContacts(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, userContacts]);

  // handlers
  const handleAdd = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='contact-tab-container'>
      <div style={isModalOpen ? { opacity: '0' } : { opacity: '1' }}>
        {logger &&
          userContacts &&
          logger.contacts.map((contact, index) => {
            return (
              <div className='contact-tab-box' key={index}>
                <ProfileCard userInfo={userContacts[index]} />
              </div>
            );
          })}
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
