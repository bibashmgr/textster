import React from 'react';

// custom-styling
import './styles/SettingForm.scss';

const SettingForm = () => {
  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='setting-form-container'>
      <form className='setting-form-box' onSubmit={handleSubmit}>
        <div className='form-username-container'>
          <label htmlFor='username'>Enter username</label>
          <input type='text' name='email' id='email' />
        </div>
        <div className='form-button-container'>
          <input type='submit' value='Update' />
        </div>
      </form>
    </div>
  );
};

export default SettingForm;
