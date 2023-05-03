import React from 'react'
import SplashPhoto from './SplashImage'
import "./SplashShow.css"

const SplashPageShow = ({title, photoUrls}) => {

    return (
        <div className='splash-changing-category-container'>
            <div className='splash-photo-container'>
                {
                    photoUrls.map((photoUrl, i) =>
                    <SplashPhoto photoUrl={photoUrl}
                        key={i}
                        photoId={i}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default SplashPageShow