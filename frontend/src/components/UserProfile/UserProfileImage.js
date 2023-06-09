import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './UserProfileImage.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserProfileImage({pin}) {
  const userId = pin?.userId;
  const [user, setUser] = useState(null);
  const history = useHistory();
  
  useEffect(() => {
     fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.user)})
        
  }, [userId])

  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <>
      {user && (
        <Link to={`/users/${pin.userId}/saved`} style={linkStyles}>
          <div className="profile-tag-container" >
            <div className="profile-tag-image-container">
              {user.profilePhoto ? (
                <div className="image-wrapper">
                  <img className="profile-tag-image" src={user.profilePhoto} alt="profile photo" />
                </div>
              ) : (
                <div className="user-tag-icon-container">
                  <button className="user-tag-icon-nav">{user.username[0]}</button>
                </div>
              )}
            </div>
            <div className="profile-tag-username-container">
              <p className="profile-tag-username">{user.username}</p>
            </div>
          </div>
        </Link>
        )}
    </>
  );
  
}

export default UserProfileImage;
