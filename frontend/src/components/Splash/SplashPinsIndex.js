import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { displayPins } from "../../store/pins"
import { useEffect } from "react"
import Masonry from "react-masonry-css"
import Spinner from "../Spinner/Spinner"

export const BREAKPOINTS = {
    default: 8,
    2120: 7, 
    1860: 6,
    1600: 5,
    1340: 4,
    1080: 3,
}

const DiscoverPinsContainer = (props) => {
    const dispatch = useDispatch()
    const [pins, setPins] = useState(null)
    useEffect(() => {
        fetch('/api/pins')
          .then((res) => res.json())
          .then((data) => setPins(data.pins))
          .catch((error) => {
            // Handle any errors that occurred during the fetch request
            console.error('Error fetching pins:', error);
          });
      }, []);
      
      if (pins === null || pins === undefined) {
        // Pins data is not yet available, show loading state or spinner
        return <Spinner />;
      }
      
      const splashPins = pins?.slice(0, 40);
    return (
        
        <div className="pins-container">
            <Masonry 
                breakpointCols={BREAKPOINTS}
                className="splash-background-grid"
                columnClassName="masonry-grid-column">
                {
                splashPins.map((pin, i) => 
                
                <div className="discover-page-photo" key={i}>
                    <img src={pin?.imageUrl}></img>
                </div>
                )
                }
            </Masonry>
            
        </div>
         
        
    )


}

export default DiscoverPinsContainer
