import './BoardView.css';
import { useDispatch } from 'react-redux';
import { displayPins } from '../../store/pins';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BoardView = ({board}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const [pins, setPins] = useState([]);

    useEffect(() => {
        const getPins = async () => {
          const res = await dispatch(displayPins());
        };
        getPins();
      }, [dispatch]);

   
      const pins = useSelector(state => state.pins.pins);
      const arrayPins = pins ? Object.values(pins) : [];
      
      
      const boardPins = [];
      if (arrayPins) {
        arrayPins.forEach (pin => {
            if(board.pins.includes(pin.id)){
                boardPins.push(pin)
                if (boardPins.length === 3) {
                    return boardPins;
                }
                
            }
        })
      }

      const dummyItems = Array.from({ length: 3 - boardPins.length }, (_, index) => ({
        id: `dummy-${index}`,
        placeholder: true,
      }));
    
      const displayItems = [...boardPins, ...dummyItems];

    //     return (
    //     <>
    //         <div className='board-container'>
    //             <div className="board" onClick={() => history.push({pathname: `/boards/${board.id}`, state: { board: board }})}>
    //                 <div className="board-grid">
    //                     {boardPins.slice(0,3).map(pin => (
    //                         <div key={pin.id} className="board-grid-item">
    //                             <img className="board-image" src={pin.image} alt={pin.title} />
    //                         </div>
    //                     ))} 
    //                 </div>
    //             </div>
    //                 <h2 className="board-name">{board.name}</h2>

    //         </div>
    //     </>
    // )
    return (
        <>
        <Link className='board-container' to={`/boards/${board.id}`}>
          <div className='board-container'>
            <div
              className='board'
            >
              <div className='board-grid'>
                {displayItems.slice(0,3).map(item => (
                  <div key={item.id} className='board-grid-item'>
                    {item.placeholder ? (
                      <div className='board-placeholder'></div>
                    ) : (
                      <img className='board-image' src={item.image} alt={item.title} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <h2 className='board-name'>{board.name}</h2>
          </div>
        </Link>
        </>
      );

    
}

export default BoardView;