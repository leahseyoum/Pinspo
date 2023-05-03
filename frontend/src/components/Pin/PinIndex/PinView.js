import "./PinView.css" 
import { useState } from 'react';
import PinDetail from '../PinShow/PinDetail';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayPin } from '../../../store/pins'
import { updatePin } from "../../../store/pins";
import AddPinToBoardDropdown from "../../AddPinBoard/AddPinBoard";





function PinIndex({ pin, board }) {
  const dispatch = useDispatch();
 
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(displayPin(pin.id));
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
  };

  const user = useSelector(state => state.session.user);
  
    return (
        <Link to={{pathname:`/pins/${pin.id}`, state: { board }}} style={{ textDecoration: 'none', color: 'black' }} onClick={(e) => {
          if (
            e.target.tagName !== 'BUTTON' &&
            e.target.tagName !== 'SELECT' &&
            e.target.tagName !== 'OPTION'
          ) {
            handleClick();
          }
        }}>
          <div className='pin' >
            <div className="pin-image">
              <img src={pin.image} alt={pin.title} />
              <div className="pin-hover" onClick={handleSaveClick}>
                <AddPinToBoardDropdown className="pin-view-dropdown" pin={pin} user={user} board={board} onClick={handleSaveClick}/>
                {/* <button className="save-button">Save</button> */}
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