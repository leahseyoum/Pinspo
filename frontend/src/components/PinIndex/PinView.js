import "./PinView.css" 

function PinIndex({ pin }) {
    return (
      <div className="pin">
        <img src={pin.image_url} alt={pin.title} />
        {/* <h3 className="pin-title">{pin.title}</h3>
        <p className="pin-caption">{pin.caption}</p> */}
      </div>
    );
  }
  
  export default PinIndex;