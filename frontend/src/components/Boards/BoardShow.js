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
import { displayBoard } from '../../store/boards';

function BoardShow() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.boardId
    const[board, setBoard] = useState(null);
    const [pinIds, setPinIds] = useState([]);
    const [pins, setPins] = useState(null);
  
    useEffect(() => {
      fetch(`/api/users/${user.id}/boards/${id}`)
        .then(res => res.json())
        .then(data => {
          setBoard(data.board);
          dispatch(displayBoard(user.id, id));
        })
        .catch(error => {
          // Handle error if the fetch request fails
          console.error('Error fetching board:', error);
        });
    }, [dispatch, id, setBoard, user.id]);
    

    const updatedBoard = useSelector(state => state.boards[id])

    useEffect(() => {
      fetch('/api/pins')
        .then(res => res.json())
        .then(data => {
          setPins(data);
          dispatch(displayPins());
        })
        .catch(error => {
          // Handle error if the fetch request fails
          console.error('Error fetching pins:', error);
        });
    }, [dispatch]);
    

      // const pins = useSelector(state => state.pins.pins);
      const arrayPins = pins ? Object.values(pins) : [];
      
      const boardPins = [];
      if (arrayPins) {
        arrayPins.forEach (pin => {
            if(updatedBoard?.pins?.includes(pin.id)){
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
    
    const isOwner = user?.id === updatedBoard?.userId;

  return (
    <div className="board-show">
        <div className='board-show-header'>
            <div className='edit-board-title'>

                <h2>{updatedBoard?.name[0].toUpperCase() + updatedBoard?.name.slice(1)}</h2>
                {console.log(isOwner)}
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
            <h4 className='board-description'>{updatedBoard?.description}</h4>
            <h4>{updatedBoard?.pins.length} Pins</h4>
        </div>
      <div className="board__pins">
        {boardPins.map(pin => (
            <PinIndex pin={pin} key={pin.id} />
        ))}
      </div>
    </div>
  );
}

export default BoardShow;
