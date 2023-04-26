
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import pinterestLogo from '../../assets/pinterestLogo.png';
import LoginSignupModal from '../LoginSignupModal';
import Pins from '../PinIndex';
import { AiOutlineSearch } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';


function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

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

  return (
    <div className='nav-bar'>
      <ul className='left-nav'>
          <div className='nav-logo'>
            <img className='pinterest-logo' src={pinterestLogo} />
            <div className="logo-name">
              <h1 className="logo-header">Pinspo</h1>
            </div>
          </div>
          {/* {sessionUser ? 
        <div className='searchbar-container'>
          <div className="search-input-box"><input className='searchbar' type="text" placeholder="  Search" /></div>
          <div className='search-icon'><AiOutlineSearch id="search-icon"/></div>
        </div> : null} */}
         {/* <div className="home-button">
          <button>Home</button>
        </div> */}
      </ul>
      {sessionUser ? 
      <>
       <div className="home-button-container">
          <button className="home-button" onClick={handleClick}>Home</button>
        </div>
        <div className='searchbar-container'>
          <div class="search-input-box"><input className='searchbar' type="text" placeholder="  Search" /></div>
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



