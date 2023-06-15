import React, { useState, useEffect, useRef } from 'react';
import { createSave, deleteSave } from '../../store/boardPins';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { displayBoards } from '../../store/boards';
import AddPinBoardModal from './AddPinBoardModal';
import { IoIosArrowDown } from 'react-icons/io';
import './AddPinBoard.css';


function AddPinToBoardDropdown({ user, pin }) {
  const currentUser = useSelector(state => state.session.user)
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(pin.board ? pin.board.id : '');
  const [saved, setSaved] = useState(pin.boards && selectedBoardId === pin.board.id ? true : false);
  const [showBoardMenu, setShowBoardMenu] = useState(false);
  const dispatch = useDispatch();
  const boardsObj = useSelector(state => state.boards);
  const finalBoards = Object.values(boardsObj);

  

  // fetch boards data from the server when the component mounts
  useEffect(() => {
    dispatch(displayBoards(currentUser.id));
  }, [dispatch, currentUser.id]);

  

  const pinId = pin.id;

  function handleBoardChange(event) {
    setSelectedBoardId(event.target.value);
  }

  useEffect(() => {
    if (selectedBoardId && pin.id) {
      fetch(`/api/board_pins/${selectedBoardId}/${pin.id}?board_pin[board_id]=${selectedBoardId}&board_pin[pin_id]=${pin.id}`)
        .then(response => response.json())
        .then(data => {
          // Check if the board pin exists
          if (data.message === 'Board pin not found') {
            setSaved(false);
          } else {
            setSaved(true);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
}, [selectedBoardId, pin.id]);
  
  
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  
  
  
  const location = useLocation();
  const className1 = location.pathname.includes('pin')  ?  "select-board-button-show": "select-board-button" ;
  const className2 = location.pathname.includes('pin') ? 'board-select-icon-show' : 'board-select-icon' ;
  
  
  if (!pin) {
    return null;
  }

  const openMenu = () => {
    if (showBoardMenu) {
      setShowBoardMenu(false)
      return
    };
    setShowBoardMenu(true);
  };

  const closeMenu = (e) => {
    e.preventDefault();
    setShowBoardMenu(false);
    // e.stopPropagation();
  };

  

  
  return (
    <div className='add-pin-board-modal-parent'>
      <form className="select-board-form" id="hihi" onSubmit={handleFormSubmit}>
        <div className="new-pin-nav-container">
          <button className={className1} onClick={openMenu}>Select a board</button>
          <IoIosArrowDown onClick={openMenu} className={className2}/>
          <button className={`show-save-button ${saved ? 'saved-mode' : 'unsaved-mode'}`}>
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </form>
      {showBoardMenu && (
        <AddPinBoardModal
          className = 'addpinboardmodal'
          finalBoards={finalBoards}
          closeMenu={closeMenu}
          currentUser={currentUser}
          pin={pin}
        />
      
      )}
    </div>
  );  
  
}

export default AddPinToBoardDropdown;


