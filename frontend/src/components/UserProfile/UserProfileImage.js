import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './UserProfileImage.css';

function UserProfileImage({pin}) {
  const userId = pin?.userId;
  console.log(userId, 'userId')
  console.log(pin, 'pin')
  const [user, setUser] = useState(null);
    useEffect(() => {
        if (userId) {
          fetch(`api/users/${userId}`)
          .then(res => res.json())
          .then(data => setUser(data.user))
        }
    }, [userId])
  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          const response = await fetch(`api/users/${userId}`);
          const data = await response.json();
          setUser(data.user);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };

    fetchUser();
  }, [userId]);

  

  // return (
  //   <>
  //     {user && (
  //       <div className="profile-tag-container">
  //         <div className="profile-tag-image-container">
  //           {user.profilePhoto ? (
  //             <div className="image-wrapper">
  //             <img className="profile-tag-image" src={user.profilePhoto} alt="profile photo" />
  //           </div>
  //           ) : (
  //             <div className="user-tag-icon-container">
  //               <button className="user-tag-icon-nav">{user.username[0]}</button>
  //             </div>
  //           )}
  //         </div>
  //         <div className="profile-tag-username-container">
  //           <p className="profile-tag-username">{user.username}</p>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
  return (
    <>
      {user && (
        <div className="profile-tag-container">
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
      )}
  
      {!user && (
        <div className="profile-tag-container">
          <div className="user-tag-icon-container">
            <button className="user-tag-icon-nav">-</button>
          </div>
          <div className="profile-tag-username-container">
            <p className="profile-tag-username">User Not Found</p>
          </div>
        </div>
      )}
    </>
  );
  
}

export default UserProfileImage;
