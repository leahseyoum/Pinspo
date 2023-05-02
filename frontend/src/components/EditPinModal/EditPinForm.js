import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePin } from "../../store/pins";
import { destroyPin } from "../../store/pins";
import { useHistory } from "react-router-dom";
import './EditPinForm.css';



function EditPinForm({pin, closeModal}) {
   
    const [title, setTitle] = useState(pin.title);
    const [caption, setCaption] = useState(pin.caption);
    const [link, setLink] = useState("");
    

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
          formData.append('pin[title]', title);
          formData.append("pin[caption]" , caption);
          formData.append("pin[link]" , link);
          formData.append('pin[id]', pin.id);
        const response = await dispatch(updatePin(formData));
        if (response.ok) {
            closeModal();
            // history.push(`/pins/${pin.id}`);
            window.location.reload();
        }
      };

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await dispatch(destroyPin(pin.id));
        
        if (response.ok) {

            closeModal();
            history.push('/created')
        }
    }

    
      return (
        <> 
            <form onSubmit={handleSubmit} className="edit-pin-form">
                <div className="title-container">
                    <h1>Edit Pin</h1>
                </div>
                <select className='edit-pin-board-dropdown'>
                    <option value="" selected disabled>Board</option>
                 </select>
            <label>
                Title:
                <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />
            </label>
            <label>
                Caption:
                <input
                type="text"
                value={caption}
                onChange={(event) => setCaption(event.target.value)}
                />
            </label>
            <label>
                Link:
                <input
                type="text"
                value={link}
                onChange={(event) => setLink(event.target.value)}
                />
            </label>
            <button type="submit">Update</button>
            <button onClick={handleDelete}>Delete</button>
        </form>
    </>
  );
};



export default EditPinForm;