import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import './PinDetail.css';


function PinDetail() {
    const pin = useSelector(state => state.pins.pin)
    
  
    const [pin2, setPin2] = useState();
    const dispatch = useDispatch();

    const { pinId } = useParams();

  useEffect(() => {
    fetch(`/api/pins/${pinId}`)  
      .then(response => response.json())
      .then(data => setPin2(data))
  }, [dispatch, pinId]);

    
    const history = useHistory();
    const handleClick = () => {
    history.push('/index');
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
          <img className="show-image" src={pin?.image || pin2?.image} alt={pin?.title || pin2?.title} />
        </div>
        <div className="show-details-container">
          <div className="show-details">
            <div className="show-pin-title">
              <h2 className="show-title">{pin?.title || pin2?.title}</h2>
            </div>
            <div className="show-pin-caption">
              <p className="show-caption">{pin?.caption || pin2?.caption}</p>
            </div>
          </div>
        <div class="save-button-container">
          <button className="show-save-button">Save</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PinDetail;