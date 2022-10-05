import React from 'react';

import './styles/Register.scss';

const Register = () => {
  return (
    <section className='register-section'>
      <form className='register-form'>
        <div className='form-title'>Create Account</div>
        <div className='input-field-container'>
          <label htmlFor='firstname'>First Name:</label>
          <input type='text' name='firstname' autoComplete='off' />
        </div>
        <div className='input-field-container'>
          <label htmlFor='lastname'>Last Name:</label>
          <input type='text' name='lastname' autoComplete='off' />
        </div>
        <div className='input-field-container'>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' autoComplete='off' />
        </div>
        <div className='input-field-container'>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' autoComplete='off' />
        </div>
        <div className='input-field-container'>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input type='password' name='confirm-password' autoComplete='off' />
        </div>
        <button type='submit' className='register-btn'>
          Register
        </button>
        <div className='helper-text'>
          <p>Already have an account?</p>
          <a href='/login'>Login</a>
        </div>
      </form>
    </section>
  );
};

export default Register;
