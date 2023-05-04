
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import pinterestLogo from '../../assets/pinterestLogo.png';
import LoginSignupModal from '../LoginSignupModal';
import Pins from '../Pin/PinIndex';
import { AiOutlineSearch } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

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

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginSignupModal />
      </>
    );
  }

  const history = useHistory();
  const handleClick = () => {
    history.push('/index');
  };

  const handleCreateClick = (e) => {
    history.push('/create')
  }


  return (
    <div className='nav-bar'>
      <ul className='left-nav'>
          <div className='nav-logo'>
            <img className='pinterest-logo' src={pinterestLogo} />
            <div className="logo-name">
              <h1 className="logo-header">Pinspo</h1>
            </div>
          </div>
      </ul>
      {sessionUser ? 
      <>
       <div className="home-button-container">
          <button className="home-button" onClick={handleClick}>Home</button>
        </div>
        <div className="create-button-container">
          <button className="create-button" onClick={openMenu}>Create</button>
          {showMenu && (
        <ul className="create-dropdown-ul">
          <li className='create-new-pin'><button className='create-new-pin-button'onClick={handleCreateClick}>Create New Pin</button></li>
        </ul>)}
        </div>
        <div className='searchbar-container'>
          <SearchBar/>
          {/* <div className="search-input-box"><input className='searchbar' type="text" placeholder="  Search" /></div> */}
          {/* <div className='search-icon'><AiOutlineSearch id="search-icon"/></div> */}
        </div>
      </> : null}
      
     
      <ul className ='right-nav'>
          <div className='github-icon'>
              <a target="_blank" href="https://github.com/leahseyoum">
                  <i id="github" className="fab fa-github"></i>
              </a>
          </div>

          <div className='linkin-icon'>
            <a target="_blank" href="">
              <i id="linkedIn" className="fab fa-linkedin"></i>
            </a> 
          </div>
          {sessionLinks}
      </ul>
     
    </div>
  );
}

export default Navigation;



