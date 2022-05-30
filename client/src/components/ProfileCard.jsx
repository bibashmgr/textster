import React from 'react';

// custom-styling
import './styles/ProfileCard.scss';

const ProfileCard = ({ userInfo }) => {
  return (
    <div className='profile-card-container'>
      <div className='profile-card-avatar'>
        <img
          src={userInfo && userInfo.avatar && userInfo.avatar}
          alt='avatar'
        />
      </div>
      <div className='profile-card-text'>
        <div className='profile-card-fullname'>
          {userInfo &&
            userInfo.firstname + ' ' + (userInfo.lastname && userInfo.lastname)}
        </div>
        <div className='profile-card-username'>
          {userInfo &&
            (userInfo.username ? (
              userInfo.username
            ) : (
              <span style={{ color: 'red', fontStyle: 'italic' }}>
                username not set
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
