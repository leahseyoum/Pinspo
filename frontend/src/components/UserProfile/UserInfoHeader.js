import React from "react";
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import "./UserInfoHeader.css"
import ProfilePicture from "./UserProfilePhoto";

function UserInfoHeader() {
    const currentUser = useSelector(state => state.session.user);
    console.log(currentUser.boards)
    console.log(currentUser.pins)
    const history = useHistory();

    const handleEditClick = (e) => {
        e.preventDefault();
        history.push('/edit-user');
    }

    return (
       
        <div className="info-container">
            <div className="user-profile-header-container">
            <div className="user-show-profile-pic">
                    <ProfilePicture user={currentUser}/>
                </div>
            </div>

            <div className="user-profile-info-container">
                <div className="username-container">
                    <h2 className="profile-username">{currentUser.username}</h2>
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