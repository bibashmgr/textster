import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { FaUserPlus } from 'react-icons/fa';

import ProfileCard from './ProfileCard';
import ContactModal from './ContactModal';

import './styles/ContactTab.scss';

import { setUserContacts } from '../features/userSlice';

const ContactTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { logger, userContacts } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/contact`)
      .then((res) => {
        dispatch(setUserContacts(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, [isModalOpen]);

  // handlers
  const handleAdd = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='contact-tab-container'>
      <div style={isModalOpen ? { opacity: '0' } : { opacity: '1' }}>
        {logger &&
          userContacts &&
          userContacts.map((contact, index) => {
            return (
              <div
                className='contact-tab-box'
                key={index}
                onClick={() => {
                  navigate(`/chat/${contact._id}`);
                }}
              >
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
        <ContactModal setIsModalOpen={setIsModalOpen} logger={logger} />
      </div>
    </div>
  );
};

export default ContactTab;
