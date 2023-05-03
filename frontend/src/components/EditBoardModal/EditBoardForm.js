import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBoard } from "../../store/boards";
import { useHistory } from "react-router-dom";
import { destroyBoard } from "../../store/boards";
import './EditBoardForm.css';


function EditBoardForm({board, closeModal}) {
    const [name, setName] = useState(board.name);
    const [description, setDescription] = useState(board.description ? board.description : "");
   
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
          formData.append('board[name]', name);
          formData.append("board[description]" , description);
          formData.append('board[id]', board.id);
          formData.append('board[userId]', board.userId)
        const response = await dispatch(updateBoard(formData));
        if (response.ok) {
            closeModal();
            window.location.reload();
        }
      };

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await dispatch(destroyBoard(board.id));
        
        if (response.ok) {
            closeModal();
            history.push('/saved')
        }
    }

    
      return (
        <> 
            <form onSubmit={handleSubmit} className="edit-board-form">
                <div className="title-container">
                    <h1>Edit Board</h1>
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
            <div className="edit-board-button-container">
                <button type="submit">Save</button>
                <button onClick={handleDelete}>Delete</button>

            </div>
        </form>
    </>
  );
};



export default EditBoardForm;