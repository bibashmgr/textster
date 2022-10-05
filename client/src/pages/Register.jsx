import React from 'react';

import './styles/Register.scss';

const Register = () => {
  return (
    <section className='register-section'>
      <div className='register-form-container'>
        <form action='' className='register-form'>
          <h1 className='form-title'>Create an account</h1>
          <div className='form-fields'>
            <div className='form-field'>
              <input
                type='text'
                name='firstname'
                placeholder='First Name'
                pattern='[a-zA-Z]+'
                required
              />
            </div>
            <div className='form-field'>
              <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                pattern='[a-zA-Z]+'
                required
              />
            </div>
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
            <div className='form-field'>
              <input
                type='password'
                name='password2'
                placeholder='Confirm Password'
                required
                minlength='8'
                maxlength='20'
                autoComplete='off'
              />
            </div>
          </div>
          <div className='form-buttons'>
            <button type='submit' className='button'>
              Sign up
            </button>
          </div>
          <div className='form-subtext'>
            <p>Already have an account?</p>
            <a href='/login'>Login</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
