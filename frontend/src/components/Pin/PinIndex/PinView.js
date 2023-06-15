import "./PinView.css" 
import { useState } from 'react';
import PinDetail from '../PinShow/PinDetail';
import { Link , useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayPin } from '../../../store/pins'
import UserProfileImage from "../../UserProfile/UserProfileImage";
import { updatePin } from "../../../store/pins";
import AddPinToBoardDropdown from "../../AddPinBoard/AddPinBoard";



function PinIndex({ pin }) {
  const dispatch = useDispatch();
  const history = useHistory();

  
  const handleClick = (e) => {
   
    dispatch(displayPin(pin.id));
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
  };

  
  const user = useSelector(state => state.session.user);

  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
  };
  
    return (
        
          <div className='pin' >
            <div className="pin-image" >
              <Link to={`/pins/${pin.id}`} style={linkStyles}>
                <img src={pin.image} alt={pin.title}/>
              <div className="pin-text">
                <h3 className="pin-title" >{pin.title}</h3>
              </div>
              </Link>
              <div className="pin-hover" >
                <AddPinToBoardDropdown className="pin-view-dropdown" pin={pin} user={user} />
              </div>
            </div>
            
          
              <UserProfileImage pin={pin} />
          </div>
       
    );
  }
  
  export default PinIndex;