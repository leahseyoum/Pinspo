// Pins.js
import { useState, useEffect } from 'react';
import PinIndex from './PinView';
import './index.css'
import { displayPins } from '../../../store/pins';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import Spinner from '../../Spinner/Spinner';

function Pins() {
  const dispatch = useDispatch();
  const [pins, setPins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    fetch('/api/pins')
      .then(response => response.json())
      .then(data => setPins(data));
  }, []);

  // useEffect(() => {
  //   dispatch(displayPins());
  // }, [])
  useEffect(() => {
    dispatch(displayPins())
      .then(() => setIsLoading(false)) 
      .catch(error => {
        setIsLoading(false); 
        console.error('Error fetching pins:', error);
      });
  }, [dispatch]);
  
  const arrayPins = Object.values(pins)
  
  

  // return (
  //    <div className="pins">
  //     {arrayPins.map(pin => (
  //         <PinIndex className="pin" key={pin.id} pin={pin} />
  //     ))}
  //     </div>
   
  // )
  
  return (
    <div className="pins">
      {isLoading ? ( // Render spinner while loading
        <Spinner />
      ) : (
        arrayPins.map(pin => (
          <PinIndex className="pin" key={pin.id} pin={pin} />
        ))
      )}
    </div>
  );


}

export default Pins;
