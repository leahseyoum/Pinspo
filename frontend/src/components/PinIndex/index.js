// Pins.js
import { useState, useEffect } from 'react';
import PinIndex from './PinView';
import './index.css'


function Pins() {

  const [pins, setPins] = useState([]);
 
  useEffect(() => {
    fetch('/api/pins')
      .then(response => response.json())
      .then(data => setPins(data));
  }, []);

  
  const arrayPins = Object.values(pins)
  

  return (

     <div className="pins">
      {arrayPins.map(pin => (
          <PinIndex className="pin" key={pin.id} pin={pin}/>
      ))}
       {/* {selectedPin && (
        <Link to={`/pin/${selectedPin.id}`}>
          <PinDetail pin={selectedPin} />
        </Link>
      )} */}
      </div>
  
      
      
  )

}

export default Pins;
