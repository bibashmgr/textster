import React from 'react';

import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';

import './styles/LoginForm.scss';

const LoginForm = () => {
  // handlers
  const handleGoogleLogin = () => {
    window.open('http://localhost:9999/auth/google', '_self');
  };

  return (
    <div className='login-form-container'>
      <div className='login-form-box'>
        <div className='login-form-headers'>
          <div className='header-brand'>Textster</div>
          <div className='header-desc'>
            Connect with your friends and family through text
          </div>
        </div>
        <div className='login-form-buttons'>
          <div className='google-btn-container' onClick={handleGoogleLogin}>
            <FaGoogle className='google-btn-logo' />
            <div className='google-btn-text'>Continue with Google</div>
          </div>
          <div className='facebook-btn-container'>
            <FaFacebookSquare className='facebook-btn-logo' />
            <div className='facebook-btn-text'>Continue with Facebook</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
