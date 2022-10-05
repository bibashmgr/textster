import React from 'react';

import './styles/Login.scss';

const Login = () => {
  return (
    <section className='login-section'>
      <div className='login-form-container'>
        <form action='' className='login-form'>
          <h1 className='form-title'>Login to your account</h1>
          <div className='form-fields'>
            <div className='form-field'>
              <input
                type='email'
                name='email'
                placeholder='Email'
                autoComplete='off'
                required
              />
            </div>
            <div className='form-field'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                required
                minlength='8'
                maxlength='20'
                autoComplete='off'
              />
            </div>
          </div>
          <div className='form-buttons'>
            <button type='submit' className='button'>
              Login
            </button>
          </div>
          <div className='form-subtext'>
            <p>Don't have an account?</p>
            <a href='/login'>Register</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
