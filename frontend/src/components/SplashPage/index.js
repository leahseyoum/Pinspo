import { splashInfo } from "./SplashURLs"
import SplashPageShow from "./SplashShow"
import "./index.css"

const Splash = () => {
    return (
        <div>
            <div className="splash-text">
                <div className="splash-header">Find your next</div>
                <div className="splash-idea-text">
                    <p className="ideas-text">inspiration</p>
                </div>
            </div>
            <div className="splash-image-container">
                {
                    splashInfo.map( (page, i) => <SplashPageShow
                    title = {page.title}
                    photoUrls = {page.photoUrls}
                    key={i}
                    />)
                }
                
            </div>
        </div>
    )

}

export default Splash