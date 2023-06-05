import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "./UserInfoHeader.css"
import ProfilePicture from "./UserProfilePhoto";
import { setCurrentUser } from "../../store/session";
import { Dispatch } from "react";

function UserInfoHeader() {
    const currentUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.users?.user?.user);
    const [username, setUsername] = useState(currentUser.username);
    const [email, setEmail] = useState(currentUser.email)
    const history = useHistory();
    const dispatch = useDispatch();
    

    const handleEditClick = (e) => {
        e.preventDefault();
        history.push('/edit-user');
    }

    useEffect(() => {
        if (users) {
            setEmail(users.email);
            setUsername(users.username);
            dispatch(setCurrentUser(users))
        } else {
            setUsername(currentUser.username);
            setEmail(currentUser.email);
        }
      }, [currentUser, users]);
    

    return (
       
        <div className="info-container">
            <div className="user-profile-header-container">
            <div className="user-show-profile-pic">
                    <p className="user-initial">{username[0].toUpperCase()}</p>
            </div>
            </div>

            <div className="user-profile-info-container">
                <div className="username-container">
                    <h2 className="profile-username">{username}</h2>
                    <button className="edit-profile-button" onClick={handleEditClick}>Edit Profile</button>
                </div>
                <div className="user-nav-links-container">
                    <a href="/created" className="user-nav-link">Created</a>
                    <a href="/saved" className="user-nav-link">Saved</a>
                </div>
            </div>
        </div>
        
    );
};

export default UserInfoHeader