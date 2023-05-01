import './NewPinForm.css';
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createPin } from "../../../store/pins"
import DragDropFile from './DragAndDrop';
import { useInput, useSubmit } from '../../../hooks';
import { useHistory } from 'react-router-dom';
import { FormErrors, Input, TextArea } from '../../Forms';



function NewPinForm() {
    // const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [link, setLink] = useState("");
    const [imageFile, setImageFile] = useState(null)
    const [imageUrl, setImageUrl] = useState(null);
    
    const [errors, onSubmit] = useSubmit({
        createAction: () => {
            const formData = new FormData();
            formData.append('pin[title]', title);
            formData.append('pin[caption]', caption);
            formData.append('pin[link]', link);
            
            if (imageFile) {
                formData.append('pin[image]', imageFile);
            }
            return createPin(formData);
        },

        onSuccess:() => history.push('/created')
        // onSucess: <Redirect to='/index'/>
    });
    
    
    
    const handleFileChange = e => {
        const file = e.target.files[0];
        if (file) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            setImageFile(file);
            setImageUrl(fileReader.result);
            setPreview(fileReader.result);
          };
        }
      }

      const dropZoneRef = useRef(null);
        const [preview, setPreview] = useState('');
      

    return (
        <>
          { user ?  
            <div className='new-pin-form-background'>
                <form className="pin-form-container" onSubmit={onSubmit}>
                    <div className='new-pin-nav-container'>
                        <select className='new-pin-form-dropdown'>
                        <option value="" selected disabled>Select a board</option>
                        </select>
                        <button className='new-pin-save-button'>Save</button>
                    </div>
                    <div className='new-pin-form-body-container'>
                        <div class="dropzone">
                            {/* <DragDropFile onChange={handleFileChange}/> */}
                            <div className='dashed'>
                              {/* <DragDropFile onChange={handleFileChange}/> */}
                              <img className='preview-image' src={preview} alt='Preview' />
                                <Input 
                                  label="Drag and drop or click to upload"
                                  class= 'photo-input'
                                  type="file" 
                                  onChange={handleFileChange} 
                              />
                            </div>

                         </div> 
                         
                    <div className='new-pin-text-inputs'>
                            <div className='new-pin-title-container'>
                                <input className='new-pin-title' type="text" placeholder="Add your title" onChange={(e) => setTitle(e.target.value)}></input>
                            </div>
                            <div className="user-info">
                                <div className='user-icon'>{user.username[0].toUpperCase()}</div>
                                <p className='user-icon-username'>{user.username}</p>
                            </div>
                            <div className='new-pin-caption-container'>
                                <input className='new-pin-caption' type="text" placeholder="Tell everyone what your pin is about!" onChange={(e) => setCaption(e.target.value)}></input>
                            </div>
                            <div className='new-pin-link-container'>
                                <input className='new-link-caption' type="text" placeholder="Add a destination link" onChange={(e) => setLink(e.target.value)}></input>
                            </div>

                    </div>

                    </div>
                </form>
            </div>
            : null}
        </>
        
    )
}

export default NewPinForm;

