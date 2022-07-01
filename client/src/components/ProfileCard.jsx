import React from 'react';

import './styles/ProfileCard.scss';

const ProfileCard = ({ userInfo }) => {
  return (
    <div className='profile-card-container'>
      <div className='profile-card-avatar'>
        <img
          src={`https://avatars.dicebear.com/api/initials/${
            userInfo?.firstname + userInfo?.lastname || 'UK'
          }.svg?fontSize=35`}
          alt=''
        />
      </div>
      <div className='profile-card-text'>
        <div className='profile-card-fullname'>
          {userInfo?.firstname + ' ' + userInfo?.lastname}
        </div>
        <div className='profile-card-username'>
          {userInfo?.username || (
            <span style={{ color: 'red', fontStyle: 'italic' }}>
              username not set
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
