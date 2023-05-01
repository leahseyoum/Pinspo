import React from "react";
import { useSelector } from "react-redux"
import "./UserInfoHeader.css"

function UserInfoHeader() {
    const currentUser = useSelector(state => state.session.user);
    console.log(currentUser);
    return (
       

        <div className="info-container">
                <div className="user-profile-header-container">
                    <div className="placeholder-circle"></div>
                </div>

                <div className="user-profile-info-container">
                    <h2 className="profile-username">{currentUser.username}</h2>
                    <h3>X following</h3>
                    <button>Edit Profile</button>
                    <a href="/created">Created</a>
                    <a href="/saved">Saved</a>
                </div>
                
        </div>
        
    );
};

export default UserInfoHeader