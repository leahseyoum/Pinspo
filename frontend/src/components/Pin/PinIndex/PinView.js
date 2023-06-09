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

  
  
    return (
        // <Link to={{pathname:`/pins/${pin.id}`, state: { board }}} style={{ textDecoration: 'none', color: 'black' }} className="pin-wrapper" onClick={handleClick} >
          <div className='pin' >
            <div className="pin-image" >
              <img src={pin.image} alt={pin.title}  onClick={()=> history.replace(`/pins/${pin.id}`) }/>
              <div className="pin-hover" >
                <AddPinToBoardDropdown className="pin-view-dropdown" pin={pin} user={user} />
              </div>
            </div>
            <div className="pin-text" onClick={()=> history.replace(`/pins/${pin.id}`) }>
              <h3 className="pin-title" >{pin.title}</h3>
              <UserProfileImage pin={pin}/>
            </div>
          </div>
        // </Link>
    );
  }
  
  export default PinIndex;