import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateUser} from '../../store/users';
import { useHistory } from "react-router-dom";
import './EditUserForm.css';
import ProfilePicture from "./UserProfilePhoto";

function EditUserForm() {
    const currentUser = useSelector((state) => state.session.user);
    const history = useHistory();
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email)
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  // const [profilePhotoUrl, setProfilePhotoUrl] = useState("");

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



  const [preview, setPreview] = useState('');
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setPreview(fileReader.result);
        // setProfilePhotoUrl(fileReader.result);
        setProfilePhoto(file);
      };
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[username]", username);
    formData.append("user[email]", email);
    formData.append("user[id]", currentUser.id)
    if (newPassword.length > 6 && newPassword === confirmPassword) {
        formData.append("user[password]", newPassword);
    }

    if (profilePhoto) {
        formData.append("user[profile_photo]", profilePhoto);
    }

    try {
        const response = await dispatch(updateUser(formData, currentUser));
        history.push("/saved");
      } catch (error) {
        console.log(error);
        // Display an error message to the user
      }
  };




  return (
    <form onSubmit={handleSubmit} className="edit-user-form">
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
            <img className='preview-image' src={preview} alt='Preview' />
        </div>
        {/* <ProfilePicture profilePhotoUrl={profilePhotoUrl}/> */}
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditUserForm;
