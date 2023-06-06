import './BoardShow.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { displayPins } from '../../store/pins';
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import PinIndex from '../Pin/PinIndex/PinView';
import {SlOptions} from 'react-icons/sl';
import EditBoardModal from '../EditBoardModal';
import { useParams } from 'react-router-dom';
import { displayBoards } from '../../store/boards';

function BoardShow() {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();
    const id = params.boardId;
   
    
    const board = location.state.board;
  
    useEffect(() => {
      const getBoard = async () => {
        const res = await dispatch(displayBoards());
      };
      getBoard();
    }, [dispatch]);

    const updatedBoard = useSelector(state => state.boards[id])
    
    useEffect(() => {
        const getPins = async () => {
          const res = await dispatch(displayPins());
        };
        getPins();
      }, [dispatch]);

      const pins = useSelector(state => state.pins.pins);
      const arrayPins = pins ? Object.values(pins) : [];
      
      const boardPins = [];
      if (arrayPins) {
        arrayPins.forEach (pin => {
            if(board?.pins.includes(pin.id)){
                boardPins.push(pin)
                
            }
        })
      }

      const openMenu = () => {
        if (showMenu) {
          setShowMenu(false)
          return
        };
        setShowMenu(true);
      };
      const [showMenu, setShowMenu] = useState(false);
    
    const user = useSelector(state => state.session.user);
    const isOwner = user.id === board?.userId;

  return (
    <div className="board-show">
        <div className='board-show-header'>
            <div className='edit-board-title'>

                <h2>{updatedBoard?.name[0].toUpperCase() + updatedBoard?.name.slice(1)}</h2>
                {isOwner && (
                  <button className='edit-board-options' onClick={openMenu}>
                    <SlOptions className="edit-board" style={{fontSize: "22px"}}/>
                </button>
            )}
              {showMenu && (
                <ul className="edit-board-link">
                <li>
                  <EditBoardModal board={updatedBoard}/>
                </li>
              </ul>
            )}
            </div>
            <h4>{updatedBoard?.description}</h4>
            <h4>{updatedBoard?.pins.length} Pins</h4>
        </div>
      <div className="board__pins">
        {boardPins.map(pin => (
            <PinIndex pin={pin} key={pin.id} board={updatedBoard}/>
        ))}
      </div>
    </div>
  );
}

export default BoardShow;
