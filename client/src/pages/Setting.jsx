import React from 'react';

// components
import Topbar from '../components/Topbar';
import SettingForm from '../components/SettingForm';

// custom-styling
import './styles/Layout.scss';

const Setting = () => {
  return (
    <div className='container'>
      <div className='box'>
        <Topbar />
        <div
          style={{
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SettingForm />
        </div>
      </div>
    </div>
  );
};

export default Setting;
