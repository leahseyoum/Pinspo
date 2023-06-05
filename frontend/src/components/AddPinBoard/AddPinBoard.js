import React, { useState, useEffect } from 'react';
import { createSave, deleteSave } from '../../store/boardPins';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { displayBoard } from '../../store/boards';
import './AddPinBoard.css';


function AddPinToBoardDropdown({ user, pin }) {
  
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState('');
  const [saved, setSaved] = useState(pin.boards && selectedBoardId === pin.board.id ? true : false);
  const dispatch = useDispatch();

  // fetch boards data from the server when the component mounts
  useEffect(() => {
    fetch(`/api/users/${user.id}/boards`)
    .then(response => response.json())
    .then(data => setBoards(data));
  }, [user.id]);
  
  
  const finalBoards = useSelector(state => state.session.user.boards);

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
  
  
  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      if (!saved) {
        const response = await dispatch(createSave(selectedBoardId, pinId));
        if (response.ok) {
          setSaved(true);
        }
      } else {
        // const boardPin = await getBoardPinId({boardId: selectedBoardId, pinId: pinId});
        // console.log(boardPin)
        const response = await dispatch(deleteSave(selectedBoardId, pinId));
        if (response.ok) {
          setSaved(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  
  
  const location = useLocation();
  const className = location.pathname.includes('pin')  ?  'pin-detail-dropdown': 'pin-view-dropdown' ;
  
  
  
  if (!pin) {
    return null;
  }
  
  
  
  return (
    <>
       <form className='select-board-form' id="hihi" onSubmit={handleFormSubmit}>
          <div className='new-pin-nav-container'>
          <select className={className} value={selectedBoardId} onChange={handleBoardChange}>
          {/* {defaultBoardId ? (
            <option key={defaultBoardId} value={defaultBoardId}>
              {pin.boards.find(board => board.id === defaultBoardId)?.name}
            </option>
          ) : ( */}
            <option value="" disabled hidden>Select a Board</option>
          {/* )} */}
                { finalBoards.map(board => (
                <option key={board.id} value={board.id}>{board.name}</option>
                ))}
                </select>
                <button className={`show-save-button ${saved ? "saved-mode" : "unsaved-mode"}`}>{saved ? "Saved" : "Save"}</button>
            </div>
        </form>
    </>
  );
}

export default AddPinToBoardDropdown;


