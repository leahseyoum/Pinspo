import './BoardsIndex.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBoards } from '../../store/boards';
import BoardView from './BoardView';

function BoardIndex() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const [boards, setBoards] = useState([]);
    const [numBoards, setNumBoards] = useState(0);
    const newBoard = useSelector(state => state.boards);
   

    useEffect(() => {
        if (currentUser) {
          fetch(`/api/users/${currentUser.id}/boards`)
          .then(response => response.json())
          .then(data => {
            setBoards(data);
            setNumBoards(data.length)})
           
            
          }
        }, [dispatch, numBoards, newBoard]);
    
  
        

    useEffect(() => {
      dispatch(displayBoards(currentUser.id))
    }, [])
        
        const arrayBoards = boards ? Object.values(boards) : [];
        const userBoards = arrayBoards.filter((board) => board.userId === currentUser.id)
        
        
    return (
        <div className='boards-container'>
         {userBoards.length > 0 ? (
          <div className='boards-grid'>
            {userBoards.map(board => (
              <BoardView board={board} className="board" key={board.id} />
            ))}
          </div>
        ) : (
            null
          )}
        </div>
      );
    
  }
  
  export default BoardIndex;
  
  
  
  
  
  
  