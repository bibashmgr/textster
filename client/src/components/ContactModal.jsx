import React from 'react';

// icons
import { FaTimes } from 'react-icons/fa';

// custom-styling
import './styles/ContactModal.scss';

const ContactModal = ({ setIsModalOpen }) => {
  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='contact-modal-container'>
      <form className='contact-modal-form' onSubmit={handleSubmit}>
        <div className='modal-email-container'>
          <label htmlFor='email'>Enter email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div className='modal-button-container'>
          <input type='submit' value='Add Contact' />
        </div>
        <div className='modal-cancel-button' onClick={handleCancel}>
          <FaTimes className='modal-cancel-logo' />
        </div>
      </form>
    </div>
  );
};

export default ContactModal;
