import React from 'react'
import './UserProfilePhoto.css'
const ProfilePicture = (imageUrl, size) => {

    const profileSizeClass = size === 'large' ? 'user-profile-picture-large' : 'user-profile-picture-small';

    return (
      <div className={`${profileSizeClass}`}>
        <img src={imageUrl} alt="user profile" />
      </div>
    );

}


export default ProfilePicture