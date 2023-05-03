import React, { useState, useEffect } from 'react';
import { createSave } from '../../store/boardPins';
import { useDispatch } from 'react-redux';
import CreateBoardModal from '../CreateBoardModal';

function AddPinToBoardDropdown({ user, pin }) {
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  // fetch boards data from the server when the component mounts
  useEffect(() => {
    fetch(`/api/users/${user.id}/boards`)
      .then(response => response.json())
      .then(data => setBoards(data));
  }, [user.id]);

  
  const arrayBoards = boards ? Object.values(boards) : [];
  const userBoards = arrayBoards.filter((board) => board.userId === user.id)  

    
  function handleBoardChange(event) {
    setSelectedBoardId(event.target.value);
  }

  useEffect(() => {
    console.log(selectedBoardId);
  }, [selectedBoardId]);

  // function to handle the form submission when a board is selected
//   async function handleFormSubmit(event) {
//         event.preventDefault();
//         const response = await dispatch(createSave(selectedBoardId, pin.id));
//         if (response.ok) {
//             setMessage('Pin was successfully added to board.');
//         } else {
//             setMessage('Failed to add pin to board.');
//         }

      
//         setTimeout(() => {
//             console.log(message);
//             setMessage('');
//           }, 5000);
//   }

async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await dispatch(createSave(selectedBoardId, pin.id));
      if (response.ok) {
        setMessage('Pin was successfully added to board.');
      } else {
        setMessage('Failed to add pin to board.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to add pin to board.');
    }
    setTimeout(() => {
      setMessage('');
    }, 5000);
  }
  

  if (!pin) {
    return null; // or render a loading spinner, etc.
  }

  return (
    <>
        <form className='select-board-form' onSubmit={handleFormSubmit}>
        <div>
        <select id="board-select" value={selectedBoardId} onChange={handleBoardChange}>
            {userBoards.map(board => (
            <option key={board.id} value={board.id}>{board.name}</option>
            ))}
        </select>

            <button className="show-save-button">Save</button>
            {message && <p className='response-message'>{message}</p>}
        </div>
        </form>
       
    </>
  );
}

export default AddPinToBoardDropdown;