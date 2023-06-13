import PinIndex from '../Pin/PinIndex/PinView';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSearchPins } from '../../store/pins';
import Spinner from '../Spinner/Spinner';
import './SearchIndex.css';
function SearchPins() {
    const pins = useSelector(state => state.pins.pins);
    const [searchPins, setSearchPins] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const query = useParams();

    // useEffect(() => {
    //     if (query.query) {
    //       dispatch(getSearchPins(query.query));
    //     } else {
    //       dispatch(getSearchPins(query));
    //     }
    //   }, [dispatch, query]);
    useEffect(() => {
      setIsLoading(true); // Start loading
      if (query.query) {
        dispatch(getSearchPins(query.query))
          .then(() => setIsLoading(false)) 
          .catch(error => {
            setIsLoading(false); 
            console.error('Error fetching search pins:', error);
          });
      } else {
        dispatch(getSearchPins(query))
          .then(() => setIsLoading(false)) // Stop loading when pins are fetched
          .catch(error => {
            setIsLoading(false); // Stop loading if there's an error
            console.error('Error fetching search pins:', error);
          });
      }
    }, [dispatch, query]);
    
    const arrayPins = pins ? Object.values(pins) : null;
   
  
    return (
      <div className="pins">
        {isLoading ? ( 
          <Spinner />
        ) : arrayPins && arrayPins.length > 0 ? ( 
          arrayPins.map(pin => (
            <PinIndex className="pin" key={pin.id} pin={pin} />
          ))
        ) : (
          <p className='search-no-results-message'>No results found, try something else!</p>
        )}
      </div>
    );
  
  
  }
  
  export default SearchPins;