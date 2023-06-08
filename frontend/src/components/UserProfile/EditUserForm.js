import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateUser} from '../../store/users';
import { useHistory } from "react-router-dom";
import './EditUserForm.css';
import { useSubmit } from "../../hooks";
import ProfilePicture from "./UserProfilePhoto";

function EditUserForm() {
    const currentUser = useSelector((state) => state.session.user);
    const history = useHistory();
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email)
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState();
  
  
  const formRef = useRef(null);


  useEffect(() => {
    setUsername(currentUser.username);
    setEmail(currentUser.email);
    setProfilePhoto(currentUser.profilePhoto);
  }, [currentUser.username, currentUser.email, currentUser.profilePhoto]);

  // useEffect(() => {
  //   if (response && response.user) {
  //     console.log(response);
  //   }
  // }, [response, dispatch]);

  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };



  const [preview, setPreview] = useState(currentUser.profilePhoto);
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setPreview(fileReader.result);
        setProfilePhoto(file);
      };
    }
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("user[username]", username);
  //   formData.append("user[email]", email);
  //   formData.append("user[id]", currentUser.id)
  //   if (newPassword.length > 6 && newPassword === confirmPassword) {
  //       formData.append("user[password]", newPassword);
  //   }

  //   if (profilePhoto) {
  //       formData.append("user[profile_photo]", profilePhoto);
  //   }

  //   try {
  //       const response = await dispatch(updateUser(formData, currentUser));
  //       history.push("/saved");
  //     } catch (error) {
  //       // Display an error message to the user
  //     }
  // };

  const [errors, onSubmit] = useSubmit({
    createAction: () => {
        const formData = new FormData();
        formData.append("user[username]", username);
        formData.append("user[email]", email);
        formData.append("user[id]", currentUser.id)
        if (profilePhoto) {
            formData.append('user[profile_photo]', profilePhoto);
        }

        if (newPassword.length > 6 && newPassword === confirmPassword) {
          formData.append("user[password]", newPassword);
      }
        return updateUser(formData);
    },

    onSuccess:() => {
        history.push('/saved')},
    
});

  useEffect(() => {
    const handleClickOutsideForm = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        history.push("/saved");
      }
    };

    document.addEventListener("click", handleClickOutsideForm);

    return () => {
      document.removeEventListener("click", handleClickOutsideForm);
    };
  }, [history]);


  
  return (
    <form onSubmit={onSubmit} className="edit-user-form" ref={formRef}>
      <div className="edit-profile-title">
        <h1 className="edit-profile-header">Edit Profile</h1>
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          name="username"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          name="password"
          value={newPassword}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="password">Confirm New Password:</label>
        <input
          type="password"
          name="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div>
        <label htmlFor="profile_photo">Profile Photo:</label>
        <input
          type="file"
          name="profile_photo"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="preview-container">
            {preview ? <img className='preview-image' src={preview} alt='Preview' /> : null}
        </div>
        {/* <ProfilePicture profilePhotoUrl={profilePhotoUrl}/> */}
      </div>
      <button className="save-edit-profile-button" type="submit">Save Changes</button>
    </form>
  );
}

export default EditUserForm;
