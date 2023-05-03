import React, { useState, useEffect } from 'react';
import { createSave, deleteSave } from '../../store/boardPins';
import { useDispatch, useSelector } from 'react-redux';
import CreateBoardModal from '../CreateBoardModal';
import { useLocation } from 'react-router-dom';
import SavePinButton from './SaveButton';

function AddPinToBoardDropdown({ user, pin, board }) {
  
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState('');
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();
  const className = location.pathname.includes('pin')  ?  'pin-detail-dropdown': 'pin-view-dropdown' ;
  console.log(location.pathname)
  console.log(className)
  // fetch boards data from the server when the component mounts
  useEffect(() => {
    fetch(`/api/users/${user.id}/boards`)
    .then(response => response.json())
    .then(data => setBoards(data));
  }, [user.id]);
  
  
  const arrayBoards = boards ? Object.values(boards) : [];
  const userBoards = arrayBoards.filter((board) => board.userId === user.id)  
  const finalBoards = [];
  
  userBoards.forEach((board) => {
    if (pin) {
      if (board.pins.includes(pin.id)) {
        pin['board'] = board;
      } else {
        finalBoards.push(board)
      }
    }
  })
  
  function handleBoardChange(event) {
    setSelectedBoardId(event.target.value);
  }
  
  useEffect(() => {
    console.log(selectedBoardId);
  }, [selectedBoardId]);
  
  
  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      if (!saved) {
        const response = await dispatch(createSave(selectedBoardId, pin.id));
        if (response.ok) {
          setSaved(true)
        }
      } else {
        const response = await dispatch(deleteSave(selectedBoardId, pin.id))
        if (response.ok) {
          setSaved(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
   
  }
  

  
if (!pin) {
  return null;
}

  return (
    <>
    <div className='pin-dropdown'>
        <form className='select-board-form' onSubmit={handleFormSubmit}>
          <div className="dropdown-container">
          <select className={className} value={selectedBoardId} onChange={handleBoardChange}>
            {pin.board ?  <option key={pin.board.id} value={pin.board.id}>{pin.board.name}</option> :<option value="" disabled hidden>Select a Board</option>}
              { finalBoards.map(board => (
              <option key={board.id} value={board.id}>{board.name}</option>
              ))}
              </select>

              <button className={`show-save-button ${saved ? "saved-mode" : "unsaved-mode"}`}>{saved ? "Saved" : "Save"}</button>
          </div>
        </form>
        
    </div>
    </>
  );
}

export default AddPinToBoardDropdown;