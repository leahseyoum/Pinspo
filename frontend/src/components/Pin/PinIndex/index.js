// Pins.js
import { useState, useEffect } from 'react';
import PinIndex from './PinView';
import './index.css'
import { displayPins } from '../../../store/pins';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

function Pins() {
  const dispatch = useDispatch();
  const [pins, setPins] = useState([]);
 
  useEffect(() => {
    fetch('/api/pins')
      .then(response => response.json())
      .then(data => setPins(data));
  }, []);

  useEffect(() => {
    dispatch(displayPins());
  }, [])
  
  const arrayPins = Object.values(pins)
  
  

  return (
     <div className="pins">
      {arrayPins.map(pin => (
          <PinIndex className="pin" key={pin.id} pin={pin} />
      ))}
      </div>
   
  )

}

export default Pins;
