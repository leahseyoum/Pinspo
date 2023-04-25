// Pins.js
import { useState, useEffect } from 'react';
import PinIndex from './PinView';

function Pins() {

  const [pins, setPins] = useState([]);
 
  useEffect(() => {
    fetch('/api/pins')
      .then(response => response.json())
      .then(data => setPins(data));
  }, []);


   return (
    <div className="pins">
      {pins.map(pin => (
        <PinIndex key={pin.id} pin={pin} />
      ))}
    </div>
  );
}

export default Pins;
