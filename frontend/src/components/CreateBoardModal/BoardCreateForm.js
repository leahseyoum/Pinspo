import './BoardCreateForm.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBoard } from '../../store/boards';
import { useSelector } from 'react-redux';
import { displayBoards } from "../../store/boards";


function CreateBoardForm({closeModal}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const currentUser = useSelector(state => state.session.user);
   
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
          formData.append('board[name]', name);
          formData.append("board[description]" , description);
          formData.append('board[userId]', currentUser.id)
        const response = await dispatch(createBoard(formData));
        if (response.ok) {
            dispatch(displayBoards(currentUser.id))
            closeModal();
            history.push('/saved');
        } else {
            const data = await response.json();
            if (data.errors) {
                setErrors(data.errors);
            }
        }
      };

    const handleCancel = async (event) => {
        event.preventDefault();
        closeModal();
          
    }

    
      return (
        <> 
            <form onSubmit={handleSubmit} className="create-board-form">
                <div className="create-title-container">
                    <h1>Create Board</h1>
                </div>
                {errors.map(error => <li key={error}>{error}</li>)}
            <label className='create-board-label'>
                Name:
                <input
                className='create-board-input'
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </label>
            <label className='create-board-label'>
                Description:
                <input
                type="text"
                className='create-board-input'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <button className='create-board-button' type="submit">Save</button>
            <button className='create-board-button' onClick={handleCancel}>cancel</button>
        </form>
    </>
  );
};



export default CreateBoardForm;