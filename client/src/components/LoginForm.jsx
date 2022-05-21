import React from 'react';

// icons
import { FaApple, FaGoogle } from 'react-icons/fa';

// custom-styling
import './styles/LoginForm.scss';

const LoginForm = () => {
  return (
    <div className='login-form-container'>
      <div className='login-form-box'>
        <div className='login-form-headers'>
          <div className='header-brand'>Textster</div>
          <div className='header-desc'>
            Lorem ipsum, dolor sit amet consecte adipisicing elit.
          </div>
        </div>
        <div className='login-form-buttons'>
          <div className='google-btn-container'>
            <FaGoogle className='google-btn-logo' />
            <div className='google-btn-text'>Continue with Google</div>
          </div>
          <div className='apple-btn-container'>
            <FaApple className='apple-btn-logo' />
            <div className='apple-btn-text'>Continue with Apple account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
