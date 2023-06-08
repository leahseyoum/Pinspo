import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import {SlOptions} from 'react-icons/sl';
import EditPinModal from '../../EditPinModal';
import {GrLink} from 'react-icons/gr';
import AddPinToBoardDropdown from '../../AddPinBoard/AddPinBoard';
import { displayPin } from '../../../store/pins';
import UserProfileImage from '../../UserProfile/UserProfileImage';
import './PinDetail.css';


function PinDetail() {
    const [profilePhoto, setProfilePhoto] = useState(null);
    // const pin = useSelector(state => state.pins.pin);
    
    const user = useSelector(state => state.session.user);
    const [showMenu, setShowMenu] = useState(false);
    const [pinAuthor, setPinAuthor] = useState(null);
    const [pinAuthorId, setPinAuthorId] = useState(null);

    const openMenu = () => {
      if (showMenu) {
        setShowMenu(false)
        return
      };
      setShowMenu(true);
    };

    
    const { pinId } = useParams();
    const [pin2, setPin2] = useState();
    const dispatch = useDispatch();
    
    useEffect(() => {
      fetch(`/api/pins/${pinId}`)
        .then(res => res.json())
        .then(data => {
          setPin2(data);
          dispatch(displayPin(pinId));
          setPinAuthorId(data.userId);
          
        })
        .catch(error => {
          console.error('Error fetching pin:', error);
        });
    }, [pinId, dispatch]);
    
   const isOwner = user.id === pin2?.userId;
    const link = pin2?.link

    useEffect(() => {
      if (pinAuthorId) {
        fetch(`/api/users/${pinAuthorId}`)
          .then(res => res.json())
          .then(data => {
            setPinAuthor(data.user);
          })
          .catch(error => {
            console.error('Error fetching pin author:', error);
          });
      }
    }, [pinAuthorId]);
    
    const history = useHistory();
      const handleClick = () => {
      history.goBack();
   };
    
   useEffect(() => {
    const handleClickOutside = (event) => {
      const container = document.querySelector('.pin-detail');
      const nav = document.querySelector('.nav-bar')
      if (container && !container.contains(event.target) && !nav.contains(event.target)) {
        handleClick();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClick]);
  
  return (
    <div className="pin-show-container">
      <div className='arrow-container'>
        <FaArrowLeft className="arrow-icon"/>
      </div>
      <div className="pin-detail">

        <div className="show-image-container">
          <img className="show-image" src={pin2?.image} alt={pin2?.title} />
          {/* <img className="show-image" src={pin.image } alt={pin.title} /> */}
        </div>
        <div className="show-details-container">
          <div className="show-details">
            {/* <div className="pin-owner-info">
                        <p>{user.username}</p>
                    </div> */}
            <div className="show-pin-title">
              <h2 className="show-title">{pin2?.title}</h2>
            </div>
            <div className="show-pin-caption">
              <p className="show-caption">{pin2?.caption}</p>
            </div>
            
           
            <div className='user-info-display'>
              {console.log(pinAuthor)}
              {pinAuthor && pinAuthor.profilePhoto ? (
                <div className='user-info-detail-1'>
                  <div className="image-wrapper-circle">
                    <img className="profile-tag-image-show" src={pinAuthor.profilePhoto} alt="profile photo" />
                  </div>
                  <div className="pin-owner-info">
                    <p>{pinAuthor && pinAuthor.username ? pinAuthor.username : ''}</p>
                  </div>
                </div>
              ) : (
                <div className='user-info-detail-2'>
                  <div className="circle">{pinAuthor && pinAuthor.username ? pinAuthor.username[0].toUpperCase() : ''}</div>
                  <div className="pin-owner-info">
                    <p>{pinAuthor && pinAuthor.username ? pinAuthor.username : ''}</p>
                  </div>
                </div>
              )}
            </div>


              
            
            </div>
          {/* <div className="dropdown-container">
              <AddPinToBoardDropdown user={user} pin={pin2 ? pin2 : pin} />
          </div> */}
          

        <div className="save-button-container">
          {link ? (
              <a href={pin2.link}>
                <GrLink  className="arrow-link" size={20}/>
              </a>
            ) : null}
          {isOwner && (
            <button className='edit-options-button' onClick={openMenu}>
              <SlOptions className="edit-options" />
            </button>
          )}
          {showMenu && (
              <ul className="edit-link">
                <li>
                  <EditPinModal pin={pin2}/>
                </li>
              </ul>
            )}
            {pin2? <AddPinToBoardDropdown user={user} pin={pin2} /> : null}
          
          {/* <button className="show-save-button">Save</button> */}
        </div>
        </div>
      </div>
    </div>
  );
  
}

export default PinDetail;