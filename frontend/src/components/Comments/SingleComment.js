import './SingleComment.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {SlOptions} from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/comments';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const SingleComment = ({ comment, pin, user}) => {
    const [showDeleteMenu, setShowDeleteMenu] = useState(false);
    const [commenter, setCommenter] = useState(null);
    const commenterId = comment.commenterId;
    const dispatch = useDispatch();  
    
    useEffect(() => {
        fetch(`/api/users/${commenterId}`)
        .then(res => res.json())
        .then(data => setCommenter(data))
    }, [commenterId])

    const openMenu = () => {
        if (showDeleteMenu) {
          setShowDeleteMenu(false)
          return
        };
        setShowDeleteMenu(true);
      };
    
    const handleDelete = () => {
        dispatch(deleteComment(pin.id, comment.id))
    }
    const isOwner = commenter?.user.id === user.id
    return (
        <> 
            <div className='single-comment-container'>
                {commenter?.user.profilePhoto ? (<div className="image-wrapper-nav">
                    <img className='nav-profile-image' src={commenter?.user.profilePhoto} alt='profile-photo' />
                </div>) :
                    (<div className="user-icon-container">
                        <button  className='user-icon-nav'>{commenter?.user.username[0].toUpperCase()}</button>
                    </div>)}
            
                <div className='comment-user-info'>
                    <p className='commenter-username'>{commenter?.user.username}</p>
                </div>
                
                <div className='comment-description-container'>
                    <p className='comment-description'>{comment.description}</p>

                </div>

                {isOwner && (
                    <button className='edit-options-button' onClick={openMenu}>
                         <SlOptions className="comment-options" />
                    </button>
                )}
                {showDeleteMenu && (
                <div className='comment-delete-container'>
                    <button className='comment-delete' onClick={handleDelete}>Delete</button>
                </div>
                 )}
            </div>
        </>
    )
}

export default SingleComment;