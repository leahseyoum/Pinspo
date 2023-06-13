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
  const [showMenu, setShowMenu] = useState(false);
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
  const className = location.pathname.includes('pin')  ?  'pin-detail-dropdown': 'pin-view-dropdown' ;
  
  
  
  if (!pin) {
    return null;
  }

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  
  return (
    <>
      <form className="select-board-form" id="hihi" onSubmit={handleFormSubmit}>
        <div className="new-pin-nav-container">
          <button className='select-board-button'onClick={openMenu}>Select a board</button>
          <IoIosArrowDown onClick={openMenu} className='board-select-icon'/>
          <button className={`show-save-button ${saved ? 'saved-mode' : 'unsaved-mode'}`}>
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </form>
      {showMenu && (
        <AddPinBoardModal
          finalBoards={finalBoards}
          closeMenu={closeMenu}
          currentUser={currentUser}
          pin={pin}
        />
      
      )}
    </>
  );  
  
}

export default AddPinToBoardDropdown;


