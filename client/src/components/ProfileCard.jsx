import React from 'react';

// custom-styling
import './styles/ProfileCard.scss';

const ProfileCard = () => {
  return (
    <div className='profile-card-container'>
      <div className='profile-card-avatar'>
        <img src='./images/default_avatar.jpg' alt='avatar' />
      </div>
      <div className='profile-card-text'>
        <div className='profile-card-fullname'>Bibash Thapa Magar</div>
        <div className='profile-card-username'>@bibash.mgr</div>
      </div>
    </div>
  );
};

export default ProfileCard;
