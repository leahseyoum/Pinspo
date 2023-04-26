import React from 'react';
import { useSelector } from 'react-redux';


function PinDetail() {
    const pin = useSelector(state => state.pins.pin)
    
  return (
    <div className="pin-detail">
      <h2>{pin.title}</h2>
      <p>{pin.caption}</p>
      <img src={pin.image} alt={pin.title} />
    </div>
  );
}

export default PinDetail;