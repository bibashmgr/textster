import React from 'react';

import './styles/LoginForm.scss';

const LoginForm = () => {
  const handleGoogleLogin = () => {
    window.open('http://localhost:9999/auth/google', '_self');
  };

  return (
    <div className='login-form-container'>
      <div className='login-form-box'>
        <div className='login-form-headers'>
          <img className='header-logo' src='./images/logo_circle.png' alt='' />
          <div className='header-brand'>TEXTSTER</div>
          <div className='header-desc'>Prioritizing text based messages </div>
        </div>
        <div className='login-form-buttons'>
          <div className='google-btn-container' onClick={handleGoogleLogin}>
            <div className='google-btn-logo-box'>
              <img
                src='./icons/google_logo.png'
                alt=''
                className='google-btn-logo'
              />
            </div>
            <div className='google-btn-text'>Login with Google</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
