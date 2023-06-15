import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePin } from "../../store/pins";
import { destroyPin } from "../../store/pins";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSubmit } from "../../hooks";
import AddPinToBoardDropdown from "../AddPinBoard/AddPinBoard";
import './EditPinForm.css';



function EditPinForm({closeModal}) {
    const user = useSelector(state => state.session.user);
    const pin = useSelector(state => state.pins.pin);
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [link, setLink] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (pin) {
          setTitle(pin.title);
          setCaption(pin.caption);
          setLink(pin.link);
        }
      }, [pin]);

    const dispatch = useDispatch();
    const history = useHistory();
    const pinId = useParams()
    

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (pin) {
    //         const formData = new FormData();
    //           formData.append('pin[title]', title);
    //           formData.append("pin[caption]" , caption);
    //           formData.append("pin[link]" , link);
    //           formData.append('pin[id]', pinId.pinId);
    //         const response = await dispatch(updatePin(formData));

    //         if (response.ok) {
    //             closeModal();
    //             // history.push(`/pins/${pin.id}`);
    //             window.location.reload();
    //         }
    //     }


    //   };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (pin) {
            const formData = new FormData();
            formData.append('pin[title]', title);
            formData.append('pin[caption]', caption);
            formData.append('pin[link]', link);
            formData.append('pin[id]', pinId.pinId);
            
                const response = await dispatch(updatePin(formData));
                if (response.ok) {
                    closeModal();
                    // window.location.reload();
                } else {
                    const responseErrors = await response.json();
                    setErrors(responseErrors)
                }
           
        }
    };

    
    

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await dispatch(destroyPin(pinId.pinId));
        
        if (response.ok) {

            closeModal();
            history.push(`/users/${user.id}/created`)
        }
    }

    if (!pin) return null;
   
      return (
        <> 
            <form onSubmit={handleSubmit} className="edit-pin-form">
                <div className="title-container">
                    <h1>Edit Pin</h1>
                </div>
                <ul className="login-errors">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
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
                value={link !== 'undefined' ? link : ""}
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