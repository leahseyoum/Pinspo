
import './BoardsIndex.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBoards } from '../../store/boards';
import BoardView from './BoardView';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

function BoardIndex() {
  const userParams = useParams();
  const userId = parseInt(userParams.userId);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const [boards, setBoards] = useState([]);
  const [numBoards, setNumBoards] = useState(0);
  const newBoard = useSelector(state => state.boards);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for boards data

  useEffect(() => {
    if (userId) {
      dispatch(displayBoards(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (userId) {
      fetch(`/api/users/${userId}/boards`)
        .then(response => response.json())
        .then(data => {
          setBoards(data);
          setNumBoards(data.length);
          setLoading(false);
        });
    }
  }, [userId, newBoard]);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data.user))
  }, [])

  

  const arrayBoards = boards ? Object.values(boards) : [];
  
  const userBoards = arrayBoards.filter(board => 
    board.userId === userId);

  
  return (
    <div className='boards-container'>
      {loading ? (
        <Spinner /> 
      ) : userBoards && userBoards.length > 0 ? (
        <div className='boards-grid'>
          {userBoards.map(board => (
            <BoardView board={board} className='board' key={board.id} />
          ))}
        </div>
      ) : (
        <p className='no-boards-message'>
          {user.id === currentUser.id
            ? "You haven't saved any pins yet"
            : `${user?.username} hasn't saved any pins yet`}
        </p>

      )}
    </div>
  );
}

export default BoardIndex;

  
  
  
  
  
  
  