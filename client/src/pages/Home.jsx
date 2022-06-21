import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

// components
import Topbar from '../components/Topbar';
import Main from '../components/Main';

// custom-styling
import './styles/Layout.scss';

// actions
// import { setLogger } from '../features/userSlice';

const Home = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const { logger } = useSelector((state) => state.user);

  // useEffect(() => {
  //   axios
  //     .get('/auth/login/success')
  //     .then((res) => {
  //       dispatch(setLogger(res.data));
  //     })
  //     .catch((error) => {
  //       if (error.response.data.message === 'Expired') {
  //         navigate('/login');
  //       }
  //     });
  // }, [dispatch, navigate]);

  return (
    <div className='container'>
      <div className='box'>
        <Topbar />
        <Main
        // userInfo={logger}
        />
      </div>
    </div>
  );
};

export default Home;
