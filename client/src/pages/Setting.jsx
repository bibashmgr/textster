import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// components
import Topbar from '../components/Topbar';
import SettingForm from '../components/SettingForm';

// custom-styling
import './styles/Layout.scss';

// actions
import { setLogger } from '../features/userSlice';

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/auth/login/success')
      .then((res) => {
        dispatch(setLogger(res.data));
        res.data.username && navigate('/');
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, [dispatch, navigate]);

  return (
    <div className='container'>
      <div className='box'>
        <Topbar />
        <div className='form-container'>
          <SettingForm />
        </div>
      </div>
    </div>
  );
};

export default Setting;
