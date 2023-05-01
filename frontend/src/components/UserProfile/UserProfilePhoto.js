import React from 'react'
import './UserProfilePhoto.css'
const ProfilePicture = (props) => {

    const { user, big = false, medium = false, s = false, xs = false } = props
    console.log(user.profilePhoto.name, 'profile picture component')
    const uploadedPhoto = () => {
        return (
            <div className="user-preview-pic">
                <div className={`div-image ${big ? "big" : medium ? "medium" : s ? "s" : xs ? "xs" : ""}`} style={{ backgroundImage: `url(\"${user?.profilePhoto}\")` }} />
            </div>
        )
    }

    const photoPreview = () => {
        return (
            <div className='user-preview-pic'>
                <div className={`preview-photo ${big ? "big" : medium ? "medium" : s ? "s" : xs ? "xs" : ""}`}>
                    <h1 className={`preview-photo-letter  `}>{user?.username[0].toUpperCase()}</h1>
                </div>
            </div>
        )
    }

    return user?.profilePhoto ? uploadedPhoto() : photoPreview();


}


export default ProfilePicture