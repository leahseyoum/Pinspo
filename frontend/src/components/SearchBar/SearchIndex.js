import PinIndex from '../Pin/PinIndex/PinView';
import { useSelector } from 'react-redux';

function SearchPins() {
    const pins = useSelector(state => state.pins.pins);
    console.log(pins)
   
    if (!pins) {
        return null;
      }
    
    const arrayPins = Object.values(pins)
    
    
  
    return (
    
  
       <div className="pins">
        {arrayPins.map(pin => (
            <PinIndex className="pin" key={pin.id} pin={pin} />
        ))}
        </div>
     
    )
  
  }
  
  export default SearchPins;