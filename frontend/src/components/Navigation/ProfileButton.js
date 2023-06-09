import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfileButton() {
  const currentUser = useSelector(state => state.session.user);
  const currentUserProfilePhoto = currentUser.profilePhoto;
  const userId = currentUser.id;
  const [user, setUser] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(currentUser.profilePhoto);

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      if (currentUser) {
        try {
          const response = await fetch(`api/users/${userId}`);
          const data = await response.json();
          setUser(data.user);
          setProfilePhoto(data.user.profilePhoto);
        } catch (error) {
          console.error('Error fetching profile photo:', error);
        }
      }
    };

    fetchProfilePhoto();
  }, [currentUserProfilePhoto]);
  

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  const handleClick = (e) => {
    history.push('/saved');
  };

  return (
    <>
      {profilePhoto ? (
        <Link to='/saved'>
          <div className="image-wrapper-nav">
            <img className='nav-profile-image' src={profilePhoto} alt='profile-photo' />
          </div>
        </Link>
      ) : (
        <div className="user-icon-container">
          <button onClick={handleClick} className='user-icon-nav'>{user?.username[0].toUpperCase()}</button>
        </div>
      )}
      <button className="profile-dropdown-icon" onClick={openMenu}>
        <IoIosArrowDown/>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="currently-in">Currently in</li>
          <div className="carrot-dropdown">
            <li className="user-icon-container-dropdown">
              <button onClick={handleClick} className='user-icon-nav-dropdown'>{user?.username[0].toUpperCase()}</button>
            </li>
            <div className="carrot-info">
              <li className="username-top">{user?.username}</li>
              <li>{user?.email}</li>
            </div>
          </div>
          <li>
            <p className="currently-in">More Options</p>
            <button className='logout-button' onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;

