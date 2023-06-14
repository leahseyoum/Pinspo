import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createSave } from "../../store/boardPins";
import { deleteSave } from "../../store/boardPins";
import { useDispatch } from "react-redux";
import {AiOutlinePlus} from 'react-icons/ai';
import BoardTile from "./BoardTile";
import './AddPinBoardModal.css'
import CreateBoardSelectModal from "./CreateBoardSelectModal";

const AddPinBoardModal = ({ finalBoards, closeMenu, currentUser, pin }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedBoardId, setSelectedBoardId] = useState(pin.board ? pin.board.id : '');
  const [boardSaved, setBoardSaved] = useState({}); // Object to hold saved state for each board
  const stateBoards = useSelector(state => state.boards)
  const dispatch = useDispatch();

  useEffect(() => {
    finalBoards.forEach(board => {
      if (board.id && pin.id && !boardSaved[board.id]) {
        fetch(`/api/board_pins/${board.id}/${pin.id}?board_pin[board_id]=${board.id}&board_pin[pin_id]=${pin.id}`)
          .then(response => response.json())
          .then(data => {
            // Check if the board pin exists
            const isSaved = data.message !== 'Board pin not found';
            setBoardSaved(prevState => ({ ...prevState, [board.id]: isSaved }));
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  }, [finalBoards, pin.id]);

  async function handleFormSubmit(event, boardId) {
    event.preventDefault();
    try {
      const isSaved = boardSaved[boardId] || false;

      if (!isSaved) {
        const response = await dispatch(createSave(boardId, pin.id));
        if (response.ok) {
          setBoardSaved(prevState => ({ ...prevState, [boardId]: true }));
        }
      } else {
        const response = await dispatch(deleteSave(boardId, pin.id));
        if (response.ok) {
          setBoardSaved(prevState => ({ ...prevState, [boardId]: false }));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="add-pin-board-modal">
        <div className="board-select-modal-header">
          <p className="board-select-header">Save to board</p>
          <button className='board-select-exit-button'onClick={closeMenu}>x</button>
        </div>
        {finalBoards.map(board => {
          if (board.userId === currentUser.id) {
            const isSaved = boardSaved[board.id] || false;
            return (
              <div className="board-save-option" key={board.id}>
                <div className="tile-name-container">
                  <BoardTile board={board} />
                  <p className="board-select-name">{board.name}</p>
                </div>
                <button
                  className={`show-save-button ${isSaved ? "saved-mode" : "unsaved-mode"}`}
                  onClick={event => handleFormSubmit(event, board.id)}
                >
                  {isSaved ? "Saved" : "Save"}
                </button>
              </div>
            );
          }
        })}
        <p className="suggestions">Suggestions</p>
         <div className="select-board-modal-create-board-container">
                  <button className="select-board-create-board-button">
                  <CreateBoardSelectModal/>
                  </button>
                  <p className="select-board-create-board">Create Board</p>
          </div>
      </div>
    </>
  );
};

export default AddPinBoardModal;

