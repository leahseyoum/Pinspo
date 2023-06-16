import { splashInfo } from "./SplashInfo"
import SplashPageShow from "./SplashPageShow"
import DiscoverPinsContainer from "./SplashPinsIndex"
import SplashSignUp from "./SplashSignUp"
import "./index.css"
import { useEffect, useRef, useState } from "react"

const Splash = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [updateInterval, setUpdateInterval] = useState(0)

    const arrowRef = useRef(null)
    const pageButtons = ["0", "1", "2", "3"]

    const handleArrow = () => {
        arrowRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handlePageNav = (page) => {
        setCurrentPage(parseInt(page));
        setUpdateInterval((prev) => (prev % 3) + 1);
    }

    let interval;
    useEffect(() => {
        interval = setInterval(()=>{
            setCurrentPage((prevpage) => prevpage + 1)
        },6000);

    }, []);
   
    useEffect(() => {
        if (updateInterval > 0) {
            interval = setInterval(() => {
                setCurrentPage((prevPage) => prevPage + 1)
            }, 6000);
        }

        return () => {
            clearInterval(interval)
        }
    }, [updateInterval])

    return (
        <div className="splash-container">
            <section className="splash-page-container">
                <div className="splash-text">
                    <div className="splash-header">Find Your Next</div>
                    
                </div>
                <div className="page-nav-buttons">
                    {pageButtons.map(pageButton =>
                        <div
                            key={pageButton}
                            onClick={() => handlePageNav(pageButton)}
                            className={currentPage % 4 === parseInt(pageButton) ? `${splashInfo[parseInt(pageButton)].title.split(" ")[0]}-page-button` : ""}
                        >
                        </div>
                    )}
                </div>
                <div className="splash-image-container">
                    {
                        splashInfo.map( (page, i) => <SplashPageShow
                        title = {page.title}
                        handleArrow = {handleArrow}
                        photoUrls = {page.photoUrls}
                        key={i}
                        shouldShow={currentPage % 4 === i}
                        shouldLeave={(currentPage - 1) % 4 === i}
                        />)
                    }
                    
                </div>
            </section>
            <section ref={arrowRef} className="one-and-half-page">
                <div className="one-and-half-picture-container">
                    <div className="one-and-half-picture-box">
                        <div className="img-container-1">
                            <img className="sunset-1" src="https://interestin-seeds.s3.us-west-1.amazonaws.com/sunset/sunset_1.jpg" alt="sunset-1" />
                        </div>
                        <div className="img-container-2">
                             <img className="sunset-2" src="https://interestin-seeds.s3.us-west-1.amazonaws.com/sunset/sunset_2.jpg" alt="sunset-2" />
                        </div>
                        <div className="img-container-3">
                            <img className="sunset-3" src="https://interestin-seeds.s3.us-west-1.amazonaws.com/sunset/sunset_3.jpg" alt="sunset-3" />
                        </div>
                        <div className="img-container-4">
                            
                            <img className="sunset-4" src="https://interestin-seeds.s3.us-west-1.amazonaws.com/sunset/sunset_4.jpg" alt="sunset-4" />
                                                        
                        </div>
                        
                    </div>
                    
                </div>
                <div className="one-and-half-text-container">
                    <h1>Search for an inspiration</h1>
                    <p>What do you want to try next? Think of something you're into-like "sunset" - and see what you find.</p>
                </div>
            </section>
            <section className="second-page">
                <div className='second-page-background'></div>
                <div className='second-page-photo-background'>
                    <DiscoverPinsContainer photoNumber={28} />
                </div>
                <div className="second-page-text-container">
                    <p>Sign up to get your ideas</p>
                </div>
                <div onClick={handleArrow} className={`second-page-arrow splash-arrow`}>
                    <i className="fa-solid fa-chevron-up fa-lg"></i>
                </div>
                <div className="splash-signup">
                    <SplashSignUp/>
                </div>
            </section>


        </div>
    )

}

export default Splash
