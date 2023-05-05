import React, { useState, useEffect } from 'react';
import { createSave, deleteSave } from '../../store/boardPins';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './AddPinBoard.css';


function AddPinToBoardDropdown({ user, pin}) {
  
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState('');
  const [saved, setSaved] = useState(pin.board? true : false);
  const dispatch = useDispatch();

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
  });

  const pinId = pin.id;

  function handleBoardChange(event) {
    setSelectedBoardId(event.target.value);
  }
  
  // const getBoardPinId = async (selectedBoardId, pinId) => {
  //   try {
  //     const response = await fetch(`/api/board_pins?board_pin[board_id]=${selectedBoardId}&board_pin[pin_id]=${pinId}`);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //     console.log(data)
  //     return data[0];
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  
 

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(saved)
    try {
      console.log(selectedBoardId, pinId)
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
              {pin.board ?  <option key={pin.board.id} value={pin.board.id}>{pin.board.name}</option> :<option value="" disabled hidden>Select a Board</option>}
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


