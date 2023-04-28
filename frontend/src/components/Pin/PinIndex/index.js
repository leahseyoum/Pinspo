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
  const sizes = ['small', 'medium', 'large'];

  return (
  

     <div className="pins">
      {arrayPins.map(pin => (
          <PinIndex className="pin" key={pin.id} pin={pin} size={sizes[Math.floor(Math.random() * sizes.length)]}/>
      ))}
      </div>
   
  )

}

export default Pins;
