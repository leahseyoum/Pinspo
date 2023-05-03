import './BoardCreateForm.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBoard } from '../../store/boards';
import { useSelector } from 'react-redux';



function CreateBoardForm({closeModal}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
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
            closeModal();
            // window.location.reload();
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
            <label>
                Name:
                <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </label>
            <label>
                Description:
                <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <button type="submit">Save</button>
            <button onClick={handleCancel}>cancel</button>
        </form>
    </>
  );
};



export default CreateBoardForm;