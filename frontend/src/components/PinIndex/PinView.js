import "./PinView.css" 
import { useState } from 'react';
import PinDetail from './PinDetail';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { displayPin } from '../../store/pins'



function PinIndex({ pin }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(displayPin(pin));
  };
  
    return (
      
        <Link to={`/pins/${pin.id}`}  style={{ textDecoration: 'none', color: 'black' }} onClick={handleClick}>
          <div className="pin">
          <div className="pin-image">
            <img src={pin.image} alt={pin.title} />
          </div>
          <div className="pin-text">
            <h3 className="pin-title">{pin.title}</h3>
          </div>
          </div>
        </Link>
      
    );
  }
  
  export default PinIndex;