import "./PinView.css" 
import { useState } from 'react';
import PinDetail from '../PinShow/PinDetail';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { displayPin } from '../../../store/pins'



function PinIndex({ pin, size }) {
  const dispatch = useDispatch();
  console.log(size);

  const handleClick = () => {
    dispatch(displayPin(pin.id));
  };

  // const className = `pin ${size}`
  
    return (
        <Link to={`/pins/${pin.id}`} style={{ textDecoration: 'none', color: 'black' }} onClick={handleClick}>
          <div className='pin'>
            <div className="pin-image">
              <img src={pin.image} alt={pin.title} />
              <div className="pin-hover">
                <button className="save-button">Save</button>
              </div>
            </div>
            <div className="pin-text">
              <h3 className="pin-title">{pin.title}</h3>
            </div>
          </div>
        </Link>
    );
  }
  
  export default PinIndex;