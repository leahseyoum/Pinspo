
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import pinterestLogo from '../../assets/pinterestLogo.png';
import LoginSignupModal from '../LoginSignupModal';


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
        {/* <LoginFormModal /> 
        <SignupFormModal /> */}
        <LoginSignupModal />
                {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
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
     
      <ul className ='right-nav'>
          <div className='github-icon'>
              <a target="_blank" href="https://github.com/leahseyoum">
                  <i id="github" class="fab fa-github"></i>
              </a>
          </div>

          <div className='linkin-icon'>
            <a target="_blank" href="">
              <i id="linkedIn" class="fab fa-linkedin"></i>
            </a> 
          </div>
          {sessionLinks}
      </ul>
     
    </div>
  );
}

export default Navigation;



