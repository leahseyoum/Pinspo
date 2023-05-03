import React from 'react'
import "./SplashImage.css"

const SplashPhoto = (props) => {

    const { photoUrl, photoId } = props
    return (
        
        <div className={`splash-individual-photo`}>
            <img className={`splash-photo-${photoId} splash-photo-generic`} src={photoUrl} alt="" />
        </div>  
        
    )

}


export default SplashPhoto