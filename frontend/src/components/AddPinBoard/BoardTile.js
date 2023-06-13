import './BoardTile.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayPin } from "../../store/pins";

const BoardTile = ({ board }) => {
  const [tilePin, setTilePin] = useState(board.pins[0]);
  const dispatch = useDispatch();
  const [tilePhoto, setTilePhoto] = useState(null);

  useEffect(() => {
    if (tilePin) {
      dispatch(displayPin(tilePin));
    }
  }, [dispatch, tilePin]);

  useEffect(() => {
    if (tilePin) {
      fetch(`/api/pins/${tilePin}`)
        .then((res) => res.json())
        .then((data) => setTilePhoto(data.image))
        .catch((error) => {
          console.error(error);
          setTilePhoto(null);
        });
    }
  }, [tilePin]);

  useEffect(() => {
    setTilePin(board.pins[0]);
  }, [board.pins[0]]);

  return (
    <div className="board-tile">
      {tilePhoto ? (
        <div className='tile-photo-container'>
            <img className='tile-photo'src={tilePhoto} alt="Tile Photo" />
        </div>
      ) : (
        <div className='tile-photo-container'>
            <div className="tile-photo-null"></div>
        </div>

      )}
    </div>
  );
};

export default BoardTile;
