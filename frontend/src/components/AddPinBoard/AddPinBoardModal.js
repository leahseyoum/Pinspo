import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { createSave } from "../../store/boardPins";
import { deleteSave } from "../../store/boardPins";
import { useDispatch } from "react-redux";
import {AiOutlinePlus} from 'react-icons/ai';
import BoardTile from "./BoardTile";
import './AddPinBoardModal.css'
import CreateBoardSelectModal from "./CreateBoardSelectModal";

const AddPinBoardModal = ({ finalBoards, closeMenu, currentUser, pin, setShowBoardMenu }) => {
  
  const [selectedBoardId, setSelectedBoardId] = useState(pin.board ? pin.board.id : '');
  const [boardSaved, setBoardSaved] = useState({}); // Object to hold saved state for each board
  const stateBoards = useSelector(state => state.boards)
  const dispatch = useDispatch();
  const [isParentHovered, setIsParentHovered] = useState(false);
  
  const modalRef = useRef(null);
  
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const targetElement = event.target;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      !targetElement.classList.contains("create-board-form") &&
      !targetElement.classList.contains("create-title-container") &&
      !targetElement.classList.contains("create-board-label") &&
      !targetElement.classList.contains("create-board-input") &&
      !targetElement.classList.contains("create-board-button") ) {
        setShowBoardMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowBoardMenu]);
  


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

  

  useEffect(() => {
    const modal = modalRef.current;
    const modalRect = modal.getBoundingClientRect();
    const modalLeft = modalRect.left;
    const modalRight = modalRect.right;
    const windowWidth = window.innerWidth;

    if (modalRight > windowWidth) {
      const shiftAmount = modalRight - windowWidth;
      console.log(shiftAmount, 'shift amont')
      // modal.style.left = `${parseInt(modal.style.left, 10) - shiftAmount}px`;
      // modal.style.right = `${parseInt(modal.style.left, 100) - shiftAmount}px`;
      // modal.style.left = `${parseInt(modal.style.right) - 230}px`;
      modal.style.right = `${modalRight - 150}px`;
      modal.style.left= `${modalLeft - 150}px`;
    }

    if (modalLeft < 100) {
      modal.style.left = "50px"; 
    }

    
  }, []);

  
  
  return (
    <div className='select-modal-ref' ref={dropdownRef} >
      <div
        
        className={`add-pin-board-modal ${isParentHovered ? 'visible' : ''}`}
        ref={modalRef}
      >
        <div className="board-select-modal-header" ref={dropdownRef}>
          <p className="board-select-header" ref={dropdownRef}>Save to board</p>
          
          <button className='board-select-exit-button' onClick={closeMenu} ref={dropdownRef}>x</button>
        </div>
        {finalBoards.map(board => {
          if (board.userId === currentUser.id) {
            const isSaved = boardSaved[board.id] || false;
            return (
              <div className="board-save-option" key={board.id} ref={dropdownRef}>
                <div className="tile-name-container"ref={dropdownRef}>
                  <BoardTile board={board} />
                  <p className="board-select-name" ref={dropdownRef}>{board.name}</p>
                </div>
                <button
                  className={`show-save-button ${isSaved ? "saved-mode" : "unsaved-mode"}`}
                  onClick={event => handleFormSubmit(event, board.id)}
                  ref={dropdownRef}
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
    </div>
  );
};

export default AddPinBoardModal;

