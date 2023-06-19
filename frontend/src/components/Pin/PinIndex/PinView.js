import "./PinView.css" 
import { useState, useRef, useEffect } from 'react';
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
  const [showBoardMenu, setShowBoardMenu] = useState(false);

  const openMenu = (event) => {
    const modalClassName = 'board-select-modal-header';
    const targetElement = event.target;
   
    if (
      !targetElement.classList.contains('board-select-modal-header') &&
      !targetElement.classList.contains("board-save-option") &&
      !targetElement.classList.contains("board-select-name") &&
      !targetElement.classList.contains("suggestions") &&
      !targetElement.classList.contains("show-save-button") &&
      !targetElement.classList.contains("select-board-modal-create-board-container") &&
      !targetElement.classList.contains("select-board-create-board-button") &&
      !targetElement.classList.contains("select-board-create-board") &&
      !targetElement.classList.contains("tile-name-container") &&
      !targetElement.classList.contains("board-select-exit-button") &&
      !targetElement.classList.contains("board-select-modal-header") &&
      !targetElement.classList.contains("board-select-header") &&
      !targetElement.classList.contains("add-pin-board-modal") &&
      !targetElement.classList.contains("create-board-plus") &&
      !targetElement.classList.contains("tile-photo-container") &&
      !targetElement.classList.contains("tile-photo") && 
      !targetElement.closest(`.${modalClassName}`)
      
     
    ) {
      setShowBoardMenu((prevState) => !prevState);
    }
  };
  

  
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
              <div className={`pin-hover ${showBoardMenu ? "show" : ""}`}  > 
              {/* onClick={openMenu} */}
                <AddPinToBoardDropdown  className="pin-view-dropdown"  pin={pin} user={user} showBoardMenu={showBoardMenu} setShowBoardMenu={setShowBoardMenu} openMenu={openMenu} />
              </div>
            </div>
            
          
              <UserProfileImage pin={pin} />
          </div>
       
    );
  }
  
  export default PinIndex;