import React from 'react'
import './UserProfilePhoto.css'
const ProfilePicture = (imageUrl) => {
    return (
      <div className='profile-image-container'>
        <img src={imageUrl} alt="user profile" />
      </div>
    );

}


export default ProfilePicture