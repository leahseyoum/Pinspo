import './CommentInput.css';
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';
import { createComment } from "../../store/comments"


const CommentInput = ({pin, user}) => {
    const dispatch = useDispatch();

    const [comment, setComment] = useState({
        description: ""
    })
   
    const update = (field) => {
        return e => setComment({
            ...comment, [field]: e.currentTarget.value
        })
    }

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createComment(pin.id, comment));
        setComment({ description: '' })
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          handleCreate(e);
        }
      };

    return (
        <div className='create-comment'>
            {user.profilePhoto ? (<div className="image-wrapper-nav">
                    <img className='nav-profile-image' src={user.profilePhoto} alt='profile-photo' />
                </div>) :
                    (<div className="user-icon-container">
                        <button  className='user-icon-nav'>{user.username[0].toUpperCase()}</button>
                    </div>)}
            <input
                className='comment-input'
                value={comment.description}
                onChange={update('description')}
                placeholder="   Add a comment"
                onKeyPress={handleKeyPress} 
                type="text"
            />
            {/* <div className='done-button-container'>
                <button onClick={handleCreate} className="done-button">Done</button>
            </div> */}
        </div>
    )
    

      
    
}
export default CommentInput;