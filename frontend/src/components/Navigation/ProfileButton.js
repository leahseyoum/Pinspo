import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';
import { Link } from "react-router-dom";


function ProfileButton({ user }) {
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
  }

  return (
    <>
       <div className="user-icon-container">
          <button onClick={handleClick} className='user-icon-nav'>{user.username[0].toUpperCase()}</button>                  
        </div>
      <button className="profile-dropdown-icon" onClick={openMenu}>
        {/* <i className="fa-solid fa-user-circle" /> */}
        <IoIosArrowDown/>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
