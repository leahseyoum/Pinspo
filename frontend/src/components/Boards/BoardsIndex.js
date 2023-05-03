import './BoardsIndex.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardView from './BoardView';

function BoardIndex() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const [boards, setBoards] = useState([]);
   

    useEffect(() => {
        if (currentUser) {
          fetch(`/api/users/${currentUser.id}/boards`)
          .then(response => response.json())
          .then(data => setBoards(data));
          }
        }, [currentUser, dispatch]);
        
        const arrayBoards = boards ? Object.values(boards) : [];
        const userBoards = arrayBoards.filter((board) => board.userId === currentUser.id)
        
        console.log(arrayBoards)
    return (
        <div className='boards-container'>
          {userBoards.length > 0 ? (
            userBoards.map(board => (
              <BoardView board={board} className="board" key={board.id} />
            ))
          ) : (
            <p>Loading boards...</p>
          )}
        </div>
      );
    
  }
  
  export default BoardIndex;
  
  
  
  
  
  
  