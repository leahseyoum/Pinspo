import PinIndex from '../Pin/PinIndex/PinView';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSearchPins } from '../../store/pins';

function SearchPins() {
    const pins = useSelector(state => state.pins.pins);
    const dispatch = useDispatch();
    const [pins2, setPins2] = useState('');
   

    const query = useParams();
    
    useEffect(() => {
        const res = dispatch(getSearchPins(query.query));
        setPins2(res);
    }, [dispatch, query.query])

   
    if (!pins || !pins2) {
        return null;
      }
    
    const arrayPins = pins ? Object.values(pins) : Object.values(pins2)
    
    console.log(pins, 'pins')
    console.log(pins2, 'pins2')
  
    return (
    
  
       <div className="pins">
        {arrayPins.map(pin => (
            <PinIndex className="pin" key={pin.id} pin={pin} />
        ))}
        </div>
     
    )
  
  }
  
  export default SearchPins;