import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./UserInfoHeader.css"
import ProfilePicture from "./UserProfilePhoto";
import { setCurrentUser } from "../../store/session";
import { Dispatch } from "react";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

function UserInfoHeader() {
    const currentUser = useSelector(state => state.session.user);
    const userParams = useParams();
    const userId = userParams.userId;
    // console.log(userId)
    const [username, setUsername] = useState(currentUser.username);
    const [email, setEmail] = useState(currentUser.email)
    const [profilePhoto, setProfilePhoto] = useState(currentUser.profilePhoto);
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        fetch(`/api/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data.user))
    }, [userParams])
    

    const handleEditClick = (e) => {
        e.preventDefault();
        history.push('/edit-user');
    }

    useEffect(() => {
        if (user?.id === currentUser?.id) {
            setEmail(user.email);
            setUsername(user.username);
            setProfilePhoto(user.profilePhoto)
            dispatch(setCurrentUser(user))
        } else {
            setUsername(currentUser.username);
            setEmail(currentUser.email);
        }
      }, [currentUser, user]);
    
      
      return (
        
        <div className="info-container">
          {user ? (
            <>
              <div className="user-profile-header-container">
                <div className="user-show-profile-pic">
                  {user.profilePhoto ? (
                    <img className="profile-photo" src={user.profilePhoto} alt="profile photo" />
                  ) : (
                    <p className="user-initial">{username[0].toUpperCase()}</p>
                  )}
                </div>
              </div>
      
              <p className="username-tag">{`@${user.username}`}</p>
              <div className="user-profile-info-container">
                <div className="username-container">
                  <h2 className="profile-username">{user.username}</h2>
                  {user.id === currentUser.id ? 
                    <button className="edit-profile-button" onClick={handleEditClick}>
                      Edit Profile
                    </button> : null
                  }
                </div>
                <div className="user-nav-links-container">
                  <Link to={`/users/${user.id}/created`} className={`user-nav-link ${location.pathname === `/users/${user.id}/created`? 'active' : ''}`}>
                Created
              </Link>
              <Link to={`/users/${user.id}/saved`} className={`user-nav-link ${location.pathname === `/users/${user.id}/saved` ? 'active' : ''}`}>
                Saved
              </Link>
                </div>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </div>
      );
      
};

export default UserInfoHeader