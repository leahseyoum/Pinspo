import PinIndex from '../Pin/PinIndex/PinView';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSearchPins } from '../../store/pins';
import './SearchIndex.css';
function SearchPins() {
    const pins = useSelector(state => state.pins.pins);
    const dispatch = useDispatch();
    const query = useParams();

    useEffect(() => {
        dispatch(getSearchPins(query));
      }, [dispatch, query]);
    
    const arrayPins = pins ? Object.values(pins) : null;
   
  
    return (
    
  
       <div className="pins">
        {arrayPins ? arrayPins.map(pin => (
            <PinIndex className="pin" key={pin.id} pin={pin} />
        )) : <p className='search-no-results-message'>No results found, try something else!</p>}
        </div>
     
    )
  
  }
  
  export default SearchPins;